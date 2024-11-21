import { Container } from '@mui/system';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Journey from '../components/Journey';
import MountainRange from '../components/MountainRange';
import PictureSlider from '../components/PictureSlider';
import TransitionLine from '../components/TransitionLine';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Elton Quek</title>
                <link
                    rel='icon'
                    href='./eqLogo.svg'
                />
            </Head>
            {/* <motion.div
                style={{ y }}
                className={styles.backgroundImage}
            /> */}
            <TransitionLine />
            <Container>
                <main>
                    <Header />
                    <div className={styles.mountainRange}>
                        <MountainRange />
                    </div>
                    <PictureSlider/>
                    <Journey />
                    <Footer />
                </main>
            </Container>

            <style jsx>{`
                main {
                    padding: 3rem 0;
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
                    overflow-x: hidden; /* Lock scrolling on the x-axis */
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}
