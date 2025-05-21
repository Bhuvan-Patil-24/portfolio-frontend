import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, styled, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { useTheme } from '@mui/material/styles';
import InsightsIcon from '@mui/icons-material/Insights';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';


const HeroContainer = styled(Box)(({ theme }) => ({
  background: '#fff',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: '6rem',
  paddingBottom: '4rem',
  width: '100%',
  color: theme.palette.text.primary,
  '@media (max-width: 768px)': {
    paddingTop: '4rem',
    paddingBottom: '3rem',
  },
}));

const HighlightText = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 'bold',
}));

const ActionButton = styled(Button)(({ theme }) => ({
  padding: '0.8rem 2rem',
  borderRadius: '30px',
  textTransform: 'none',
  fontSize: '1.1rem',
  marginRight: '1rem',
  marginTop: '1rem',
}));

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const SkillIcon = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  color: '#fff',
}));

const AnimatedTextWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#fff',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(5, 0),
  },
}));

const SkillsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f8f9fa',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(5, 0),
  },
}));

function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const animatedTexts = [
    "Data Science",
    "Data Analytics",
    "Machine Learning",
    "Deep Learning",
    "Large Language Models",
    "Generative AI",
    "Natural Language Processing",
    "Computer Vision"
  ];

  const theme = useTheme();

  useEffect(() => {
    let timeout;
    
    // Type the current text
    if (!isDeleting && displayText !== animatedTexts[textIndex]) {
      timeout = setTimeout(() => {
        setDisplayText(animatedTexts[textIndex].substring(0, displayText.length + 1));
      }, typingSpeed);
    } 
    // Pause at the end
    else if (!isDeleting && displayText === animatedTexts[textIndex]) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50); // Delete faster
      }, 1500);
    } 
    // Delete the text
    else if (isDeleting && displayText !== '') {
      timeout = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1));
      }, typingSpeed);
    } 
    // Move to next text
    else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length);
      setTypingSpeed(100); // Reset typing speed
    }

    return () => clearTimeout(timeout);
  }, [displayText, textIndex, isDeleting, typingSpeed, animatedTexts]);

  return (
    <Box>
      <HeroContainer>
        <Container maxWidth={false} sx={{ maxWidth: '1440px' }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    display: 'inline-block',
                    border: `2px solid ${theme.palette.secondary.main}`,
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                  }}
                >
                  Hello There! 👋
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography 
                  variant="h2" 
                  sx={{ 
                    mb: 1, 
                    fontWeight: 'bold',
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' } 
                  }}
                >
                  I'm <HighlightText>Bhuvan Patil</HighlightText>,
                </Typography>
                
                <AnimatedTextWrapper>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 'bold',
                      fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                      mb: 1,
                      color: theme.palette.text.primary
                    }}
                  >
                    Passionate about
                  </Typography>
                  <Box className="typewriter-container">
                    <Typography 
                      variant="h3"
                      className="typewriter-text"
                      sx={{ 
                        fontWeight: 'bold',
                        fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                        width: 'auto',
                        color: theme.palette.secondary.main
                      }}
                    >
                      {displayText}
                </Typography>
                  </Box>
                </AnimatedTextWrapper>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4, 
                    color: theme.palette.text.secondary,
                    maxWidth: '600px',
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  A creative professional with expertise in Python, DS, ML, and WebDev, specializing in areas like DSA, OOP, and DBMS. Passionate about problem-solving and building innovative digital experiences.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <ActionButton
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.dark,
                    },
                    fontSize: { xs: '0.9rem', sm: '1.1rem' }
                  }}
                  component="a"
                  href="/Bhuvan_Patil-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </ActionButton>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Box
                  sx={{
                    width: { xs: '280px', sm: '350px', md: '450px' },
                    height: { xs: '280px', sm: '350px', md: '450px' },
                    borderRadius: '50%',
                    backgroundColor: `rgba(${parseInt(theme.palette.secondary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.secondary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.secondary.main.slice(5, 7), 16)}, 0.1)`,
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    margin: '0 auto',
                    border: `4px solid ${theme.palette.secondary.main}`,
                  }}
                >
                  <Box
                    component="img"
                    src="profile-image.JPG"
                    alt="Bhuvan Patil"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </HeroContainer>

      {/* About Me Section */}
      <AboutSection>
        <Container maxWidth="md" sx={{ px: { xs: 3, sm: 4 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h4" 
              component="h2" 
              gutterBottom 
              align="center" 
              sx={{ 
                mb: 4,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }
              }}
            >
            About Me
          </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          <Typography variant="body1" paragraph>
          I'm Bhuvan Patil, a tech enthusiast and aspiring data scientist currently in my 3rd year pursuing a B.Tech in Computer Science Engineering with Honors in Data Science at SBJITMR, Nagpur.
          </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
          <Typography variant="body1" paragraph>
          I'm passionate about exploring the intersections of data science, machine learning, and web development. My academic journey has equipped me with a strong foundation in programming fundamentals, while my self-directed learning has expanded my expertise across multiple domains.
          </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
          <Typography variant="body1" paragraph>
          With a strong mathematical background and programming skills, I develop impactful solutions while fostering collaboration. My proactive approach and innovative thinking drive me to deliver high-quality results in every project I undertake.
          </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
          <Typography variant="body1" paragraph>
            I'm constantly learning and staying up-to-date with the latest technologies and industry trends. This commitment to continuous improvement allows me to bring fresh perspectives and innovative solutions to every project I work on. When I'm not coding, you can find me reading about new technologies, attending tech meetups, or working on personal projects that challenge me to grow as a developer.
          </Typography>
          </motion.div>
        </Container>
      </AboutSection>

      {/* Skills Section */}
      <SkillsSection>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h4" 
              component="h2" 
              gutterBottom 
              align="center" 
              sx={{ 
                mb: { xs: 4, md: 6 },
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }
              }}
            >
            My Skills
          </Typography>
          </motion.div>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
              <SkillCard>
                <SkillIcon>
                  <CodeIcon fontSize="large" />
                </SkillIcon>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                  >
                  Web Development
                </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
                  >
                  Frontend: HTML5, CSS3, JavaScript, React
                  Backend: NodeJS, ExpressJS, MongoDB, MySQL
                </Typography>
              </SkillCard>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
              <SkillCard>
                <SkillIcon>
                  <InsightsIcon fontSize="large" />
                </SkillIcon>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                  >
                  Data Science & Analysis
                </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
                  >
                  Power BI, Tableau, MSExcel, EDA, Pandas,
                  Numpy, Matplotlib, Seaborn, Scikit-learn
                </Typography>
              </SkillCard>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
              <SkillCard>
                <SkillIcon>
                  <PrecisionManufacturingIcon fontSize="large" />
                </SkillIcon>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                  >
                  Machine learning
                </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
                  >
                  Mathematics, Prompt Engineering,  NLP, TensorFlow,
                  Deep Learning, Jupyter
                </Typography>
              </SkillCard>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
              <SkillCard>
                <SkillIcon>
                  <TerminalIcon fontSize="large" />
                </SkillIcon>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                  >
                  Programming Languages
                </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
                  >
                  C, JavaScript, Python, SQL
                </Typography>
              </SkillCard>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
              <SkillCard>
                <SkillIcon>
                  <DesignServicesIcon fontSize="large" />
                </SkillIcon>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                  >
                  Designing & Diagraming
                </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
                  >
                  Canva, Figma, Draw.io
                </Typography>
              </SkillCard>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
              <SkillCard>
                <SkillIcon>
                  <PsychologyIcon fontSize="large" />
                </SkillIcon>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                  >
                  Tools & Other Skills
                </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
                  >
                  Git, Linux, DSA, OOPs, Debugging, Adaptability
                </Typography>
              </SkillCard>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </SkillsSection>
    </Box>
  );
}

export default Hero; 