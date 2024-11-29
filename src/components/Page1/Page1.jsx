import React, { useEffect, useRef } from "react";
import "./Page1.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../Button/Button";

function Page1() {
  const p1inco1 = useRef(null);
  const p1inco2 = useRef(null);
  const p1inco3 = useRef(null);
  const gr = useRef(null);
  const imgref1 = useRef(null);
  const framep1= useRef(null);
  const string= useRef(null);
  

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#inco1 span", {
      y: "10vw",
      duration: 1.35,
      ease: "expo.out",
      stagger: 0.2,
    })
      .from("#inco2", {
        y: "10vw",
        duration: 1,
        ease: "expo.out",
        stagger: 0.1,
      })
      .from("#inco3 span", {
        y: "10vw",
        duration: 1,
        ease: "expo.out",
        stagger: 0.1,
      })
      .to("#p1div2box", {
        width: "12vw",
        duration: 1,
        marginRight: "1vw",
        ease: "elastic.out(1,0.8)",
      });
  });

  useEffect(() => {
    const lerp = (x, y, a) => x * (1 - a) + y * a;
    const cursor=document.querySelector("#cursor");
    gr.current.addEventListener("mousemove", (e) => {
      let dim = framep1.current.getBoundingClientRect(); 
      let xstart = dim.x;
      let xend = dim.x + dim.width;
      let zo = gsap.utils.mapRange(xstart, xend, 0, 1, e.clientX);
  
      gsap.to(cursor, {
        height: "0",
        width: "0",
        borderRadius: "50%",
        duration: 1,
        ease: "expo.out",
      });
      gsap.to(imgref1.current, {
        height: "18vw",
        width: "22vw",
        opacity: 1,
        duration: 3,
        x: lerp(-120, 120, zo),
        ease: "elastic.out(1,0.8)",
      });
    });
  
    gr.current.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        height: "1.5vw",
        width: "1.5vw",
        borderRadius: "50%",
        duration: 1.2,
        ease: "expo.out",
      });
      gsap.to(imgref1.current, {
        height: "0",
        width: "0",
        opacity: 0,
        duration: 3,
        x: 0,
        ease: "elastic.out(1,0.8)",
      });
    });


    let ini=`M 0 100 Q 650 100 1300 100`;
    let fin=`M 0 100 Q 650 100 1300 100`;
    string.current.addEventListener("mousemove",(e)=>{
      ini=`M 0 100 Q ${e.x} ${e.y/1.7} 1300 100`
      gsap.to("svg path",{
        attr:{d:ini},
        duration:1.5,
        ease: "elastic.out(1,0.1)",
      })
    })
    string.current.addEventListener("mouseleave",()=>{
      gsap.to("svg path",{
        attr:{d:fin},
      duration:1.5,
        ease: "elastic.out(1,0.1)",
      })
    })


  }, []);
  
  return (
    <>
    <div id="page1">
      <div id="p1main">
        <div id="p1div1">
          <div id="inco1" ref={p1inco1}>
            <span>DO&nbsp;</span>
            <span>NOT</span>
          </div>
        </div>
        <div id="p1div2" ref={p1inco2}>
          <div id="inco2">
            <div id="p1div2box">
              <img src="/Images/i2.png" />
            </div>
            WASTE
          </div>
        </div>
       <div id="framep1" ref={framep1}>
          <img ref={imgref1} src="/Images/i3.webp" />
          </div>
        <div id="p1div3" ref={p1inco3}>
          <div id="inco3">
            <span>YOUR&nbsp;</span>
            <span id="gr" ref={gr}>
              ENERGY.
            </span>
          </div>
        </div>
        
      </div>
      <div id="but1">
      <Button text="Run In Jordan"/>
      </div>
      <div id="string" ref={string}>
        
    <svg width="1300" height="200" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 100 Q 650 100 1300 100" stroke="green" fill="transparent"/>
    </svg>
      </div>
      </div>
      
    </>
  );
}

export default Page1;
