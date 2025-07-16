import { Box, Container, Typography } from '@mui/material';
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import Logo from '../components/Logo.js';
import MountainRange from '../components/MountainRange.js';
import styles from '../styles/Home.module.css';

const Header = () => {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <Box
            ref={ref}
            sx={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                minHeight: { xs: 'calc(100vh - 200px)', md: 'calc(100vh - 300px)' },
                overflow: 'hidden'
            }}
        >
            {/* MountainRange behind everything */}
            <Box sx={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                zIndex: 1,
                overflow: 'hidden'
            }}>
                <MountainRange />
            </Box>

            {/* Translucent background layer */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 2,
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(10px)',
                borderRadius: { xs: 0, md: 3 },
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
            }} />

            {/* Content layer */}
            <Container
                maxWidth="xl"
                sx={{
                    py: { xs: 6, md: 8 },
                    px: { xs: 2, md: 6 },
                    position: 'relative',
                    zIndex: 3,
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{ width: '100%' }}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'center', md: 'flex-start' },
                    gap: { xs: 4, md: 8 }
                }}>
                    <motion.div
                        variants={itemVariants}
                        style={{ order: { xs: 2, md: 1 } }}
                    >
                        <Logo />
                    </motion.div>

                    <Box sx={{
                        order: { xs: 1, md: 2 },
                        textAlign: { xs: 'center', md: 'left' },
                        flex: 1
                    }}>
                        <motion.div variants={itemVariants}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
                                    fontWeight: 700,
                                    lineHeight: 1.1,
                                    mb: 3,
                                    color: 'text.primary',
                                }}
                            >
                                I'm{' '}
                                <Box
                                    component="span"
                                    sx={{
                                        color: '#0058dd',
                                    }}
                                >
                                    Elton Quek
                                </Box>
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Box sx={{ mb: 4 }}>
                                <TextAnimation />
                            </Box>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'text.secondary',
                                    maxWidth: '600px',
                                    lineHeight: 1.8,
                                    fontSize: { xs: '1rem', md: '1.25rem' },
                                    mb: 4
                                }}
                            >
                                Passionate software developer crafting digital experiences with modern technologies.
                            </Typography>
                        </motion.div>
                    </Box>
                </Box>
            </motion.div>
        </Container>
        </Box>
    );
};

export default Header;

export function TextAnimation() {
    const words = [
        'Software developer',
        'Problem solver',
        'Coffee enjoyer',
        'Part-time gymrat',
        'Full-time debugger',
    ];
    const [index, setIndex] = useState(0);
    const [rotation, setRotation] = useState(0.5);

    const maxRotate = 7;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                return prevIndex + 1 < words.length ? prevIndex + 1 : 0;
            });
            setRotation((prevRotation) => {
                return prevRotation > 0 ? -Math.random() * maxRotate : Math.random() * maxRotate;
            });

        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ 
            height: { xs: '60px', md: '80px' }, 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-start' }
        }}>
            <motion.div
                key={words[index]}
                className={styles.textAnimation}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: rotation, translateX: rotation }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {words[index]}
            </motion.div>
        </Box>
    );
}
