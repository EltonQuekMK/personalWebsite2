import { Box, Container, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaCode, FaDatabase, FaJava, FaNodeJs, FaReact, FaTools } from 'react-icons/fa';
import { SiDocker, SiGit, SiJavascript, SiNextdotjs, SiRedux, SiTypescript } from 'react-icons/si';
import styles from '../styles/Home.module.css';
import { scrollToContact } from '../utils/scrollUtils';

const skillCategories = [
    {
        category: "Frontend Development",
        icon: <FaReact className="text-3xl text-blue-500" />,
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
        skills: [
            { name: "ReactJS", level: 95, icon: <FaReact className="text-blue-500" /> },
            { name: "TypeScript", level: 92, icon: <SiTypescript className="text-blue-600" /> },
            { name: "JavaScript (ES6+)", level: 95, icon: <SiJavascript className="text-yellow-500" /> },
            { name: "NextJS", level: 90, icon: <SiNextdotjs className="text-black" /> },
            { name: "Redux", level: 88, icon: <SiRedux className="text-purple-600" /> },
            { name: "HTML5/CSS3", level: 90, icon: <FaCode className="text-orange-500" /> }
        ]
    },
    {
        category: "Backend & Frameworks",
        icon: <FaNodeJs className="text-3xl text-green-500" />,
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
        skills: [
            { name: "NodeJS", level: 85, icon: <FaNodeJs className="text-green-500" /> },
            { name: "Java 11", level: 88, icon: <FaJava className="text-red-600" /> },
            { name: "C#/.NET Core", level: 85, icon: <FaCode className="text-purple-600" /> },
            { name: "REST APIs", level: 92, icon: <FaCode className="text-blue-500" /> },
            { name: "Spring/Micronaut", level: 80, icon: <FaCode className="text-green-600" /> },
            { name: "WebSockets", level: 85, icon: <FaCode className="text-indigo-500" /> }
        ]
    },
    {
        category: "Database & DevOps",
        icon: <FaDatabase className="text-3xl text-purple-500" />,
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
        skills: [
            { name: "MySQL", level: 85, icon: <FaDatabase className="text-blue-600" /> },
            { name: "MongoDB", level: 80, icon: <FaDatabase className="text-green-600" /> },
            { name: "Oracle SQL/MSSQL", level: 78, icon: <FaDatabase className="text-red-600" /> },
            { name: "Docker", level: 85, icon: <SiDocker className="text-blue-500" /> },
            { name: "GitLab CI/CD", level: 88, icon: <FaTools className="text-orange-600" /> },
            { name: "Azure DevOps", level: 82, icon: <FaTools className="text-blue-600" /> }
        ]
    },
    {
        category: "Testing & Tools",
        icon: <FaTools className="text-3xl text-orange-500" />,
        color: "from-orange-500 to-red-500",
        bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
        skills: [
            { name: "Jest/Testing", level: 88, icon: <FaTools className="text-red-600" /> },
            { name: "JUnit/Mockito", level: 85, icon: <FaTools className="text-green-600" /> },
            { name: "TDD", level: 85, icon: <FaCode className="text-blue-600" /> },
            { name: "Git", level: 95, icon: <SiGit className="text-orange-600" /> },
            { name: "SonarQube", level: 80, icon: <FaTools className="text-blue-500" /> },
            { name: "Unity/C#", level: 75, icon: <FaCode className="text-purple-500" /> }
        ]
    }
];

function SkillBar({ skill, index, isInView }) {
    const [animatedValue, setAnimatedValue] = useState(0);
    const [progressValue, setProgressValue] = useState(0);
    
    useEffect(() => {
        if (isInView) {
            // Animate the progress bar value
            const progressTimer = setTimeout(() => {
                setProgressValue(skill.level);
            }, index * 100);
            
            // Animate the percentage text
            const textTimer = setTimeout(() => {
                setAnimatedValue(skill.level);
            }, index * 100 + 200);
            
            return () => {
                clearTimeout(progressTimer);
                clearTimeout(textTimer);
            };
        } else {
            setAnimatedValue(0);
            setProgressValue(0);
        }
    }, [isInView, skill.level, index]);

    return (
        <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {skill.icon}
                    </motion.div>
                    <Typography variant="body2" fontWeight={600}>
                        {skill.name}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    >
                        <Typography variant="body2" fontWeight={600} sx={{ ml: 1 }}>
                            {Math.round(animatedValue)}%
                        </Typography>
                    </motion.div>
                </Box>
            </Box>
            <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
            >
                <LinearProgress
                    variant="determinate"
                    value={progressValue}
                    sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: '#e0e0e0',
                        transition: 'all 1.2s ease-in-out',
                        '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(90deg,#d3d3d3,#595959)',
                            borderRadius: 4,
                            overflow: 'hidden',
                            transition: 'transform 1.2s ease-in-out',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                animation: 'shimmer 2s infinite linear',
                            }
                        }
                    }}
                />
            </motion.div>
        </Box>
    );
}

