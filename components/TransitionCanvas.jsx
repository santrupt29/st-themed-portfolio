"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import AshParticles from "./AshParticles";

export default function TransitionCanvas({ isUpsideDown }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [showParticles, setShowParticles] = useState(false);

  // Configuration
  const frameCount = 120; // Total frames in sequence
  const duration = 6; // Seconds for transition

  useEffect(() => {
    console.log("TransitionCanvas mounted, isUpsideDown:", isUpsideDown);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const images = [];
    const frame = { index: 0 };

    // Preload images
    // Assuming images are named ezgif-frame-001.jpg to ezgif-frame-080.jpg
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Pad number with zeros to 3 digits
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/frms/ezgif-frame-${paddedIndex}.jpg`;
      images.push(img);
    }

    // Resize handler to cover screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Draw current frame immediately after resize
      if (images[Math.floor(frame.index)]) {
        renderFrame(Math.floor(frame.index));
      }
    };

    const renderFrame = (index) => {
      const img = images[index];
      if (!img || !img.complete) return;

      const ctx = context;
      const w = canvas.width;
      const h = canvas.height;
      const imgW = img.width;
      const imgH = img.height;

      // Calculate "cover" dimensions
      const scale = Math.max(w / imgW, h / imgH);
      const x = (w - imgW * scale) / 2;
      const y = (h - imgH * scale) / 2;

      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, x, y, imgW * scale, imgH * scale);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Animation Logic
    let animation = null;

    if (isUpsideDown) {
      // Play forward 0 -> end
      animation = gsap.to(frame, {
        index: frameCount - 1,
        duration: duration,
        ease: "power2.inOut",
        onUpdate: () => {
          renderFrame(Math.floor(frame.index));
        },
        onComplete: () => {
          setShowParticles(true);
          setTimeout(() => {
        setShowParticles(false);
        context.clearRect(0, 0, canvas.width, canvas.height);
      },100);
        }
      });
    } else {
      // If toggling back to normal, maybe reverse or just clear?
      // For now, let's reverse smoothly if the user untoggles
      // animation = gsap.to(frame, {
      //   index: 0,
      //   duration: duration,
      //   ease: "power2.inOut",
      //   onUpdate: () => {
      //     renderFrame(Math.floor(frame.index));
      //   },
      //   onComplete: () => {
      //     setShowParticles(false);
      //     context.clearRect(0, 0, canvas.width, canvas.height);
      //   }
      // });

      // Or simply clear immediately/fade out as requested "Transition triggers when user enters Upside Down"
      // The requirement focuses on "Entering", but we should probably handle exit.
      // Current behavior: Reset
      setShowParticles(false);
      gsap.killTweensOf(frame);
      context.clearRect(0, 0, canvas.width, canvas.height);
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animation) animation.kill();
    };
  }, [isUpsideDown]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-[100] transition-opacity duration-1000 ${isUpsideDown ? 'opacity-100' : 'opacity-0'}`}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full object-cover"
      />
      {showParticles && <AshParticles />}
    </div>
  );
}
