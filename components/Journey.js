import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AiFillCode } from 'react-icons/ai';
import { BsBank2 } from 'react-icons/bs';
import { FaGraduationCap, FaStar } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

const journeyData = [
    {
        icon: <FaStar className="text-yellow-500" />,
        date: '2023 - Now',
        title: 'A*STAR',
        subtitle: 'Senior Research Engineer',
        description: 'Developing alongside scientists and researchers, utilizing new technologies to upgrade Singapore towards an innovation-driven economy. Leading full-stack development initiatives and mentoring junior developers.',
        color: 'from-yellow-500 to-orange-500',
        bgColor: 'from-yellow-50 to-orange-50'
    },
    {
        icon: <BsBank2 className="text-blue-600" />,
        date: '2021 - 2023',
        title: 'Credit Suisse',
        subtitle: 'Senior Software Engineer',
        description: 'Working in a multi-national company with global and regional requirements and systems, interacting and liaising with international teams across a complex suite of microservices.',
        color: 'from-blue-600 to-indigo-600',
        bgColor: 'from-blue-50 to-indigo-50'
    },
    {
        icon: <AiFillCode className="text-green-600" />,
        date: '2017 - 2021',
        title: 'CrimsonLogic',
        subtitle: 'Software Developer',
        description: 'My first foray into professional software development. Participated in the graduate rotation program, gaining hands-on experience across various projects while learning the ins and outs of coding and mentoring fresh graduates.',
        color: 'from-green-600 to-emerald-600',
        bgColor: 'from-green-50 to-emerald-50'
    },
    {
        icon: <FaGraduationCap className="text-purple-600" />,
        date: '2013 - 2017',
        title: 'Nanyang Technological University',
        subtitle: 'Double Degree Graduate',
        description: 'Graduated with a Double Degree in Computer Science and Business, building a strong foundation in both technical and business domains.',
        color: 'from-purple-600 to-pink-600',
        bgColor: 'from-purple-50 to-pink-50'
    }
];

export default function Journey() {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, amount: 0.1, rootMargin: "100px" });

    return (
        <Box 
            id="journey"
            ref={ref}
            sx={{ 
                py: 10, 
                background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
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
                            className={styles.siteHeader}
                            sx={{
                                fontWeight: 700,
                                mb: 3,
                                background: 'linear-gradient(135deg, #0058dd 0%, #0070f3 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                fontSize: { xs: '2.5rem', md: '3.5rem' }
                            }}
                        >
                            My Journey
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{ 
                                color: 'text.secondary', 
                                maxWidth: '600px', 
                                mx: 'auto',
                                lineHeight: 1.6
                            }}
                        >
                            From student to senior engineer - here's how I've grown in the world of technology
                        </Typography>
                    </Box>
                </motion.div>

                <Box sx={{ position: 'relative' }}>
                    {/* Timeline line */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '4px',
                            height: '100%',
                            background: 'linear-gradient(to bottom, #0058dd, #0070f3)',
                            borderRadius: '2px',
                            opacity: 0.3,
                            display: { xs: 'none', md: 'block' }
                        }}
                    />
                    
                    {journeyData.map((item, index) => (
                        <TimelineNode
                            key={index}
                            item={item}
                            index={index}
                            isInView={isInView}
                            isLeft={index % 2 === 0}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

function TimelineNode({ item, index, isInView, isLeft }) {
    const gradientColors = {
        'from-yellow-500 to-orange-500': { main: '#f59e0b', light: '#fef3c7' },
        'from-blue-600 to-indigo-600': { main: '#2563eb', light: '#dbeafe' },
        'from-green-600 to-emerald-600': { main: '#059669', light: '#d1fae5' },
        'from-purple-600 to-pink-600': { main: '#9333ea', light: '#f3e8ff' }
    };
    
    const colors = gradientColors[item.color] || { main: '#0058dd', light: '#e3f2fd' };

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                mb: 6,
                flexDirection: { xs: 'column', md: isLeft ? 'row-reverse' : 'row' }
            }}
        >
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ 
                    width: '100%', 
                    maxWidth: { xs: '100%', md: '45%' },
                    padding: { xs: '0', md: isLeft ? '0 2rem 0 0' : '0 0 0 2rem' }
                }}
            >
                <motion.div whileHover={{ scale: 1.02, y: -5 }}>
                    <Card
                        elevation={4}
                        sx={{
                            p: 4,
                            borderRadius: 3,
                            background: `linear-gradient(135deg, ${colors.light} 0%, #ffffff 100%)`,
                            border: '1px solid rgba(255,255,255,0.5)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 2, // Ensure cards are above the timeline and icons
                            '&:hover': {
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                zIndex: 3, // Higher z-index on hover
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: `linear-gradient(90deg, ${colors.main}, ${colors.main}dd)`,
                            }
                        }}
                    >
                        <CardContent sx={{ p: 0 }}>
                            {/* Date Badge */}
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    px: 2,
                                    py: 1,
                                    borderRadius: 25,
                                    background: `linear-gradient(135deg, ${colors.main}, ${colors.main}dd)`,
                                    color: 'white',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    mb: 2,
                                    boxShadow: `0 4px 12px ${colors.main}40`
                                }}
                            >
                                {item.date}
                            </Box>
                            
                            {/* Title and Subtitle */}
                            <Typography
                                variant="h4"
                                component="h3"
                                sx={{
                                    fontWeight: 700,
                                    color: 'text.primary',
                                    mb: 1,
                                    transition: 'color 0.3s ease',
                                    '&:hover': { color: colors.main }
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    color: 'text.secondary',
                                    mb: 2
                                }}
                            >
                                {item.subtitle}
                            </Typography>
                            
                            {/* Description */}
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    lineHeight: 1.7
                                }}
                            >
                                {item.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>

            {/* Center Icon - Hidden on mobile */}
            <Box
                sx={{
                    position: { xs: 'relative', md: 'absolute' },
                    left: { md: isLeft ? '25%' : '75%' }, // Position on opposite side of card
                    transform: { md: 'translateX(-50%)' },
                    zIndex: 10,
                    my: { xs: 2, md: 0 },
                    display: { xs: 'none', md: 'block' }
                }}
            >
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                    <Box
                        sx={{
                            width: 64,
                            height: 64,
                            background: `linear-gradient(135deg, ${colors.main}, ${colors.main}dd)`,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 8px 20px ${colors.main}40`,
                            border: '4px solid white',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                boxShadow: `0 12px 30px ${colors.main}60`,
                            }
                        }}
                    >
                        <Box sx={{ color: 'white', fontSize: '1.5rem' }}>
                            {item.icon}
                        </Box>
                    </Box>
                </motion.div>
            </Box>

            {/* Spacer for the other side - Hidden on mobile */}
            <Box sx={{ width: { xs: '0', md: '45%' }, display: { xs: 'none', md: 'block' } }} />
        </Box>
    );
}