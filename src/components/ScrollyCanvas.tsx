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
  const currentFrameRef = useRef(0);
  const frameCount = 120; // 000 to 119

  const drawFrame = useCallback((index: number) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const validIndex = Math.min(index, imagesRef.current.length - 1);
    const img = imagesRef.current[validIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    
    if (canvasWidth === 0 || canvasHeight === 0) return;

    // Highest quality cinematic smoothing (prevents pixelation)
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const canvasRatio = canvasWidth / canvasHeight;
    const imgRatio = img.naturalWidth / img.naturalHeight;

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

    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    
    currentFrameRef.current = validIndex;
  }, []);

  // Preloading
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
             imagesRef.current[0] = img; // Make first frame available immediately
             drawFrame(0);
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
        drawFrame(currentIndex);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [drawFrame, scrollYProgress]);

  // Framer Motion automatically syncs this callback with rendering pipeline.
  // Direct function call ensures immediate drawing, no weird mobile vanishing behavior.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (imagesRef.current.length === 0) return;
    const frameIndex = Math.min(
      imagesRef.current.length - 1,
      Math.max(0, Math.floor(latest * frameCount))
    );
    drawFrame(frameIndex);
  });

  useEffect(() => {
    let resizeFrame: number;
    let lastWidth = 0;
    let lastHeight = 0;

    const handleResize = () => {
      if (!canvasRef.current || !canvasRef.current.parentElement) return;
      
      const parent = canvasRef.current.parentElement;
      const currentWidth = parent.clientWidth;
      const currentHeight = parent.clientHeight;
      
      // Prevent mobile vertical scroll bar vanishing / weird scaling issues
      // Ignore vertical only resizes on mobile (e.g. url bar hide)
      const isMobile = window.innerWidth <= 768;
      if (isMobile && currentWidth === lastWidth && canvasRef.current.width > 0) {
        return;
      }

      lastWidth = currentWidth;
      lastHeight = currentHeight;
      
      const dpr = window.devicePixelRatio || 1;
      
      // Actual buffer dimensions scaled by Device Pixel Ratio for ultimate sharpness
      canvasRef.current.width = currentWidth * dpr;
      canvasRef.current.height = currentHeight * dpr;
      
      // CSS display size covers exactly 100%
      canvasRef.current.style.width = "100%";
      canvasRef.current.style.height = "100%";

      if (imagesRef.current.length > 0) {
        drawFrame(currentFrameRef.current);
      }
    };
    
    // Initial size calc
    handleResize();
    
    const debouncedResize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(handleResize);
    };

    window.addEventListener("resize", debouncedResize, { passive: true });
    window.addEventListener("orientationchange", () => {
      setTimeout(handleResize, 100); // Safari fix
    });
    
    return () => {
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("orientationchange", handleResize);
      cancelAnimationFrame(resizeFrame);
    };
  }, [drawFrame]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[#121212]">
        
        {/* Cinematic sequence canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full block" 
        />
        
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <Overlay containerRef={containerRef} />
      </div>
    </div>
  );
}
