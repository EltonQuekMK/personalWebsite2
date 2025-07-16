import { Box, Button, Card, CardActions, CardContent, Chip, Container, Grid, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { FaAward, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io5';
import styles from '../styles/Home.module.css';

const projects = [
    {
        title: "Personal Portfolio Website",
        description: "A modern, responsive portfolio website built with Next.js and Material-UI featuring smooth animations, optimized performance, and engaging user experience.",
        technologies: ["Next.js", "React", "Material-UI", "Framer Motion", "Vercel"],
        githubUrl: "https://github.com/EltonQuekMK/personalWebsite2",
        liveUrl: "https://eltonquek.vercel.app",
        achievements: ["Continuous Deployment", "Responsive Design", "Interactive Elements", "Modular Components",],
        colorMain: '#a855f7',
        colorSecondary: '#ec4899',
        bgColor: '#fdf4ff'
    },
    {
        title: "Sanctioned List Search Application",
        description: "A comprehensive web application that retrieves sanctioned lists from UN websites, stores the data in a searchable json, and provides fuzzy search functionality for compliance checking.",
        technologies: ["Next.js", "TypeScript", "React"],
        githubUrl: "https://github.com/EltonQuekMK/SanctionedListWebApp",
        liveUrl: "https://sanctioned-list-webapp.vercel.app/",
        achievements: ["UN Data Integration", "Fuzzy Search", "Real-time Updates"],
        colorMain: '#10b981',
        colorSecondary: '#059669',
        bgColor: '#f0fdf4'
    }
    // ,
    // {
    //     title: "Data Visualization Dashboard",
    //     description: "Interactive dashboard for data analysis with real-time charts, filtering capabilities, and comprehensive data export functionality for business intelligence.",
    //     technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    //     githubUrl: "#",
    //     liveUrl: "#",
    //     achievements: ["Real-time Updates", "Interactive Charts", "Data Export"],
    //     colorMain: '#0ea5e9',
    //     colorSecondary: '#06b6d4',
    //     bgColor: '#f0f9ff'
    // }
];

function ProjectCard({ project, index }) {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, threshold: 0.3, rootMargin: "50px" });

    return (
        <Grid item xs={12} md={6} lg={4}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
                transition={'all 0.3s ease'}
            >
                <Card
                    elevation={4}
                    sx={{
                        height: '100%',
                        minHeight: '600px',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${project.bgColor} 0%, #ffffff 100%)`,
                        border: '1px solid rgba(255,255,255,0.5)',
                        overflow: 'hidden',
                        position: 'relative',
                        transition: 'all 0.3s ease',
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
                            background: `linear-gradient(90deg, ${project.colorMain}, ${project.colorSecondary})`,
                        }
                    }}
                >
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                        {/* Title */}
                        <Typography
                            variant="h5"
                            component="h3"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                                color: 'text.primary',
                                transition: 'color 0.3s ease',
                                '&:hover': { color: project.colorMain }
                            }}
                        >
                            {project.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                lineHeight: 1.6,
                                mb: 3
                            }}
                        >
                            {project.description}
                        </Typography>

                        {/* Achievements */}
                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <FaAward style={{ color: '#f59e0b', marginRight: '8px' }} />
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        color: 'text.secondary'
                                    }}
                                >
                                    Key Achievements
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {project.achievements.map((achievement, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Chip
                                            label={achievement}
                                            size="small"
                                            sx={{
                                                background: `linear-gradient(135deg, ${project.colorMain}, ${project.colorSecondary})`,
                                                color: 'white',
                                                fontWeight: 500,
                                                '&:hover': {
                                                    background: `linear-gradient(135deg, ${project.colorSecondary}, ${project.colorMain})`
                                                }
                                            }}
                                        />
                                    </motion.div>
                                ))}
                            </Box>
                        </Box>

                        {/* Technologies */}
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <FaCode style={{ color: project.colorMain, marginRight: '8px' }} />
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        color: 'text.secondary'
                                    }}
                                >
                                    Technologies
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {project.technologies.map((tech, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Chip
                                            label={tech}
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                borderColor: project.colorMain,
                                                color: project.colorMain,
                                                fontWeight: 500,
                                                backgroundColor: 'rgba(255,255,255,0.7)',
                                                '&:hover': {
                                                    backgroundColor: project.colorMain,
                                                    color: 'white'
                                                }
                                            }}
                                        />
                                    </motion.div>
                                ))}
                            </Box>
                        </Box>
                    </CardContent>

                    {/* Action Buttons */}
                    <CardActions sx={{ p: 3, pt: 0 }}>
                        <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ flex: 1 }}
                            >
                                <Link href={project.githubUrl} target="_blank" style={{ textDecoration: 'none', width: '100%' }}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        startIcon={<IoLogoGithub />}
                                        sx={{
                                            backgroundColor: '#24292e',
                                            color: 'white',
                                            fontWeight: 600,
                                            py: 1.5,
                                            borderRadius: 2,
                                            fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Smaller text on mobile
                                            '&:hover': {
                                                backgroundColor: '#1a1e22'
                                            }
                                        }}
                                    >
                                        <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                                            View Code
                                        </Box>
                                        <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
                                            Code
                                        </Box>
                                    </Button>
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                style={{ flex: 1 }}
                            >
                                <motion.div
                                    whileHover={{
                                        background: [
                                            `linear-gradient(135deg, ${project.colorMain}, ${project.colorSecondary})`,
                                            `linear-gradient(135deg, ${project.colorSecondary}, ${project.colorMain})`
                                        ]
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeInOut"
                                    }}
                                    style={{
                                        borderRadius: '8px',
                                        background: `linear-gradient(135deg, ${project.colorMain}, ${project.colorSecondary})`
                                    }}
                                >
                                    <Link href={project.liveUrl} target="_blank" style={{ textDecoration: 'none', width: '100%' }}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            startIcon={<FaExternalLinkAlt />}
                                            sx={{
                                                background: 'transparent',
                                                color: 'white',
                                                fontWeight: 600,
                                                py: 1.5,
                                                borderRadius: 2,
                                                boxShadow: 'none',
                                                fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Smaller text on mobile
                                                '&:hover': {
                                                    background: 'transparent',
                                                    boxShadow: 'none'
                                                }
                                            }}
                                        >
                                            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                                                Live Demo
                                            </Box>
                                            <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
                                                Demo
                                            </Box>
                                        </Button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </Box>
                    </CardActions>
                </Card>
            </motion.div>
        </Grid>
    );
}

export default function Projects() {
    const ref = useRef();
    const isInView = useInView(ref, { once: true, amount: 0.1, rootMargin: "100px" });

    return (
        <Box
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
                            Featured Projects
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
                            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </Grid>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Box sx={{ textAlign: 'center', mt: 8 }}>
                        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
                            Want to see more of my work?
                        </Typography>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="https://github.com/EltonQuekMK" target="_blank" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={<IoLogoGithub />}
                                    sx={{
                                        background: 'linear-gradient(135deg, #24292e, #1a1e22)',
                                        color: 'white',
                                        fontWeight: 600,
                                        px: 4,
                                        py: 2,
                                        borderRadius: 3,
                                        fontSize: { xs: '0.9rem', md: '1.1rem' }, // Responsive font size
                                        boxShadow: '0 8px 20px rgba(36, 41, 46, 0.3)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #1a1e22, #0d1117)',
                                            boxShadow: '0 12px 30px rgba(36, 41, 46, 0.4)',
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                                        View All Projects on GitHub
                                    </Box>
                                    <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>
                                        View Projects
                                    </Box>
                                </Button>
                            </Link>
                        </motion.div>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
