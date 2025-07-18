import { Fab, Zoom } from '@mui/material';
import { useEffect, useState } from 'react';
import { scrollToTop } from '../utils/scrollUtils';
import { FaArrowUp } from 'react-icons/fa';
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const handleClick = () => {
        scrollToTop();
    };

    return (
        <Zoom in={isVisible}>
            <Fab
                color="primary"
                size="medium"
                aria-label="scroll back to top"
                onClick={handleClick}
                sx={{
                    position: 'fixed',
                    bottom: { xs: 20, sm: 30 },
                    right: { xs: 20, sm: 30 },
                    zIndex: 1000,
                    background: 'rgb(172, 165, 159)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                        background: 'linear-gradient(135deg,rgb(172, 165, 159) 0%,rgb(224, 102, 20) 100%)',
                    },
                    '&:active': {
                        background: 'linear-gradient(135deg,rgb(172, 165, 159) 0%,rgb(224, 102, 20) 100%)',
                    },
                    transition: 'all 0.3s ease-in-out',
                }}
            >
                <FaArrowUp />
            </Fab>
        </Zoom>
    );
};

export default ScrollToTop;
