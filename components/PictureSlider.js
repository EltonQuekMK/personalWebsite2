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
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                        position: 'absolute',
                        right: isSmall ? '20px' : '80px',
                        top: isSmall ? '80%' : '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 11,
                        textAlign: isSmall ? 'center' : 'right',
                        ...(isSmall && {
                            background: 'rgba(0, 0, 0, 0.3)',
                            backdropFilter: 'blur(8px)',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                        })
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
                            maxWidth: '300px',
                            lineHeight: 1.6
                        }}
                    >
                        Passionate about creating digital solutions that make a difference
                    </Typography>
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
                            maxWidth: isSmall ? '280px' : '320px',
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