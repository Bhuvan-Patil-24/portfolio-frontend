import { Box, Container, Typography, Grid, Paper, styled, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectsContainer = styled(Box)({
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

const ProjectCard = styled(Paper)({
  padding: '2rem',
  height: '100%',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

const TechChip = styled(Chip)({
  margin: '0.5rem',
  backgroundColor: 'rgba(255, 165, 0, 0.1)',
  color: '#FFA500',
  border: '1px solid #FFA500',
});

const projects = [
  {
    title: 'SentinelAI: Internal RAG Chatbot with RBAC',
    description: 'Built a secure, production-grade company internal Retrieval-Augmented Generation (RAG) chatbot for organizations, featuring JWT-based authentication, fine-grained role-based access control (RBAC), vector search using ChromaDB, and complete audit logging. The system enables employees to query internal documents safely with department-level access enforcement, source citations, and admin monitoring dashboards.',
    technologies: [
      'FastAPI',
      'Streamlit',
      'ChromaDB',
      'JWT',
      'SQLite',
      'HuggingFace',
      'Pydantic'
    ],
    githubLink: 'https://github.com/Bhuvan-Patil-24/Internal-Chatbot-with-RBAC-Project',
    demoLink: 'https://bhuvanpatil24-sentinelai.hf.space/',
  },
  {
    title: 'Rabi Crop Prediction & NDVI Visualization (GIS)',
    description: 'Developed a GIS-correct, production-ready web application for Rabi season crop prediction and NDVI time-series visualization using satellite imagery and cadastral (khasra) boundaries. The system ensures CRS-correct raster–vector alignment, pixel-level NDVI extraction, interactive web maps, and crop classification, suitable for research and government-grade geospatial analysis.',
    technologies: [
      'FastAPI',
      'Rasterio',
      'GeoPandas',
      'Shapely',
      'PyProj',
      'Leaflet.js',
      'Chart.js',
      'Docker',
      'OpenStreetMap'
    ],
    githubLink: 'https://github.com/Bhuvan-Patil-24/rabi-ndvi-gis',
    demoLink: 'https://bhuvanpatil24-rabi-ndvi-gis.hf.space/',
  },  
  {
    title: 'NexusAI: Personal Voice Assistant',
    description: 'Developed a personal voice assistant with Python & NLP during my Internship at MRSAC, VNIT, Nagpur. It\'s designed to help you interact with your computer using natural voice commands while providing a modern, customizable experience.',
    technologies: ['Python', 'NLTK', 'pyttsx3', 'Streamlit', 'SQLite'],
    githubLink: 'https://github.com/Bhuvan-Patil-24/NexusAI-Personal_Voice_Assistance',
    demoLink: '#',
  },
  {
    title: 'Blood Group Detection using Fingerprint & ML',
    description: 'Built a CNN-based system that predicts blood groups from fingerprint images using a dataset of 6,000 fingerprint images, image processing and feature extraction techniques achieving 91% test accuracy with sub-second inference time',
    technologies: ['Python', 'Scikit-Learn', 'Tensorflow', 'Jupyter', 'Flask', 'SQLite'],
    githubLink: 'https://github.com/Bhuvan-Patil-24/Blood_group_detection_using_fingerprint',
    demoLink: '#',
  },
  {
    title: 'Credit Risk Prediction for Loan Approvals',
    description: 'Developed a Credit Risk Prediction system using ML algorithms, Feature Engineering & built a pipeline with for data preprocessing, modeling, and visualization workflow.',
    technologies: ['Python', 'Machine Learning', 'Data Analysis & Visualization', 'Streamlit'],
    githubLink: 'https://github.com/Bhuvan-Patil-24/credit-risk-prediction-pipeline',
    demoLink: '#',
  },
  {
    title: 'Cervical Cancer Prediction through risk factors',
    description: 'Performed a comparative analysis of 5 DL models & 5 ML models on the UCI Cervical Cancer dataset and improved interpretability by highlighting critical risk factors like HPV infection and smoking duration.',
    technologies: ['Python', 'Machine Learning', 'Deep Learning', 'Jupyter'],
    githubLink: 'https://github.com/Bhuvan-Patil-24/cervical-cancer-detection-deep-learning',
    demoLink: '#',
  },
  {
    title: 'Titanic Survival Prediction',
    description: 'Implemented end-to-end data preprocessing, feature engineering, and model comparison (Logistic Regression, Random Forest, XGBoost) to analyze survival patterns from Titanic data.',
    technologies: ['Python', 'Machine Learning', 'Data Analysis'],
    githubLink: 'https://github.com/Bhuvan-Patil-24/Titanic_survival_prediction',
    demoLink: '#',
  },
  {
    title: 'Netflix Subscription Analysis',
    description: 'Analyzed Netflix subscription data using machine learning techniques to identify patterns and trends.',
    technologies: ['Python', 'ML', 'Data Visualization'],
    githubLink: '#',
    demoLink: '#',
  },
  {
    title: 'Bookstore E-commerce',
    description: 'Developed a full-stack e-commerce website for a bookstore using MERN stack.',
    technologies: ['React.js', 'MongoDB', 'Express.js', 'Node.js'],
    githubLink: 'https://github.com/Bhuvan-Patil-24/Bookstore_Ecommerce',
    demoLink: '#',
  },
  {
    title: 'Save Soil Website Clone',
    description: 'Cloned the frontend of Sadhguru\'s Save Soil website with just HTML & CSS.',
    technologies: ['HTML', 'CSS'],
    githubLink: 'https://github.com/Bhuvan-Patil-24/Save_Soil',
    demoLink: '#',
  },
  {
    title: 'Subscription Box Analysis Dashboard',
    description: 'Created an interactive Power BI dashboard for analyzing subscription box service data.',
    technologies: ['Power BI', 'Data Analysis', 'Visualization'],
    githubLink: 'https://github.com/Bhuvan-Patil-24/Data_Visualization_Dashboards',
    demoLink: '#',
  },
];

function Projects() {
  return (
    <ProjectsContainer>
      <Container maxWidth={false} sx={{ maxWidth: '1440px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle variant="h3" component="h2">
            Projects
          </SectionTitle>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" paragraph color="text.secondary">
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <TechChip
                        key={techIndex}
                        label={tech}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                  <Box>
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      sx={{
                        mr: 2,
                        borderColor: '#FFA500',
                        color: '#FFA500',
                        '&:hover': {
                          borderColor: '#FF8C00',
                          backgroundColor: 'rgba(255, 165, 0, 0.1)',
                        },
                      }}
                      href={project.githubLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<LaunchIcon />}
                      sx={{
                        backgroundColor: '#FFA500',
                        '&:hover': {
                          backgroundColor: '#FF8C00',
                        },
                      }}
                      href={project.demoLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  </Box>
                </ProjectCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProjectsContainer>
  );
}

export default Projects; 