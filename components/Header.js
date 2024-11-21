import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { Container } from '@mui/system';
import Logo from '../components/Logo.js';
import { motion } from "framer-motion";

const Header = () => (
    <>
        <Container className={styles.headerContainer}>
            <Logo />
            <div className={styles.bigWords}>
                <div>
                    I'm <span className={styles.name}>Elton Quek</span>
                </div>
                <TextAnimation />
            </div>
        </Container>
    </>
);

export default Header;

export function TextAnimation() {
    const words = [
        'Software developer',
        'Coffee enjoyer',
        'Part-time gymrat',
        'Full-time debugger',
    ];
    const [index, setIndex] = useState(0);
    const [rotation, setRotation] = useState(0.5);

    const maxRotate = 7;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                // reset index if current index is greater than array size
                return prevIndex + 1 < words.length ? prevIndex + 1 : 0;
            });
            setRotation((prevRotation) => {
                return prevRotation > 0 ? -Math.random() * maxRotate : Math.random() * maxRotate;
            });
            
        }, 3000);

        return () => clearInterval(interval);
    });

    return (
        <motion.div
            key={words[index]}
            className={styles.textAnimation}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: rotation, translateX: rotation }}
        >
            {words[index]}
        </motion.div>
    );
}
