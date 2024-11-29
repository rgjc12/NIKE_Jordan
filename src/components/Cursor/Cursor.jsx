import React, { useEffect, useRef } from 'react';
import "./Cursor.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



function Cursor() {
  const cursorRef= useRef(null);

  useGSAP(() => {    
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursorRef.current, {
        x: e.pageX, 
        y: e.pageY,        
        ease: "expo.out",
        duration: 0.5,
      });
    });
  });

  return (
    <div id="cursor" ref={cursorRef}>
    </div>
  );
}

export default Cursor;
