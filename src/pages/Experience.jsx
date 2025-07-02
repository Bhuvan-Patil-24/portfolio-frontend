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
    title: 'ML & DS - Intern',
    company: 'Codemate IT Services (OPC) Pvt. Ltd.',
    description: 'Assisted in developing machine learning models and data analysis tools, enhancing the company\'s AI capabilities.',
    icon: <WorkIcon />,
  },
  {
    date: 'July 2024',
    title: 'Python Programming - Intern',
    company: 'CodSoft',
    description: 'Contributed to the development and maintenance of software applications using Python.',
    icon: <WorkIcon />,
  },
  {
    date: 'January 2025 - March 2025',
    title: 'GOOGLE AI/ML - Trainee',
    company: 'EduSkills Foundation (AICTE)',
    description: 'Built and trained Machine learning models using TensorFlow, Keras, OpenCV, NN and worked on real-world mini-projects and assignments simulating industry problems using Python, Jupyter Notebooks, and Google Colab.',
    icon: <WorkIcon />,
  },
  {
    date: 'April 2025 - June 2025',
    title: 'GOOGLE Data Analytics - Trainee',
    company: 'EduSkills Foundation (AICTE)',
    description: 'Gained proficiency in data cleaning and preparation using spreadsheets and SQL to organize and manipulate large datasets, and applied EDA with statistical thinking to identify trends. Utilized tools like Excel/Google Sheets and SQL (BigQuery) throughout the training.',
    icon: <WorkIcon />,
  },
  {
    date: 'May 2025 - June 2025',
    title: 'NLP Engineer - Intern',
    company: 'Maharashtra Remote Sensing Application Centre (MRSAC)',
    description: 'Developed a personal voice assistant (NexusAI) using Python, NLP to assist in daily tasks and provide information on various topics which helps in enhancing productivity and accessibility as well as time management.',
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