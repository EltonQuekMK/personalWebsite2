import { Box } from '@mui/material';
import Head from 'next/head';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Journey from '../components/Journey';
import PictureSlider from '../components/PictureSlider';
import Projects from '../components/Projects';
import ScrollToTop from '../components/ScrollToTop';
import Skills from '../components/Skills';
import TransitionLine from '../components/TransitionLine';
import { GoogleAnalytics } from '../lib/gtag';

export default function Home() {
    return (
        <Box sx={{
            minHeight: '100vh',
            overflowX: 'hidden',
            backgroundColor: '#fafafa'
        }}>
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
                <link rel='icon' href='./eqLogo.svg' />
            </Head>
            <GoogleAnalytics />
            <TransitionLine />
            <Box component="main" sx={{ position: 'relative', zIndex: 2, fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>
                <Header />
                <PictureSlider />
                <Skills />
                <Journey />
                <Projects />
                <Contact />
                <ScrollToTop />
            </Box>
        </Box>
    );
}
