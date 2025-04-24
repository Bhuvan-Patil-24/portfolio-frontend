import React from 'react';
import { Box, Container, Typography, Grid, Paper, styled } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';

const ExperienceContainer = styled(Box)({
  padding: '6rem 0',
  background: '#fff',
});

const SectionTitle = styled(Typography)({
  color: '#2C3639',
  marginBottom: '3rem',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '0',
    width: '50px',
    height: '3px',
    backgroundColor: '#FFA500',
  },
});

const ExperienceCard = styled(Paper)({
  padding: '2rem',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '0',
    top: '0',
    height: '100%',
    width: '4px',
    backgroundColor: '#FFA500',
    borderRadius: '4px 0 0 4px',
  },
});

const HighlightText = styled('span')({
  color: '#FFA500',
  fontWeight: 'bold',
});

const experiences = [
  {
    date: 'June 2024',
    title: 'Cybersecurity Intern',
    company: 'TechnoHacks EduTech Official',
    description: 'Assisted in the development and enforcement of security policies related to mobile devices and remote access.',
    icon: <WorkIcon />,
  },
  {
    date: 'June 2024',
    title: 'ML & DS Intern',
    company: 'Codemate IT Services (OPC) Pvt. Ltd.',
    description: 'Gained valuable experience working within a specific industry, applying learned concepts directly into relevant work situations.',
    icon: <WorkIcon />,
  },
  {
    date: 'July 2024 - March 2025',
    title: 'Python Intern & AI/ML Trainee',
    company: 'CodSoft & EduSkills Foundation (AICTE)',
    description: 'Contributed to the development and maintenance of software applications. Gained hands-on experience in Machine learning projects and worked on python libraries like tensorflow, scikit-learn and various neural network models.',
    icon: <WorkIcon />,
  },
];

function Experience() {
  return (
    <ExperienceContainer>
      <Container maxWidth={false} sx={{ maxWidth: '1440px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle variant="h3" component="h2">
            Experience
          </SectionTitle>
        </motion.div>

        <Grid container spacing={4}>
          {experiences.map((experience, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ExperienceCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 165, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2,
                      }}
                    >
                      {experience.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {experience.date}
                      </Typography>
                      <Typography variant="h5" gutterBottom>
                        {experience.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {experience.company}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1">
                    {experience.description}
                  </Typography>
                </ExperienceCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ExperienceContainer>
  );
}

export default Experience; 