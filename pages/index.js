import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from '@mui/system';
import Journey from '../components/Journey';
import Image from 'next/image';

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
            <Header />

            <Container>
                <main>
                    <div className={styles.mountainRange}>
                        <Image
                            src='mountainRange.svg'
                            fill={true}
                            alt='Picture'
                        />
                    </div>
                    <Journey />
                </main>
            </Container>
            <Footer />

            <style jsx>{`
                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
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
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                        Helvetica Neue, sans-serif;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}
