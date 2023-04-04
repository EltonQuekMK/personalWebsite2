import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from '@mui/system';
import Journey from '../components/Journey';
import Image from 'next/image';
import MountainRange from '../components/MountainRange';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

    return (
        <div className={styles.container}>
            <Head>
                <title>Elton Quek</title>
                <link
                    rel='icon'
                    href='./eqLogo.svg'
                />
            </Head>
            <motion.div
                style={{ y }}
                className={styles.backgroundImage}
            />
            <Container>
                <main>
                    <Header />
                    <div className={styles.mountainRange}>
                    <MountainRange />

                    </div>

                    <Journey />
                    <Footer />
                </main>
            </Container>

            <style jsx>{`
                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    z-index: 2;
                }
            `}</style>

            <style
                jsx
                global
            >{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    min-height: 100%;
                    position: relative;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                        Helvetica Neue, sans-serif;
                    background-color: #f0f8ff;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}
