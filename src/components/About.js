import React from 'react';
import { Container, Box, Typography, Paper, Avatar, Grid, Fade } from '@mui/material';
import { styled } from '@mui/system';

const AboutSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  marginBottom: theme.spacing(2),
}));

const About = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4} mb={6}>
        <Typography variant="h4" align="center" gutterBottom>
          About
        </Typography>
      </Box>

      <Fade in={true}>
        <AboutSection>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} display="flex" flexDirection="column" alignItems="center">
              <LargeAvatar src="https://via.placeholder.com/150" alt="Your Name" />
              <Typography variant="h5" gutterBottom>
                Your Name
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Typography variant="body1" paragraph>
                Hello! My name is Your Name, and I'm a software developer based in City, Country. I have a passion for creating
                clean, efficient, and user-friendly web applications.
              </Typography>
              <Typography variant="body1">
                With a background in computer science, I have experience in various programming languages and frameworks such
                as JavaScript, React, Node.js, Express, Python, Django, and more.
              </Typography>
            </Grid>
          </Grid>
        </AboutSection>
      </Fade>
    </Container>
  );
};

export default About;
