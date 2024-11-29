import React, { useEffect, useRef } from 'react';
import "./Navbar.css";
import MidElem from './MidElem';
import gsap from 'gsap';

function Navbar() {
    const butpoint = useRef(null);
    const but = useRef(null);
    const arr = useRef(null);
    const layer2 = useRef(null);

    const navigations = [
        { name: "Air Jordan", path: "#airjordan" },
        { name: "Categories", path: "#categories" },
        { name: "Featured", path: "#featured" },
        { name: "Spotlights", path: "#spotlights" },
    ];

    useEffect(() => {
        const handlebutton = () => {
            gsap.to(butpoint.current, {
                scale: 1.9,
                duration: 0.7,
                ease: "power4.out",
            });
            gsap.to(arr.current, {
                opacity: 1,
                rotateZ: "45deg",
                duration: 0.5,
                ease: "power4.out",
            });
            gsap.to(layer2.current, {
                top: "0",
                duration: 0.8,
                ease: "expo.out",
            });
        };

        const removeButton = () => {
            gsap.to(butpoint.current, {
                scale: 1,
                duration: 0.7,
                ease: "power4.out",
            });
            gsap.to(arr.current, {
                opacity: 0,
                rotateZ: "0",
                duration: 0.6,
                ease: "power4.out",
            });
            gsap.to(layer2.current, {
                top: "3.6vw",
                duration: 0.8,
                ease: "power4.out",
            });
        };

        but.current.addEventListener("mousemove", handlebutton);
        but.current.addEventListener("mouseout", removeButton);

        return () => {
            but.current.removeEventListener("mousemove", handlebutton);
            but.current.removeEventListener("mouseout", removeButton);
        };
    }, []);

    return (
        <>
            <div id="nav">
                <div id="nav-l">
                    <img src="/Images/i1.png" alt="Logo" />
                </div>
                <div id="nav-m">
                    
                        {navigations.map(({ path, name }, idx) => (
                            <div id="links" key={idx}>
                                <MidElem
                                    to={path}
                                    value={name}
                                    circleClassName="circle-bg"
                                />
                            </div>
                        ))}
                    
                </div>
                <div id="nav-r">
                    <button id="nav-but" ref={but}>
                        <div id="but-layer1">
                            CONTACT US 
                            <div id="but-point" ref={butpoint}>
                                <div id="arr" ref={arr}>
                                    <i className="ri-arrow-right-up-line"></i>
                                </div>
                            </div>
                        </div>
                        <div id="but-layer2" ref={layer2}></div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
