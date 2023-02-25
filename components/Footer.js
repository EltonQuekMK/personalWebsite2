import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { Container } from '@mui/system';
import styles from '../styles/Home.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <Container>
            I created this website from scratch, feel free to look at my GitHub
            for the code or my other socials
            <br />
            <SocialNav />
        </Container>
    </footer>
);

export default Footer;

const SocialNav = () => (
    <>
        {socialLinks.map(([name, link]) => {
            const SocialIcon = icons[name];
            return (
                <a
                    key={name}
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.socialNav}
                >
                    <SocialIcon />
                </a>
            );
        })}
    </>
);

const icons = {
    linkedin: IoLogoLinkedin,
    github: IoLogoGithub,
};

const socialLinks = [
    ['linkedin', 'https://www.linkedin.com/in/eltonquek/'],
    ['github', 'https://github.com/EltonQuekMK'],
];
