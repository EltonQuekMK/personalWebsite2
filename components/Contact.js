import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { IoDocument, IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';

const contactOptions = [
    {
        icon: <IoMail />,
        label: 'Email Me',
        href: 'mailto:quekmkelton@gmail.com',
        description: 'Let\'s discuss',
        colorMain: '#ea580c',
        colorSecondary: '#f59e0b'
    },
    {
        icon: <IoLogoLinkedin />,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/eltonquek/',
        description: 'Connect professionally',
        colorMain: '#2563eb',
        colorSecondary: '#06b6d4'
    },
    {
        icon: <IoLogoGithub />,
        label: 'GitHub',
        href: 'https://github.com/EltonQuekMK',
        description: 'Check out my code',
        colorMain: '#8b5cf6',
        colorSecondary: '#ec4899'
    },
    {
        icon: <IoDocument />,
        label: 'Resume',
        href: 'https://drive.google.com/file/d/17jSf3CB5j1Y_pkIXG3vP8YdePsv5Vb7n/view?usp=drive_link',
        description: 'View my experience',
        colorMain: '#10b981',
        colorSecondary: '#84cc16'
    }
];

export default function Contact() {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, amount: 0.1, rootMargin: "100px" });

    return (
        <Box
            id='contact'
            ref={ref}
            sx={{
                py: 10,
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontWeight: 700,
                                mb: 3,
                                fontSize: { xs: '2.5rem', md: '4rem' }
                            }}
                        >
                            Let's Build Something
                            <Box
                                component="span"
                                sx={{
                                    display: 'block',
                                    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent'
                                }}
                            >
                                Amazing Together
                            </Box>
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'rgba(255,255,255,0.8)',
                                maxWidth: '700px',
                                mx: 'auto',
                                lineHeight: 1.7
                            }}
                        >
                            I'm always excited about new opportunities and challenging projects.
                            Whether you're looking for a dedicated developer or want to collaborate on innovative solutions,
                            I'd love to hear from you!
                        </Typography>
                    </Box>
                </motion.div>

                {/* Contact Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Grid container spacing={3} sx={{ mb: 8 }}>
                        {contactOptions.map((option, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <motion.div
                                        whileHover={{
                                            background: [
                                                `linear-gradient(135deg, ${option.colorMain}, ${option.colorSecondary})`,
                                                `linear-gradient(135deg, ${option.colorSecondary}, ${option.colorMain})`
                                            ]
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeInOut"
                                        }}
                                        style={{
                                            borderRadius: '12px',
                                            background: `linear-gradient(135deg, ${option.colorMain}, ${option.colorSecondary})`
                                        }}
                                    >
                                        <Link href={option.href} target="_blank" rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''} style={{ textDecoration: 'none', width: '100%' }}>
                                            <Button
                                                fullWidth
                                                sx={{
                                                    p: 3,
                                                    borderRadius: 3,
                                                    background: 'transparent',
                                                    color: 'white',
                                                    textTransform: 'none',
                                                    flexDirection: 'column',
                                                    gap: 2,
                                                    minHeight: '120px',
                                                    transition: 'box-shadow 0.3s ease',
                                                    '&:hover': {
                                                        background: 'transparent',
                                                        boxShadow: `0 8px 25px ${option.colorMain}40`
                                                    }
                                                }}
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                                    style={{
                                                        padding: '12px',
                                                        background: 'rgba(255,255,255,0.2)',
                                                        borderRadius: '50%',
                                                        fontSize: '2rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        width: '48px',
                                                        height: '48px'
                                                    }}
                                                >
                                                    {option.icon}
                                                </motion.div>
                                                <Box>
                                                    <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'center' }}>
                                                        {option.label}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                                        {option.description}
                                                    </Typography>
                                                </Box>                                        </Button>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                            <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
                                Made with React & Next.js
                            </Typography>
                        </Box>
                        <Typography sx={{ color: 'rgba(255,255,255,0.6)' }}>
                            Check out the source code on GitHub to see how this site was built
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
