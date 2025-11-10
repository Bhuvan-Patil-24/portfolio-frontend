import { useState } from 'react';
import { AppBar, Toolbar, Button, Container, Box, IconButton, Typography, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import b1Logo from '../assets/images/b1_logo.png';
import PropTypes from "prop-types";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: 'none',
  width: '100%',
  position: 'fixed',
  top: 0,
  zIndex: 1100,
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  maxWidth: '1440px',
  margin: '0 auto',
  width: '100%',
});

const Logo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.secondary.main,
  fontSize: '1.5rem',
  fontWeight: 'bold',
  gap: '1rem',
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.secondary.main}`,
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  marginLeft: '2rem',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  color: 'black',
  marginLeft: '2rem',
  backgroundColor: theme.palette.secondary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const FooterLink = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  margin: '0 0.5rem',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

const MobileNavItem = styled(ListItem)(({ theme }) => ({
  padding: '1rem 2rem',
  '&:hover': {
    backgroundColor: `rgba(${parseInt(theme.palette.secondary.main.slice(1, 3), 16)}, ${parseInt(theme.palette.secondary.main.slice(3, 5), 16)}, ${parseInt(theme.palette.secondary.main.slice(5, 7), 16)}, 0.1)`,
  },
}));

const MobileNavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  width: '100%',
  display: 'block',
  fontWeight: 500,
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  borderBottom: '1px solid #eee',
  '.MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  }
}));

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

function Layout({children}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Experience', path: '/experience' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact', isContact: true },
  ];

  const mobileNav = (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: { width: '280px' }
      }}
    >
      <DrawerHeader>
        <Logo>
          <LogoImage src={b1Logo} alt="B1 Logo" />
          <span>Portfolio</span>
        </Logo>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <List>
        {navItems.map((item) => (
          <MobileNavItem key={item.text} onClick={toggleDrawer(false)}>
            <MobileNavLink to={item.path}>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{
                  style: item.isContact ? {
                    color: theme.palette.secondary.main,
                    fontWeight: 'bold'
                  } : { color: theme.palette.primary.main }
                }}
              />
            </MobileNavLink>
          </MobileNavItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
      <StyledAppBar position="fixed">
        <StyledToolbar>
          <Logo>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <LogoImage src={b1Logo} alt="B1 Logo" />
              Portfolio
            </Link>
          </Logo>
          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {navItems.map((item) => (
                item.isContact ? (
                  <ContactButton key={item.text} component={Link} to={item.path} variant="contained">
                    {item.text}
                  </ContactButton>
                ) : (
                  <NavButton key={item.text} component={Link} to={item.path}>
                    {item.text}
                  </NavButton>
                )
              ))}
            </Box>
          )}
        </StyledToolbar>
      </StyledAppBar>
      {mobileNav}

      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          width: '100%',
          pt: '64px',
        }}
      >
        {children}
      </Box>

      <Box
        component="footer"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: '#fff',
          py: 3,
          mt: 'auto',
          width: '100%',
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: '1440px' }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: 2
          }}>
            <Box>
              <FooterLink 
                href="https://www.linkedin.com/in/bhuvan-patil/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </FooterLink>
              <FooterLink 
                href="https://github.com/Bhuvan-Patil-24" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </FooterLink>
              <FooterLink 
                href="https://linktree.com/bhuvan_patil" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Linktree"
              >
                <LinkIcon />
              </FooterLink>
            </Box>
            <Typography variant="body2">
              © {new Date().getFullYear()} Bhuvan Patil - Professional Porfolio
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Layout; 