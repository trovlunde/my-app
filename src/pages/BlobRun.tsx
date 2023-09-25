import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useFollowPointer } from "./useFollowPointer";
import "./Blob.css";

export default function Blob() {
  const [isFrozen, setIsFrozen] = useState(false);

  const toggleFrozenState = () => {
    setIsFrozen(!isFrozen);
  };

  const container = {
    hidden: { rotate: 90 },
    show: {
      rotate: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemA = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 30 },
  };

  const itemB = {
    hidden: { scale: 0, top: 200 },
    show: { scale: 1, top: 80 },
  };

  const [isAnimating, setIsAnimating] = useState(true);
  const [isAnimating2, setIsAnimating2] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(!isAnimating);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, [isAnimating2]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating2(!isAnimating2);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, [isAnimating]);

  const ref = useRef(null);

  const { x, y } = useFollowPointer(ref);

  const springProps = {
    type: "spring",
    damping: 3,
    stiffness: 100,
    restDelta: 0.001,
  };
  

  return (
    <div>
      <div style={{ marginTop: 300, width: 600, height: 500 }}>
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              style={{
                width: 150,
                height: 150,
                borderRadius: 30,
                backgroundColor: "lightblue",
                position: "relative",
              }}
              variants={container}
              initial="hidden"
              animate="show"
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
              }}
            >
              <motion.div style={{ ...blobStyle, left: 30 }} variants={itemA} />
              <motion.div style={{ ...blobStyle, left: 80 }} variants={itemA} />
              <motion.div style={{ ...blobStyle, left: 30 }} variants={itemB} />
              <motion.div style={{ ...blobStyle, left: 80 }} variants={itemB} />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isAnimating2 && (
            <motion.div
              style={{
                width: 150,
                height: 150,
                x: 200,
                borderRadius: 30,
                backgroundColor: "lightblue",
                position: "relative",
              }}
              variants={container}
              initial="hidden"
              animate="show"
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
              }}
            >
              <motion.div style={{ ...blobStyle, left: 30 }} variants={itemA} />
              <motion.div style={{ ...blobStyle, left: 80 }} variants={itemA} />
              <motion.div style={{ ...blobStyle, left: 30 }} variants={itemB} />
              <motion.div style={{ ...blobStyle, left: 80 }} variants={itemB} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="blob-container">
      <motion.div
        className={`blob ${isFrozen ? "frozen" : ""}`}
        drag={!isFrozen} // Enable dragging when not frozen
        dragConstraints={{ left: 0, top: 0, right: window.innerWidth - 150, bottom: window.innerHeight - 150 }}
        onClick={toggleFrozenState}
        animate={{x, y}}
        transition={springProps}
      ></motion.div>
    </div>
    </div>
  );
}

const blobStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: 75,
  backgroundColor: "#1d1ef0",
  position: "absolute",
};
