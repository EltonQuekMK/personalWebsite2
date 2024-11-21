import Divider from '@mui/material/Divider';
import * as React from 'react';
import styles from '../styles/Home.module.css';
import { Box, Container } from '@mui/material';
import { motion, AnimatePresence } from "framer-motion";

export default function PictureSlider() {
    return (
        <>
            <Box sx={{ height: "400px", width: "100vw", backgroundColor: "#0058DD" }}>
                <Container>
                    <AnimatePresence>
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            className={styles.image}
                            initial={false}
                            animate={{ y: -10, x: 20, maxWidth: 320, borderRadius: "800px 800px 16px 16px", rotate: 7  }}
                            src={`images/CorporatePic.jpg`}
                            alt=""
                        />
                    </AnimatePresence>
                </Container>
            </Box>
        </>
    );

}