import { Box, Button, Card, CardContent, Container, Grid, Paper, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaHandshake, FaRocket } from 'react-icons/fa';
import { IoDocument, IoHeart, IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';

const contactOptions = [
    {
        icon: <IoMail />,
        label: 'Email Me',
        href: 'mailto:quekmkelton@gmail.com',
        description: 'Let\'s discuss your project',
        colorMain: '#3b82f6',
        colorSecondary: '#2563eb'
    },
    {
        icon: <IoLogoLinkedin />,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/eltonquek/',
        description: 'Connect professionally',
        colorMain: '#2563eb',
        colorSecondary: '#4f46e5'
    },
    {
        icon: <IoLogoGithub />,
        label: 'GitHub',
        href: 'https://github.com/EltonQuekMK',
        description: 'Check out my code',
        colorMain: '#374151',
        colorSecondary: '#1f2937'
    },
    {
        icon: <IoDocument />,
        label: 'Resume',
        href: '/resume.pdf',
        description: 'View my experience',
        colorMain: '#10b981',
        colorSecondary: '#059669'
    }
];

const features = [
    {
        icon: <FaCode />,
        title: 'Clean Code',
        description: 'Writing maintainable, scalable solutions',
        color: '#3b82f6'
    },
    {
        icon: <FaRocket />,
        title: 'Innovation',
        description: 'Bringing creative ideas to life',
        color: '#a855f7'
    },
    {
        icon: <FaHandshake />,
        title: 'Collaboration',
        description: 'Working together towards success',
        color: '#10b981'
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
            {/* Background Effects */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '25%',
                    left: '25%',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
                    borderRadius: '50%'
                }}
            />
            <motion.div
                animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    bottom: '25%',
                    right: '25%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
                    borderRadius: '50%'
                }}
            />

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

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Grid container spacing={4} sx={{ mb: 8 }}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <motion.div whileHover={{ scale: 1.05, y: -5 }}>
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            p: 4,
                                            textAlign: 'center',
                                            borderRadius: 3,
                                            background: 'rgba(255,255,255,0.05)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            color: 'white',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                background: 'rgba(255,255,255,0.1)',
                                            }
                                        }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            style={{
                                                marginBottom: '16px',
                                                display: 'flex',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <Box sx={{ fontSize: '3rem', color: feature.color }}>
                                                {feature.icon}
                                            </Box>
                                        </motion.div>
                                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                                            {feature.title}
                                        </Typography>
                                        <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
                                            {feature.description}
                                        </Typography>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
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
                                    <Button
                                        href={option.href}
                                        target={option.href.startsWith('http') ? '_blank' : '_self'}
                                        rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                        fullWidth
                                        sx={{
                                            p: 3,
                                            borderRadius: 3,
                                            background: `linear-gradient(135deg, ${option.colorMain}, ${option.colorSecondary})`,
                                            color: 'white',
                                            textTransform: 'none',
                                            flexDirection: 'column',
                                            gap: 2,
                                            minHeight: '120px',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                background: `linear-gradient(135deg, ${option.colorSecondary}, ${option.colorMain})`,
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
                                                fontSize: '1.5rem',
                                                lineHeight: '1'
                                            }}
                                        >
                                            {option.icon}
                                        </motion.div>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                {option.label}
                                            </Typography>
                                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                                {option.description}
                                            </Typography>
                                        </Box>
                                    </Button>
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
                                Made with
                            </Typography>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <IoHeart style={{ color: '#ef4444' }} />
                            </motion.div>
                            <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
                                using React & Next.js
                            </Typography>
                        </Box>
                        <Typography sx={{ color: 'rgba(255,255,255,0.6)' }}>
                            Check out the source code on GitHub to see how this site was built!
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
