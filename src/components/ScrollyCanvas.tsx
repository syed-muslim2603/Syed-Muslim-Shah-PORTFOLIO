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
  const [hasError, setHasError] = useState(false);
  const frameCount = 120; // 000 to 119

  const drawFrame = useCallback((index: number, imgArray: HTMLImageElement[] = imagesRef.current) => {
    if (!canvasRef.current || imgArray.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const validIndex = Math.min(index, imgArray.length - 1);
    const img = imgArray[validIndex];
    if (!img) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
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

    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  useEffect(() => {
    let isCancelled = false;
    const loadedImages: HTMLImageElement[] = new Array(frameCount);
    let errorCount = 0;

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
          errorCount++;
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
      } else {
        setHasError(true);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [drawFrame, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (imagesRef.current.length === 0) return;
    const frameIndex = Math.min(
      imagesRef.current.length - 1,
      Math.max(0, Math.floor(latest * frameCount))
    );
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        canvasRef.current.style.width = `${window.innerWidth}px`;
        canvasRef.current.style.height = `${window.innerHeight}px`;

        if (imagesRef.current.length > 0) {
          const currentIndex = Math.min(
            imagesRef.current.length - 1,
            Math.max(0, Math.floor(scrollYProgress.get() * frameCount))
          );
          drawFrame(currentIndex);
        }
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", () => {
      setTimeout(handleResize, 100);
    });
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [scrollYProgress, drawFrame]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[#121212]">
        {hasError && fallbackImage ? (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          />
        ) : (
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
        )}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" /> {/* Overlay darkening for text readability */}
        <Overlay containerRef={containerRef} />
      </div>
    </div>
  );
}
