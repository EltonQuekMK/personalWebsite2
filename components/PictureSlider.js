import { Box, Container, Typography } from '@mui/material';
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import { useIsSmall } from "../utils/mediaUtils";

export default function PictureSlider() {
    const [photo1position, setPhoto1position] = useState("30px");
    const isSmall = useIsSmall();
    const ref = useRef();
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    useEffect(() => {
        setPhoto1position(isSmall ? "calc((100vw - 320px)/2)" : "30px");
    }, [isSmall]);

    return (
        <Box
            id="content-section"
            ref={ref}
            sx={{
                position: 'relative',
                height: { xs: "350px", sm: "400px", md: "450px" },
                background: 'linear-gradient(135deg, #0058dd 0%, #0070f3 100%)',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Container maxWidth="xl" sx={{ position: 'relative', height: '100%' }}>
                {/* Text content */}
                <motion.div>
                    <Box
                        sx={{
                            position: 'absolute',
                            right: { xs: '5px', md: '80px' },
                            top: { xs: '85%', md: '50%' },
                            transform: 'translateY(-50%)',
                            zIndex: 11,
                            textAlign: { xs: 'center', md: 'right' },
                            // Mobile background styling
                            background: { xs: 'rgba(0, 0, 0, 0.3)', md: 'transparent' },
                            backdropFilter: { xs: 'blur(8px)', md: 'none' },
                            borderRadius: { xs: '16px', md: 0 },
                            border: { xs: '1px solid rgba(255, 255, 255, 0.1)', md: 'none' },
                            boxShadow: { xs: '0 8px 32px rgba(0, 0, 0, 0.2)', md: 'none' },
                            p: { xs: 1, md: 0 }
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                color: 'white',
                                fontWeight: 700,
                                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
                                mb: 2
                            }}
                        >
                            Meet Elton
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.9)',
                                fontSize: { xs: '1rem', md: '1.2rem' },
                                maxWidth: '330px',
                                lineHeight: 1.6
                            }}                        >
                            Full-stack developer who turns coffee into code and ideas into reality
                        </Typography>
                    </Box>
                </motion.div>

                {/* Profile image */}
                <AnimatePresence>
                    <motion.img
                        initial={{
                            y: 50,
                            rotate: 0,
                            scale: 0.8,
                            opacity: 0
                        }}
                        animate={isInView ? {
                            y: 0,
                            x: photo1position,
                            rotate: 7,
                            scale: 1,
                            opacity: 1
                        } : {
                            y: 50,
                            rotate: 0,
                            scale: 0.8,
                            opacity: 0
                        }}
                        whileHover={{
                            scale: 1.05,
                            rotate: 0,
                            transition: { duration: 0.3 }
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: "easeOut"
                        }}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            maxWidth: '320px',
                            borderRadius: '800px 800px 16px 16px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            border: '4px solid rgba(255,255,255,0.2)',
                            zIndex: 10
                        }}
                        src={`images/CorporatePic.jpg`}
                        alt="Elton Quek - Software Developer"
                    />
                </AnimatePresence>
            </Container>
        </Box>
    );
}