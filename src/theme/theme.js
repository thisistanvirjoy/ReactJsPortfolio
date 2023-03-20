import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Replace with your desired primary color
    },
    secondary: {
      main: '#dc004e', // Replace with your desired secondary color
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'", // Replace with your desired font family
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
  },
  // Add any other theme customizations you want here
});

export default theme;
