import Head from 'next/head';
import { Box, Container } from '@mui/material';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Journey from '../components/Journey';
import MountainRange from '../components/MountainRange';
import PictureSlider from '../components/PictureSlider';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import TransitionLine from '../components/TransitionLine';
import { GoogleAnalytics } from '../lib/gtag';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Elton Quek - Software Developer</title>
                <meta name="description" content="Software Developer with expertise in React.js, Node.js, and modern web technologies. Currently at A*STAR, previously at Credit Suisse and CrimsonLogic." />
                <meta name="keywords" content="Software Developer, React.js, Node.js, JavaScript, Frontend Developer, Full Stack Developer" />
                <meta name="author" content="Elton Quek" />
                <meta property="og:title" content="Elton Quek - Software Developer" />
                <meta property="og:description" content="Software Developer with expertise in React.js, Node.js, and modern web technologies." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://eltonquek.vercel.app" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel='icon'
                    href='./eqLogo.svg'
                />
            </Head>
            <GoogleAnalytics />

            <TransitionLine />

            <main className="relative z-10" sx={{
                background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #f0fdfa 100%)',
            }}>
                <Header />
                <MountainRange />
                <PictureSlider />
                <Skills />
                <Journey />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}
