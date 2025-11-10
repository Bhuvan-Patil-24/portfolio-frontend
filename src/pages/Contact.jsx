import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, styled, Alert, Snackbar, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactContainer = styled(Box)({
  minHeight: '100vh',
  padding: '6rem 0',
  background: '#fff',
});

const FormContainer = styled(Box)({
  maxWidth: '600px',
  margin: '0 auto',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
});

const ContactInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
  color: '#666',
});

const IconContainer = styled(Box)({
  marginRight: '1rem',
  color: '#FFA500',
});

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      // Fix URL construction to prevent double slashes
      const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
      const response = await fetch(`${cleanBaseUrl}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setSnackbar({
        open: true,
        message: error.message || 'Error sending message. Please try again.',
        severity: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <ContactContainer>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            color: '#2C3639',
            fontWeight: 'bold',
            mb: 4,
          }}
        >
          Convey your thoughts!
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#2C3639', mb: 3 }}>
              Contact Me Here
            </Typography>
            
            <ContactInfo>
              <IconContainer>
                <EmailIcon />
              </IconContainer>
              <Typography>patilbhuvan27@gmail.com</Typography>
            </ContactInfo>

            <ContactInfo>
              <IconContainer>
                <PhoneIcon />
              </IconContainer>
              <Typography>+91 9359281871</Typography>
            </ContactInfo>

            <ContactInfo>
              <IconContainer>
                <LocationOnIcon />
              </IconContainer>
              <Typography>Nagpur, Maharashtra, India</Typography>
            </ContactInfo>
          </Box>

          <FormContainer>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                required
                margin="normal"
                sx={{ mb: 2 }}
                disabled={isLoading}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
                margin="normal"
                sx={{ mb: 2 }}
                disabled={isLoading}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                required
                multiline
                rows={4}
                margin="normal"
                sx={{ mb: 3 }}
                disabled={isLoading}
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                sx={{
                  backgroundColor: '#FFA500',
                  '&:hover': {
                    backgroundColor: '#FF8C00',
                  },
                  padding: '0.8rem 2rem',
                  minWidth: '150px',
                }}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </FormContainer>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </ContactContainer>
  );
}

export default Contact; 