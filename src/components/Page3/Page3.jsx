import React, { useEffect, useRef } from "react";
import "./Page3.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Category from "./Category";
function Page3() {
    
const textani1=useRef(null);
const main=document.querySelector('#main');
gsap.registerPlugin(ScrollTrigger) ;

useGSAP(()=>{
    gsap.from("#p3heading span",{
        y:"5vw",
        ease:"expo.out",
        stagger:0.08,
        scrollTrigger: {
            trigger:"#p2end",
            scroller: main,
            start: "top 80%",
            end: "top 60%",
            scrub:5,

        } 
    });
})



const cattext = [
    { txtl: "Shoes", txtr: "Step Up Your Game" },
    { txtl: "Clothing", txtr: "Style And Performance" },
    { txtl: "Kids", txtr: "For Young Athletes" },
    { txtl: "Bestsellers", txtr: "Top Picks" }
];


    return (
        <div id="page3">
            <div id="p3top">
                <div id="p3heading" ref={textani1}>
                    <span>C</span><span>A</span><span>T</span><span>E</span><span>G</span><span>O</span><span>R</span><span>I</span><span>E</span><span>S&nbsp;</span><span><i className="ri-corner-right-down-line"></i></span>
                </div>
            </div>
            <div id="p3mid">
                {cattext.map((elem, idx) => (
                    <Category key={idx} txtl={elem.txtl} txtr={elem.txtr} idx={idx}/>
                ))}
            </div>
        </div>
    );
}

export default Page3;
