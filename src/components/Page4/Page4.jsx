import React, { useEffect, useRef } from "react";
import "./Page4.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Page4() {
  gsap.registerPlugin(ScrollTrigger) ;
  const p4head=useRef(null);
  const txt1=useRef(null);
  const txt2=useRef(null);
  const i4=useRef(null);
  const main=document.querySelector('#main');
  useGSAP(()=>{
      gsap.from(p4head.current.querySelectorAll('span'),{
        y:"6vw",
        ease:"expo.out",
        stagger:0.08,
        scrollTrigger: {
          trigger:"#page4",
          scroller: main,
          start: "top 78%",
          end: "top 52%",
          scrub:5,
         
        }})
        gsap.to(i4.current,{
          height:"48vw",
          width:"92vw",
          ease:"expo.out",
          objectFit:true,
          scrollTrigger:{
            trigger:"#page4",
          scroller: main,
          start: "top 32%",
          end: "top -10%",
          scrub:5,
          
          }
        
        })
        gsap.from(txt1.current,{
         left:0,
          ease:"expo.out",
          scrollTrigger:{
            trigger:"#page4",
            scroller: main,
            start: "top 32%",
            end: "top -10%",
            scrub:5,
           
          }
        })
        gsap.from(txt2.current,{
          right:"-9vw",
           ease:"expo.out",
           scrollTrigger:{
             trigger:"#page4",
             scroller: main,
             start: "top 32%",
             end: "top -10%",
             scrub:5,
             
           }
         })
      });



  return (
    <>
    <div id="page4">
        <div id="p4-top">
    <div id="p4head" ref={p4head}>
      <span>•&nbsp;</span><span>F</span><span>E</span><span>A</span><span>T</span><span>U</span><span>R</span><span>E</span><span>D</span>
    </div>
        </div>
        <div id="p4-mid">
          <div id="text1" ref={txt1}>WOMEN</div>
          <div id="text2" ref={txt2}>SPORTS</div>
          <div id="image4" ref={i4}><img src="/Images/i4.jpg"/></div>
        </div>
    </div>
    </>
  )
}

export default Page4