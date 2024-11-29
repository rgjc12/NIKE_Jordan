import React, { useState } from 'react';
import { motion } from "framer-motion";
import Magnetic from '../Magnetic/Magnetic';
function MidElem({ value, to, circleClassName }) {
  const [hover, setHover] = useState(false);
  const characters = value.split("");

  const spanVariantsUp = {
    initial: { y: 0 },
    onHover: { y: "-100%" },
    closed: {
      y: 0,
      transition: { duration: 0.45, ease: [0.32, 0, 0.67, 0] },
    },
  };
  const spanVariantsDown = {
    initial: { y: "100%" },
    onHover: { y: 0 },
    closed: {
      y: "100%",
      transition: { duration: 0.45, ease: "backInOut" },
    },
  };
  const circleVariants = {
    initial: { width: 0, height: 0 },
    onHover: { width: "7px", height: "7px" },
    closed: {
      width: 0,
      height: 0,
      transition: { duration: 0.45, ease: "backInOut" },
    },
  };

  return (
    <Magnetic>
        <motion.div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="motion-wrapper"
          initial="initial"
          animate={hover ? "onHover" : "closed"}
        >
          <motion.span
            className="text-wrapper"
            initial="initial"
            animate={hover ? "onHover" : "closed"}
            transition={{ staggerChildren: 0.01 }}
          >
            {characters.map((character, idx) => (
              <motion.span
                key={idx}
                variants={spanVariantsUp}
                transition={{ ease: "backInOut", duration: 0.45 }}
                className="character"
              >
                {character}
              </motion.span>
            ))}
            <div className="absolute-wrapper">
              {characters.map((character, idx) => (
                <motion.span
                  key={idx}
                  variants={spanVariantsDown}
                  transition={{ ease: "backInOut", duration: 0.45 }}
                  className="character"
                >
                  {character}
                </motion.span>
              ))}
            </div>
          </motion.span>
          <motion.div className={`circle ${circleClassName}`} variants={circleVariants} />
        </motion.div>
    </Magnetic>
  );
}

export default MidElem;
