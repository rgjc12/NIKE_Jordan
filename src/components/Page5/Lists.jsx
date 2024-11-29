import React, { useEffect, useRef } from "react";
import "./Page5.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Lists({text}) {
    const lshow=useRef(null);
    const main=document.querySelector("#main");
    useGSAP(()=>{
        gsap.from(lshow.current,{
            y:"2.5vw",
            ease:"expo.out",
            stagger:0.8,
            scrollTrigger:{
                scroller:main,
                trigger:"#pb1",
                start:"top 77%",
                end:"top 69%",
                scrub:5,
              
                

            }
            
        })
        lshow.current.addEventListener("mousemove",()=>{
            gsap.to("#cursor",{
                scale:2.5,
                ease:"expo.out",
                duration:1
            })
        })
        lshow.current.addEventListener("mouseleave",()=>{
            gsap.to("#cursor",{
                scale:1,
                ease:"expo.out",
                duration:1
            })
        })
    });
  return (
    <>
    <div className="lhide">
        <div className="lshow" ref={lshow}>{text}<i className="ri-arrow-right-up-line"></i></div>
    </div>
    </>
  )
}

export default Lists