import Divider from '@mui/material/Divider';
import * as React from 'react';
import styles from '../styles/Home.module.css';
import { Box, Container } from '@mui/material';
import { motion, AnimatePresence } from "framer-motion";
import { useIsSmall } from "../utils/mediaUtils"
import { useEffect } from 'react';
import { useState } from 'react';

export default function PictureSlider() {
    const [photo1position, setPhoto1position] = useState("30px")
    const isSmall = useIsSmall();

    useEffect(() => {
        setPhoto1position(isSmall ? "calc((100vw - 340px)/2)" : "30px");
    }, [isSmall]);

    return (
        <>
            <Box sx={{ height: "400px", width: "100vw", backgroundColor: "#0058DD" }}>
                <Container>
                    <AnimatePresence>
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            whileInView={{ rotate: 7 }}
                            viewport={{ once: true, amount: 0.9 }}
                            className={styles.image}
                            initial={{ y: -10, rotate: 0, maxWidth: 320, borderRadius: "800px 800px 16px 16px" }}
                            animate={{ x: photo1position}}
                            src={`images/CorporatePic.jpg`}
                            alt=""
                        />
                    </AnimatePresence>
                </Container>
            </Box>
        </>
    );

}