import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { Container } from '@mui/system';
import Logo from '../components/Logo.js';

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
        'Caffeine aficionado',
        'Coding in progress...',
        'Part-time gymrat',
        'Full-time debugger',
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
        <div
            key={words[index]}
            className={styles.textAnimation}
        >
            {words[index]}
        </div>
    );
}
