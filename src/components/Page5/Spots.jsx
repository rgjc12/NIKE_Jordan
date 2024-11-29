import React, { useEffect, useRef } from "react";
import "./Page5.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Spots({name,img,no}) {
  const main=document.querySelector('#main');
  const smtxt=useRef(null);
  const spot=useRef(null);
  const smimg=useRef(null);
  const underline=useRef(null);
  useGSAP(()=>{
    gsap.to(smtxt.current, {
      background: "linear-gradient(to right, #B9E937 100%, rgb(65, 65, 65) 50%)",
      backgroundClip:"text",
      color: "transparent",
      ease: "expo.out",
      scrollTrigger: {
        scroller: main,
        trigger: ".sm",
        scrub: 5,
        start: "top 86%",
        end: "top 64%",
      }
    });
    spot.current.addEventListener("mousemove",()=>{
      gsap.to(smimg.current,{
        opacity:1,
        duration:2.12,
        height:"21vw",
        width:"19vw",
        ease:"expo.out",
        transform: "rotate(0)"
        
      })
      gsap.to(underline.current,{
        width:"100%",
        duration:2.5,
        ease:"expo.out"
      })
    });
    spot.current.addEventListener("mouseleave",()=>{
      gsap.to(smimg.current,{
        opacity:0,
        duration:2.12,
        height:"15vw",
        width:"12vw",
        ease:"expo.out",
        transform: "rotate(-20deg)"
      })
      gsap.to(underline.current,{
        width:"0%",
        duration:2.5,
        ease:"expo.out"
      })
    });
  }, [main]);





  return (
    <>
    <div className="spots" ref={spot}>
      <div className="sl">{no}</div>
      <div className="sm">
        <div className="smtext" ref={smtxt}>{name}</div>
        <div className="smimg" ref={smimg}><img src={img}/></div>
        <div className="under" ref={underline}></div>
      </div>
      <div className="se"><i className="ri-arrow-right-up-line"></i></div>
    </div>
    </>
  )
}

export default Spots