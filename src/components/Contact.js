import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Typography, Box, Grid, TextField, Button } from '@mui/material';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={6}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} justifyContent="center">
          {/* The rest of the form components */}
          <Grid item xs={12} sm={10} md={8}>
            <Box mb={2}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                {...register('name', { required: 'Name is required' })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Box mb={2}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Box mb={2}>
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                {...register('message', { required: 'Message is required' })}
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={10} md={8}>
            <Box textAlign="center" mb={4}>
              <Button variant="contained" color="primary" type="submit">
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Contact;
