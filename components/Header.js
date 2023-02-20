import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const Header = () => (
    <>
        <div className={styles.bigWords}>
            <div >
                Elton Quek
            </div>
            <TextAnimation />
        </div>
    </>
);

export default Header;



export function TextAnimation() {
    const words = [
        'Software developer', 'Caffeine consumer', 'Keyboard warrior', 'Café hopper'
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
        <div className={styles.textAnimation}>{words[index]}</div>
    );
}