import React, { useEffect, useRef } from "react";
import "./Page2.css";
import Button from "../Button/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

function Page2() {
    const p2l1 = useRef(null);
    const p2l2 = useRef(null);
    const p2top=useRef(null);
    const p2e=useRef(null);
    const p2i=useRef(null);
    const main = document.querySelector('#main');

    useGSAP(() => {
        
            gsap.to(p2l1.current, {
                marginTop: "-14vw",
                ease: "circ.out",
                scrollTrigger: {
                    trigger: "#string", 
                    scroller: main, 
                    start: "top 60%",
                    end: "top 10%",
                    scrub: 3,
                    
                }
            });
            gsap.to(p2l1.current, {
              x:"-800vw",
              duration:40,
              ease: "linear",
            repeat: -1,
              
            })
            gsap.to(p2l2.current,{
              marginTop: "3vw",
                ease: "circ.out",
                scrollTrigger: {
                    trigger: "#string", 
                    scroller: main, 
                    start: "top 40%",
                    end: "top 0%",
                    scrub:5,
                    
                }
            })
            gsap.from("#p2top span",{
              y:"10vw",
              ease: "expo.out",
              stagger:0.3,
              scrollTrigger: {
                trigger:"#p2top1",
                scroller: main,
                start: "top 76%",
                end: "top 60%",
                scrub: 5,                
               
              }
            })
            gsap.to(p2e.current,{
              x:"-700vw",
              duration:30,
              ease: "linear",
            repeat: -1,
              
            })
            gsap.to(p2i.current,{
              height:"30vw",
              width:"46vw",
              ease:"expo.out",
              scrollTrigger: {
                scroller: main,
                trigger:"#p2mid-r",
                start: "top 78%",
                end: "top 35%",
                scrub:5,
                
              }
            })
    }, []);

    return (
      
            <div id="page2">
                <div id="p2l1" ref={p2l1}>
                  <div className="marquee">• Energy • Innovation • Performance • Champion • Victory • Passion •</div>
                  <div className="marquee"> Energy • Innovation • Performance • Champion • Victory • Passion •</div>
                  <div className="marquee"> Energy • Innovation • Performance • Champion • Victory • Passion •</div>
                </div>
                <div id="p2l2" ref={p2l2}>
                  <div id="p2top1">
                  <div id="p2top" ref={p2top}>
                    <span>AIR&nbsp;</span>
                    <span>JORDAN&nbsp;</span>
                    <span>1</span>
                    </div>
                 
                    </div>
                    <div id="p2mid">
                      <div id="p2mid-l">
                        <div id="pmidlt">Try Now:</div>
                        <div id="pmidlb">
                          <Button text="Explore"/>
                        </div>
                      </div>
                      <div id="p2mid-r">
                      <div id="p2imgd" ref={p2i}>
                        <img src="./Images/x.png"/>
                      </div>
                      </div>
                    </div>
                    <div id="p2end" ref={p2e}>
                    <div className="marquee1">• Just Do It • Just Do It • Just Do It • Just Do It • Just Do It • Just Do It •</div>
                  <div className="marquee1"> Just Do It • Just Do It • Just Do It • Just Do It • Just Do It • Just Do It •</div>
                  <div className="marquee1"> Just Do It • Just Do It • Just Do It • Just Do It • Just Do It • Just Do It •</div>
                   <div className="marquee1"> Just Do It • Just Do It • Just Do It • Just Do It • Just Do It • Just Do It •</div>
                    </div>
                  </div>        
        </div>
    );
}

export default Page2;
