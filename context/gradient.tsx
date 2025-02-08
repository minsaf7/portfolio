'use client'
import { useEffect, useState } from "react";

interface GradientdivProps {
    children?: React.ReactNode;
    className?: string;
  }
  
  const Gradientdiv: React.FC<GradientdivProps> = ({ children, className }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const updateMousePosition = (ev: MouseEvent) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
  
      if (typeof window !== "undefined") {
        window.addEventListener("mousemove", updateMousePosition);
        return () => {
          window.removeEventListener("mousemove", updateMousePosition);
        };
      }
    }, []);
  
    return (
      <div
        style={{
          backgroundImage: `radial-gradient( circle at ${
            mousePosition.x
          }px ${mousePosition.y}px, #1f2833 , #0b0c10 40% )`,
        }}
        className={className}
      >
        {children}
      </div>
    );
  };


  export default Gradientdiv