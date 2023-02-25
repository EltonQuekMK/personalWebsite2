import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Logo = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    triggerAnimation();
  }, []);

  function triggerAnimation() {
    setAnimate(true);
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 2000);
      return () => clearTimeout(timer);
  }

  return (
    <div className={styles.eqLogo}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={triggerAnimation} onTouchStart={triggerAnimation}>
        <g id="eqLogo">
          <g id="bottomCap" className={animate ? styles.bottomCap : ""}>
            <path
              id="Vector1"
              d="M4.5 78.5V95.5H95.5V78.5"
              stroke="#0066FF"
              stroke-width="5"
            />
          </g>
          <g id="topCap" className={animate ? styles.topCap: ""}>
            <path
              id="Vector2"
              d="M4.5 21.5V4.5H95.5V21.5"
              stroke="#0066FF"
              stroke-width="5"
            />
          </g>
          <g id="letters">
            <path
              id="Q"
              d="M93.84 50C93.84 53.9467 93.36 57.6 92.4 60.96C91.44 64.32 90.08 67.2267 88.32 69.68L93.28 74.88L88.72 79.12L84.08 74.32C80.1333 77.52 75.4933 79.12 70.16 79.12C65.5733 79.12 61.4667 77.92 57.84 75.52C54.2667 73.12 51.4667 69.7333 49.44 65.36C47.4133 60.9333 46.4 55.8133 46.4 50C46.4 44.1867 47.4133 39.0933 49.44 34.72C51.4667 30.2933 54.2667 26.88 57.84 24.48C61.4667 22.08 65.5733 20.88 70.16 20.88C74.7467 20.88 78.8267 22.08 82.4 24.48C85.9733 26.88 88.7733 30.2933 90.8 34.72C92.8267 39.0933 93.84 44.1867 93.84 50ZM70.16 71.84C73.6267 71.84 76.56 70.88 78.96 68.96L72.16 61.84L76.64 57.6L82.96 64.16C85.04 60.32 86.08 55.6 86.08 50C86.08 43.6 84.6933 38.3733 81.92 34.32C79.2 30.2133 75.28 28.16 70.16 28.16C65.04 28.16 61.0933 30.2133 58.32 34.32C55.5467 38.3733 54.16 43.6 54.16 50C54.16 56.4 55.5467 61.6533 58.32 65.76C61.0933 69.8133 65.04 71.84 70.16 71.84Z"
              fill="#0066FF"
            />
            <path
              id="E"
              d="M11.4 78V22H45.56V28.88H19V45.28H40.12V52.16H19V71.12H46.28V78H11.4Z"
              fill="#0066FF"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