function SkillCategory({ category, index }) {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    return (
        <Grid item xs={12} sm={6} lg={3}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 80, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 80, rotateX: -15 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
            >
                <Paper
                    elevation={4}
                    sx={{
                        height: '100%',
                        minHeight: '520px',
                        p: 3,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${category.category === "Frontend Development" ? '#f0f9ff, #e0f2fe' :
                                category.category === "Backend & Frameworks" ? '#f0fdf4, #dcfce7' :
                                    category.category === "Database & DevOps" ? '#fdf4ff, #fae8ff' :
                                        '#fff7ed, #fed7aa'
                            })`,
                        border: '1px solid rgba(255,255,255,0.2)',
                        position: 'relative',
                        overflow: 'visible', // Allow floating elements to show
                        '&:hover': {
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            background: `linear-gradient(90deg, ${category.category === "Frontend Development" ? '#0ea5e9, #06b6d4' :
                                    category.category === "Backend & Frameworks" ? '#10b981, #059669' :
                                        category.category === "Database & DevOps" ? '#a855f7, #ec4899' :
                                            '#f97316, #dc2626'
                                })`,
                        }
                    }}
                >
                    {/* Floating Category Icon */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            top: -12,
                            right: 16,
                            background: 'white',
                            borderRadius: '12px',
                            padding: '12px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            zIndex: 2,
                        }}
                    >
                        {category.icon}
                    </motion.div>

                    {/* Category Title */}
                    <Box sx={{ mb: 4, mt: 2 }}>
                        <Typography
                            variant="h5"
                            component="h3"
                            fontWeight={700}
                            sx={{
                                background: `linear-gradient(135deg, ${category.category === "Frontend Development" ? '#0ea5e9, #06b6d4' :
                                        category.category === "Backend & Frameworks" ? '#10b981, #059669' :
                                            category.category === "Database & DevOps" ? '#a855f7, #ec4899' :
                                                '#f97316, #dc2626'
                                    })`,
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                mb: 2
                            }}
                        >
                            {category.category}
                        </Typography>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 64 } : { width: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                            style={{
                                height: '3px',
                                background: `linear-gradient(90deg, ${category.category === "Frontend Development" ? '#0ea5e9, #06b6d4' :
                                        category.category === "Backend & Frameworks" ? '#10b981, #059669' :
                                            category.category === "Database & DevOps" ? '#a855f7, #ec4899' :
                                                '#f97316, #dc2626'
                                    })`,
                                borderRadius: '2px'
                            }}
                        />
                    </Box>

                    {/* Skills List */}
                    <Box>
                        {category.skills.map((skill, skillIndex) => (
                            <SkillBar
                                key={skill.name}
                                skill={skill}
                                index={skillIndex}
                                isInView={isInView}
                            />
                        ))}
                    </Box>
                </Paper>
            </motion.div>
        </Grid>
    );
}

export default function Skills() {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <Box
            id='skills'
            ref={ref}
            sx={{
                py: 10,
                background: 'linear-gradient(135deg, #f0f8ff 0%, #e3f2fd 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <motion.div
                animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    bottom: -100,
                    left: -100,
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(0,112,243,0.05) 0%, transparent 70%)',
                    borderRadius: '50%'
                }}
            />

            <Container maxWidth="lg">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                        >
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    px: 3,
                                    py: 1,
                                    borderRadius: 25,
                                    background: 'rgba(0,88,221,0.1)',
                                    color: '#0058dd',
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    mb: 3,
                                    gap: 1
                                }}
                            >
                                <FaCode />
                                Technical Expertise
                            </Box>
                        </motion.div>

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
                            My Skills
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: 'text.secondary',
                                maxWidth: '600px',
                                mx: 'auto',
                                lineHeight: 1.6,
                                mb: 4
                            }}
                        >
                            Crafting digital experiences with cutting-edge technologies and best practices.
                            Each skill represents years of hands-on experience and continuous learning.
                        </Typography>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 96 } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            style={{
                                height: '4px',
                                background: 'linear-gradient(90deg, #0058dd, #0070f3)',
                                borderRadius: '2px',
                                margin: '0 auto'
                            }}
                        />
                    </Box>
                </motion.div>

                {/* Skills Grid */}
                <Box sx={{ overflow: 'visible' }}>
                    <Grid container spacing={4}>
                        {skillCategories.map((category, index) => (
                            <SkillCategory
                                key={category.category}
                                category={category}
                                index={index}
                            />
                        ))}
                    </Grid>
                </Box>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <Box sx={{ textAlign: 'center', mt: 8 }}>
                        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
                            Think that I'm a good fit for your next project?
                        </Typography>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Box
                                component="button"
                                onClick={scrollToContact}
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    px: 4,
                                    py: 2,
                                    background: 'linear-gradient(135deg, #0058dd 0%, #0070f3 100%)',
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    borderRadius: 25,
                                    border: 'none',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 15px rgba(0,88,221,0.3)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 6px 20px rgba(0,88,221,0.4)',
                                        transform: 'translateY(-2px)'
                                    }
                                }}
                            >
                                Let's Work Together
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    style={{ marginLeft: '8px' }}
                                >
                                    →
                                </motion.span>
                            </Box>
                        </motion.div>
                    </Box>
                </motion.div>
            </Container>

        </Box>
    );
}
