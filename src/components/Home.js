import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Loading from './Loading/Loading';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconds delay

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ParallaxProvider>
      {loading ? (
        <Loading />
      ) : (
        <Box
          minHeight="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Parallax y={[-20, 20]} tagOuter="figure">
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to My Portfolio
            </Typography>
          </Parallax>
          <Parallax y={[-15, 15]} tagOuter="figure">
            <Typography variant="h5" component="h2" gutterBottom>
              This is a short description of my work and experience.
            </Typography>
          </Parallax>
          <Box mt={5}>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/portfolio"
            >
              View My Work
            </Button>
          </Box>
        </Box>
      )}
    </ParallaxProvider>
  );
};

export default Home;
