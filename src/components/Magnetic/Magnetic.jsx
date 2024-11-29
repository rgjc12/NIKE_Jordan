import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Magnetic = ({ children }) => {
  const magnetic = useRef(null);

  useEffect(() => {
    if (!magnetic.current) return;

    // Use GSAP's quickTo for smooth animation on x and y
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.45)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.45)",
    });

    // Event handlers
    const handleMouseMove = (e) => {
      if (window.innerWidth >= 768) {
        const { clientX, clientY } = e;
        const { height, width, left, top } = magnetic.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.45);
        yTo(y * 0.45);
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth >= 768) {
        xTo(0);
        yTo(0);
      }
    };

    // Attach event listeners to the magnetic div
    magnetic.current.addEventListener("mousemove", handleMouseMove);
    magnetic.current.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup on unmount
    return () => {
      magnetic.current.removeEventListener("mousemove", handleMouseMove);
      magnetic.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={magnetic} style={{ display: "inline-block", position: "relative" }}>
      {children}
    </div>
  );
};

export default Magnetic;
