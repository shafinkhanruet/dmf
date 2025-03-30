import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import News from './pages/News';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Certificates from './pages/Certificates';
import FloatingDonateButton from './components/FloatingDonateButton';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3B82F6',
      light: '#60A5FA',
      dark: '#2563EB',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#8B5CF6',
      light: '#A78BFA',
      dark: '#7C3AED',
    },
    quaternary: {
      main: '#F59E0B',
      light: '#FBBF24',
      dark: '#D97706',
    },
    background: {
      default: '#030712',
      paper: 'rgba(17, 24, 39, 0.95)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.9)',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.5px',
      background: 'linear-gradient(45deg, #FFFFFF 30%, rgba(255,255,255,0.9) 90%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '0 2px 10px rgba(59, 130, 246, 0.2)',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '-0.3px',
      background: 'linear-gradient(45deg, #FFFFFF 30%, rgba(255,255,255,0.95) 90%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#FFFFFF',
      letterSpacing: '-0.2px',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      color: '#FFFFFF',
      letterSpacing: '-0.1px',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
      color: '#FFFFFF',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      color: '#FFFFFF',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'rgba(255, 255, 255, 0.9)',
      letterSpacing: '0.1px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '0.5px',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(17, 24, 39, 0.98)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 28px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(59, 130, 246, 0.3)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #3B82F6, #2563EB)',
          color: '#FFFFFF',
          '&:hover': {
            background: 'linear-gradient(45deg, #60A5FA, #3B82F6)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            background: 'rgba(255, 255, 255, 0.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(12px)',
          borderRadius: 20,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 40px rgba(59, 130, 246, 0.2)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(12px)',
          borderRadius: 20,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/certificates" element={<Certificates />} />
            </Routes>
          </main>
          <FloatingDonateButton />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 