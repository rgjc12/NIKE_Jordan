import React, { useEffect, useRef } from "react";
import "./Button.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Button({text}) {
    const buttoni = useRef(null);
    const buttext = useRef(null);
    const circle = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(buttoni.current, "x", {
          duration: 1,
          ease: "elastic.out(1, 0.45)",
        });
        const yTo = gsap.quickTo(buttoni.current, "y", {
          duration: 1,
          ease: "elastic.out(1, 0.45)",
        });
        const xTextTo = gsap.quickTo(buttext.current, "x", {
          duration: 1,
          ease: "elastic.out(1, 0.45)",
        });
        const yTextTo = gsap.quickTo(buttext.current, "y", {
          duration: 1,
          ease: "elastic.out(1, 0.45)",
        });
    
        const handleMouseMove = (e) => {
          if (window.innerWidth >= 768) {
            const { clientX, clientY } = e;
            const { height, width, left, top } =
              buttoni.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.45);
            yTo(y * 0.45);
            xTextTo(x * 0.45);
            yTextTo(y * 0.45);
          }
          gsap.to("#cursor",{
            height: "0",
            width: "0",
            borderRadius: "50%",
            duration: 1,
            ease: "expo.out",
          })
        };
    
        const handleMouseLeave = () => {
          if (window.innerWidth >= 768) {
            xTo(0);
            yTo(0);
            xTextTo(0);
            yTextTo(0);
          }
          gsap.to("#cursor",{
            height: "1.5vw",
            width: "1.5vw",
            borderRadius: "50%",
            duration: 1,
            ease: "expo.out",
          })
        };
    
        buttoni.current.addEventListener("mousemove", handleMouseMove);
        buttoni.current.addEventListener("mouseleave", handleMouseLeave);
    
        return () => {
          buttoni.current.removeEventListener("mousemove", handleMouseMove);
          buttoni.current.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, []);

      let timeline = useRef(null);

  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "0vw",duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-36vw", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
    
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
    
  };

  return (
    <>
    <div className="buttonbox">
    <button className="buttoni" ref={buttoni} onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}>
    <div className="buttextt" ref={buttext}><h1>{text}</h1></div>
    <div className="circless" ref={circle}></div>
    </button>
    </div>
    </>
  )
}

export default Button