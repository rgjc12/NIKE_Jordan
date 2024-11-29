import React, { useEffect, useRef } from "react";
import "./Page3.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
 
    function Category({ txtl, txtr, idx}) {
        const catani = useRef(null);
        const category=useRef(null);
        const cl=useRef(null);
        const cr=useRef(null);
        const imagesp3=["./Images/shoes.png","/Images/clothings.png","/Images/kids.png","/Images/bestsellers.jpg"];
        useEffect(() => {
            const cir=document.getElementById("cursor");

            category.current.addEventListener("mousemove",(e)=>{
                var att = category.current.getAttribute("data-image");
                
                cir.style.width = "25vw";
                cir.style.height = "30vw";
                cir.style.borderRadius = "10px";
                cir.style.backgroundImage = `url(${att})`;
                cir.style.backgroundSize = "cover"; 
                cir.style.mixBlendMode="normal";
                cir.style.backgroundPosition = "center";

                gsap.to(catani.current,{
                    height:"8vw",
                    duration:0.38,
                    ease:"power.out",
                });
                gsap.to(cl.current,{
                    x:"-1.2vw",
                    color:"green",
                    duration:1.3,
                    ease:"expo.out",
                })
                gsap.to(cr.current,{
                    x:"1.2vw",
                    color:"green",
                    duration:1.3,
                    ease:"expo.out",
                });

            })
            category.current.addEventListener("mouseleave",(e)=>{
                cir.style.width = "1.5vw";
                cir.style.height = "1.5vw";
                cir.style.borderRadius = "50%";
                cir.style.backgroundImage = `none`;
                cir.style.backgroundPosition = "center";
                cir.style.mixBlendMode="difference";

                gsap.to(catani.current,{
                    height:"0vw",
                    duration:0.38,
                    ease:"power.out",
                });
                gsap.to(cl.current,{
                    x:0,
                    color:"whitesmoke",                   
                    ease:"expo.out",
                    duration:1.3,
                })
                gsap.to(cr.current,{
                    x:0,
                    color:"whitesmoke",
                    ease:"expo.out",
                    duration:1.3,
                })

            })
        });
        



        return (
          <div className="category" ref={category} data-image={imagesp3[idx]}>
            <div className="catani" ref={catani}></div>
            <div className="category-l" ref={cl}>{txtl}</div>
            <div className="category-r" ref={cr}>{txtr}</div>
          </div>
        );
      }

export default Category