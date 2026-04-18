"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [fallbackImage, setFallbackImage] = useState<string | null>(null);
  const frameCount = 120; // 000 to 119
  const currentFrameRef = useRef(0);

  const drawFrame = useCallback((index: number, imgArray: HTMLImageElement[] = imagesRef.current) => {
    if (!canvasRef.current || imgArray.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const validIndex = Math.min(index, imgArray.length - 1);
    const img = imgArray[validIndex];
    if (!img) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    
    // Prevent errors if canvas has no layout dimensions yet
    if (canvasWidth === 0 || canvasHeight === 0) return;

    const canvasRatio = canvasWidth / canvasHeight;
    const imgRatio = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgRatio;
      drawHeight = canvasHeight;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    }

    // Clear rect instead of fillRect so the fallback image can show through 
    // if the canvas fails or clears unexpectedly on mobile.
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    
    currentFrameRef.current = validIndex;
  }, []);

  useEffect(() => {
    let isCancelled = false;
    const loadedImages: HTMLImageElement[] = new Array(frameCount);

    const loadPromises = Array.from({ length: frameCount }).map((_, i) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        const frameNum = i.toString().padStart(3, "0");
        img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;
        
        if (i === 0) {
          img.fetchPriority = "high";
        }

        img.onload = () => {
          if (isCancelled) return resolve();
          loadedImages[i] = img;
          
          if (i === 0) {
            setFallbackImage(img.src);
            drawFrame(0, [img]);
          }
          resolve();
        };

        img.onerror = () => {
          if (isCancelled) return resolve();
          console.warn(`Failed to load frame ${i}`);
          resolve();
        };
      });
    });

    Promise.all(loadPromises).then(() => {
      if (isCancelled) return;
      const validImages = loadedImages.filter(Boolean);
      if (validImages.length > 0) {
        imagesRef.current = validImages;
        const currentIndex = Math.min(
          validImages.length - 1,
          Math.max(0, Math.floor(scrollYProgress.get() * frameCount))
        );
        drawFrame(currentIndex, validImages);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [drawFrame, scrollYProgress]);

  // Framer Motion's useMotionValueEvent is already synced to the render loop.
  // Using requestAnimationFrame inside here defers drawing and causes vanishing 
  // on mobile when resizes/scrolls conflict. Draw immediately instead.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (imagesRef.current.length === 0) return;
    const frameIndex = Math.min(
      imagesRef.current.length - 1,
      Math.max(0, Math.floor(latest * frameCount))
    );
    drawFrame(frameIndex);
  });

  useEffect(() => {
    let lastWidth = window.innerWidth;
    let resizeFrame: number;
    
    const handleResize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        if (!canvasRef.current) return;
        
        const currentWidth = window.innerWidth;
        const currentHeight = window.innerHeight;
        
        // Mobile optimization: Scrolling often hides/shows the address bar, changing innerHeight 
        // but not innerWidth. Resetting canvas dimensions clears it, causing vanishing. 
        // We only resize if the width actually changes (like an orientation change) or on initial mount.
        if (currentWidth === lastWidth && canvasRef.current.width > 0) {
          return; 
        }
        
        lastWidth = currentWidth;
        
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = currentWidth * dpr;
        canvasRef.current.height = currentHeight * dpr;
        canvasRef.current.style.width = `${currentWidth}px`;
        canvasRef.current.style.height = `${currentHeight}px`;

        if (imagesRef.current.length > 0) {
          drawFrame(currentFrameRef.current);
        }
      });
    };
    
    // Initial setup
    handleResize();
    
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", () => {
      setTimeout(handleResize, 100);
      setTimeout(handleResize, 300); // Fallback for Safari's delayed rotation firing
    });
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      cancelAnimationFrame(resizeFrame);
    };
  }, [drawFrame]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative touch-pan-y">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[#121212] will-change-transform">
        
        {/* Fallback image sits permanently behind the canvas */}
        {fallbackImage && (
          <img 
            src={fallbackImage} 
            alt="Fallback Sequence Frame" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        {/* Canvas overlays the fallback. */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full block" 
          style={{ imageRendering: "crisp-edges", willChange: "transform" }}
        />
        
        <div className="absolute inset-0 bg-black/60 pointer-events-none" /> {/* Overlay darkening for text readability */}
        <Overlay containerRef={containerRef} />
      </div>
    </div>
  );
}
