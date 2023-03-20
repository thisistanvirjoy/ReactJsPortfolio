import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const socialMediaIcons = [
  { icon: faFacebook, link: "https://www.facebook.com/yourusername" },
  { icon: faTwitter, link: "https://www.twitter.com/yourusername" },
  { icon: faInstagram, link: "https://www.instagram.com/yourusername" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/yourusername" },
];

const Footer = () => {
  return (
    <Box component="footer" className="footer-fixed" sx={{ backgroundColor: 'primary.main', py: 1 }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={2}>
          {socialMediaIcons.map((socialMedia, index) => (
            <Grid item key={index}>
              <a href={socialMedia.link} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                <FontAwesomeIcon icon={socialMedia.icon} size="2x" />
              </a>
            </Grid>
          ))}
        </Grid>
        <Typography variant="body1" align="center" color="text.secondary" sx={{ mt: 2 }}>
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
