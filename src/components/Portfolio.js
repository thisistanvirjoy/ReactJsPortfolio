import React from 'react';
import { Container, Box, Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

const projects = [
  // Add your project details here
  { title: 'Project 1', description: 'A short description of project 1.', imageUrl: 'https://via.placeholder.com/300' },
  { title: 'Project 2', description: 'A short description of project 2.', imageUrl: 'https://via.placeholder.com/300' },
  // ...
];

const Portfolio = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4} mb={6}>
        <Typography variant="h4" align="center" gutterBottom>
          Portfolio
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" height="140" image={project.imageUrl} alt={project.title} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
