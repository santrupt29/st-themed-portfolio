"use client";
import { useEffect, useState } from "react";

export default function GlitchText({ children, isUpsideDown }) {
  const [text, setText] = useState(children);

  // Simple glitch scramble effect on toggle
  useEffect(() => {
    if (isUpsideDown) {
      let iterations = 0;
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
      const interval = setInterval(() => {
        setText(() => 
          children
            .split("")
            .map((letter, index) => {
              if (index < iterations) return children[index];
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );
        
        if (iterations >= children.length) clearInterval(interval);
        iterations += 1 / 3;
      }, 30);
    } else {
      setText(children);
    }
  }, [isUpsideDown, children]);

  return (
    <span className={`relative inline-block ${isUpsideDown ? "text-glow font-horror" : ""}`}>
      {text}
      {/* CSS Clip Path Glitch layers could go here for advanced effect */}
    </span>
  );
}