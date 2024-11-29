import React, { useEffect, useRef } from "react";
import "./Page5.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Spots from "./Spots";
import Button from "../Button/Button";
import Lists from "./Lists";
function Page5() {
    const spotdata=[{name:"AIR JORDAN 1",img:"/Images/1.png",no:"01"},
                     {name:"DUNK",img:"/Images/2.png",no:"02"},
                     {name:"BLAZER",img:"/Images/3.png",no:"03"},
                     {name:"AIR FORCE 1",img:"/Images/4.png",no:"04"},
                  ];
    const company=["About Nike ","News ","Careers ","Investors "];
    const help=["Get Help ","Order Status ","Delivery "];

    const p5box = useRef(null);
    const p5=useRef(null);
    const fline=useRef(null);
    const p5btxt=useRef(null);
    const main = document.querySelector('#main');
    useGSAP(()=>{
       gsap.from(p5box.current.querySelectorAll('span'),{
        y:"10vw",
        ease:"expo.out",
        stagger:0.3,
        scrollTrigger: {
            trigger:"#p5-t",
            scroller: main,
            start: "top 79%",
            end: "top 65%",
            scrub:5            
        }
       })
       gsap.to(p5.current,{
        marginTop: "-2vw",
        ease: "circ.out",
        scrollTrigger: {
            trigger:"#page5",
            scroller: main,
            start: "top 75%",
            end: "top 32%",
            scrub:5            
        }
       })
       gsap.to(fline.current,{
        width:"100%",
        ease:"expo.out",
        scrollTrigger: {
            trigger:"#p5-b",
            scroller: main,
            start: "top 89%",
            end: "top 59%",
            scrub:5,
            
                        
        }
       });
       gsap.from(p5btxt.current.querySelectorAll("span"),{
        y:"10vw",
       ease:"expo.out",
       stagger:0.089,
       scrollTrigger:{
        scroller:main,
        trigger:"#p5botmid",
        start:"top 80%",
        end:"top 45%",
        scrub:5,
       }
       })
    })
  return (
    <>
<div id="page5">
    <div id="p5-t" ref={p5}>
        <div id="p5thead">
            <div id="p5box" ref={p5box}>
            <span>CLASSIC&nbsp;</span><span>SPOTLIGHTS</span>
            </div>
        </div>
        <div id="p5mid">
           { spotdata.map((elem,idx)=>{
           return (<Spots key={idx} name={elem.name} img={elem.img} no={elem.no} />)
            })}
        </div> 
    </div>
    <div id="p5-t1">      
    </div>
    <div id="p5-b">
        <div id="p5bottop">
        <div id="fline" ref={fline}></div>
        <div id="p5botimg"><i className="ri-global-line"></i>INDIA</div>
        </div>
        <div id="p5botmid">
            <div id="p5botmidtxt" ref={p5btxt}>
                <span>J</span><span>U</span><span>S</span><span>T&nbsp;</span><span>D</span><span>O&nbsp;</span><span>I</span><span>T</span>
            </div>
        </div>
        <div id="p5bot">
            <div id="p5botl"><Button text="BUY NOW!"/></div>
            <div id="p5botr">
                <div id="pb1">
                <div className="heading">COMPANY:</div>
                <div className="ch">
                   { company.map((elem,idx)=>{
                        return (<Lists key={idx} text={elem}/>)
                    })}
                </div>
                </div>
                <div id="pb2">
                <div className="heading">HELP:</div>
                <div className="ch">
                {help.map((elem, idx) => (
                  <Lists key={idx} text={elem} />
                ))}
              </div>
                </div>
            </div>
        </div>
            
    </div>
</div>
    </>
  )
}

export default Page5