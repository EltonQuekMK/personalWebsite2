import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaDatabase, FaJava, FaNodeJs, FaReact, FaTools } from 'react-icons/fa';
import { SiAzuredevops, SiCsharp, SiDocker, SiDotnet, SiGit, SiGitlab, SiHtml5, SiJavascript, SiJunit5, SiMongodb, SiMysql, SiNextdotjs, SiOracle, SiRedux, SiSonarqube, SiSpring, SiTypescript, SiUnity } from 'react-icons/si';
import styles from '../styles/Home.module.css';
import { scrollToContact } from '../utils/scrollUtils';

const skillCategories = [
    {
        category: "Frontend Development",
        icon: <FaReact style={{ fontSize: '2rem', color: '#3b82f6' }} />,
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
        skills: [
            { name: "ReactJS", icon: <FaReact style={{ color: '#3b82f6' }} /> },
            { name: "TypeScript", icon: <SiTypescript style={{ color: '#2563eb' }} /> },
            { name: "JavaScript", icon: <SiJavascript style={{ color: '#eab308' }} /> },
            { name: "NextJS", icon: <SiNextdotjs style={{ color: '#000000' }} /> },
            { name: "Redux", icon: <SiRedux style={{ color: '#9333ea' }} /> },
            { name: "HTML5/CSS3", icon: <SiHtml5 style={{ color: '#f97316' }} /> }
        ]
    },
    {
        category: "Backend & Frameworks",
        icon: <FaNodeJs style={{ fontSize: '2rem', color: '#10b981' }} />,
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
        skills: [
            { name: "NodeJS", icon: <FaNodeJs style={{ color: '#10b981' }} /> },
            { name: "Java", icon: <FaJava style={{ color: '#dc2626' }} /> },
            { name: "C#", icon: <SiCsharp style={{ color: '#9333ea' }} /> },
            { name: ".NET Core", icon: <SiDotnet style={{ color: '#3b82f6' }} /> },
            { name: "Spring", icon: <SiSpring style={{ color: '#059669' }} /> },
            { name: "WebSockets", icon: <FaCode style={{ color: '#6366f1' }} /> }
        ]
    },
    {
        category: "Database & DevOps",
        icon: <FaDatabase style={{ fontSize: '2rem', color: '#a855f7' }} />,
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
        skills: [
            { name: "MySQL", icon: <SiMysql style={{ color: '#2563eb' }} /> },
            { name: "MongoDB", icon: <SiMongodb style={{ color: '#059669' }} /> },
            { name: "Oracle SQL/MSSQL", icon: <SiOracle style={{ color: '#dc2626' }} /> },
            { name: "Docker", icon: <SiDocker style={{ color: '#3b82f6' }} /> },
            { name: "GitLab CI/CD", icon: <SiGitlab style={{ color: '#ea580c' }} /> },
            { name: "Azure DevOps", icon: <SiAzuredevops style={{ color: '#2563eb' }} /> }
        ]
    },
    {
        category: "Testing & Tools",
        icon: <FaTools style={{ fontSize: '2rem', color: '#f97316' }} />,
        color: "from-orange-500 to-red-500",
        bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
        skills: [
            { name: "JUnit", icon: <SiJunit5 style={{ color: '#059669' }} /> },
            { name: "Test Driven Development", icon: <FaCode style={{ color: '#2563eb' }} /> },
            { name: "Git", icon: <SiGit style={{ color: '#ea580c' }} /> },
            { name: "SonarQube", icon: <SiSonarqube style={{ color: '#3b82f6' }} /> },
            { name: "Unity", icon: <SiUnity style={{ color: '#a855f7' }} /> }
        ]
    }
];

function SkillBar({ skill, index, isInView }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Box sx={{
                mb: 2,
                p: 2,
                borderRadius: 2,
                background: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                }
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {skill.icon}
                    </motion.div>
                    <Typography variant="body1" fontWeight={600}>
                        {skill.name}
                    </Typography>
                </Box>
            </Box>
        </motion.div>
    );
}

function SkillCategory({ category, index }) {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, threshold: 0.3, rootMargin: "50px" });

    return (
        <Grid item xs={12} sm={6} lg={3} sx={{ display: 'flex', marginBottom: 5 }}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 80, rotateX: -15, display: 'flex', flexGrow: 1, }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 80, rotateX: -15 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
                <Paper
                    elevation={4}
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
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
                    <Box sx={{ flex: 1 }}>
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

            <Container maxWidth="lg">
                {/* Section Header */}
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
                                fontSize: { xs: '2.5rem', md: '3.5rem' }
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    px: 4,
                                    py: 2,
                                    borderRadius: 25,
                                    background: 'rgba(0,88,221,0.3)',
                                    color: '#0058dd',
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    gap: 2,
                                    boxShadow: '0 8px 32px rgba(0, 88, 221, 0.3)',
                                    border: '2px solid rgba(255, 255, 255, 0.1)'
                                }}
                            >
                                <FaCode />
                                My Skills
                            </Box>
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
