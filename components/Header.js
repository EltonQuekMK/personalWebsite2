import React, { useEffect, useState, useCallback } from "react";
import styles from "../styles/Home.module.css";
import { Container } from "@mui/system";
import Logo from "../components/Logo.js";

const Header = () => (
  <>
    <Container>
      <Logo/>

      <div className={styles.bigWords}>
        <div>Elton Quek</div>
        <TextAnimation />
      </div>
      <BackgroundAnimation />
    </Container>
  </>
);

export default Header;

export function TextAnimation() {
  const words = [
    "Software developer",
    "Caffeine aficionado",
    "Coding monkey",
    "Part-time gymrat",
    "Full-time debugger",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // reset index if current index is greater than array size
        return prevIndex + 1 < words.length ? prevIndex + 1 : 0;
      });
    }, 3000);

    return () => clearInterval(interval);
  });
  return (
    <div key={words[index]} className={styles.textAnimation}>
      {words[index]}
    </div>
  );
}
const BackgroundAnimation = () => {
  return <></>;
};
