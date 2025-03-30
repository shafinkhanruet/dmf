import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Home = () => {
  const features = [
    {
      icon: <VolunteerActivismIcon sx={{ fontSize: 48 }} />,
      title: 'Volunteer With Us',
      description: 'Join our community of volunteers and make a difference in people\'s lives.',
      link: '/volunteer',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
      title: 'Donate Now',
      description: 'Your contribution can help us reach more people and create lasting change.',
      link: '/donate',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: 'Our Programs',
      description: 'Discover our various initiatives and how they impact communities.',
      link: '/programs',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      title: 'Success Stories',
      description: 'Read about the lives we\'ve touched and the communities we\'ve transformed.',
      link: '/gallery',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '100vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(3, 7, 18, 0.85), rgba(3, 7, 18, 0.95)), url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}
              sx={{
                transform: 'translateY(0)',
                opacity: 1,
                animation: 'fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                '@keyframes fadeInUp': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(40px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  textShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                  animation: 'glow 4s ease-in-out infinite alternate',
                  '@keyframes glow': {
                    from: {
                      textShadow: '0 0 20px rgba(59, 130, 246, 0.2)',
                    },
                    to: {
                      textShadow: '0 0 30px rgba(59, 130, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)',
                    },
                  },
                }}
              >
                Making a Difference Together
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255, 255, 255, 0.95)',
                  mb: 4,
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  animation: 'fadeIn 2.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  maxWidth: '600px',
                  lineHeight: 1.6,
                  '@keyframes fadeIn': {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                  },
                }}
              >
                Join DUKKHOMUKH FOUNDATION in our mission to create positive change
                and build a better future for all.
              </Typography>
              <Box 
                sx={{ 
                  display: 'flex', 
                  gap: 3,
                  animation: 'fadeInUp 1.8s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Button
                  component={RouterLink}
                  to="/donate"
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.8,
                    fontSize: '1.1rem',
                    background: 'linear-gradient(45deg, #3B82F6, #2563EB)',
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #60A5FA, #3B82F6)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)',
                    },
                  }}
                >
                  Donate Now
                </Button>
                <Button
                  component={RouterLink}
                  to="/volunteer"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.8,
                    fontSize: '1.1rem',
                    color: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    borderWidth: 2,
                    backdropFilter: 'blur(8px)',
                    background: 'rgba(255,255,255,0.03)',
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: '#3B82F6',
                      background: 'rgba(59, 130, 246, 0.1)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(59, 130, 246, 0.2)',
                    },
                  }}
                >
                  Volunteer
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            mb: 8,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 120,
              height: 4,
              background: 'linear-gradient(45deg, #3B82F6, #8B5CF6)',
              borderRadius: 2,
            },
          }}
        >
          How You Can Help
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={3} 
              key={index}
              sx={{
                transform: 'translateY(0)',
                opacity: 1,
                animation: `fadeInUp ${0.6 + index * 0.2}s cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.title}
                  sx={{
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    textAlign: 'center', 
                    p: 4,
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.04) 100%)',
                  }}
                >
                  <Box 
                    sx={{ 
                      color: 'primary.main',
                      mb: 2.5,
                      transform: 'scale(1)',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: 'primary.light',
                      },
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      background: 'linear-gradient(45deg, #FFFFFF 30%, rgba(255,255,255,0.9) 90%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 2,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.9)',
                      mb: 3,
                      lineHeight: 1.8,
                    }}
                  >
                    {feature.description}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to={feature.link}
                    variant="outlined"
                    color="primary"
                    sx={{
                      mt: 2,
                      borderWidth: 2,
                      background: 'rgba(59, 130, 246, 0.05)',
                      '&:hover': {
                        borderWidth: 2,
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
                        background: 'rgba(59, 130, 246, 0.1)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Impact Section */}
      <Box 
        sx={{ 
          position: 'relative',
          color: 'white',
          py: 12,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.95), rgba(139, 92, 246, 0.95))',
            zIndex: 1,
          },
        }}
      >
        <Container 
          maxWidth="lg"
          sx={{ 
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              mb: 8,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            Our Impact
          </Typography>
          <Grid container spacing={4}>
            {[
              { count: '1000+', label: 'Lives Impacted' },
              { count: '50+', label: 'Communities Served' },
              { count: '200+', label: 'Active Volunteers' },
            ].map((stat, index) => (
              <Grid 
                item 
                xs={12} 
                md={4} 
                key={index}
                sx={{
                  transform: 'translateY(0)',
                  opacity: 1,
                  animation: `fadeInUp ${0.6 + index * 0.2}s cubic-bezier(0.4, 0, 0.2, 1)`,
                }}
              >
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: 5,
                    borderRadius: 6,
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.4s ease',
                    border: '1px solid rgba(255,255,255,0.1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      fontSize: '3.5rem',
                      background: 'linear-gradient(45deg, #FFFFFF 30%, rgba(255,255,255,0.9) 90%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 2px 10px rgba(255,255,255,0.1)',
                    }}
                  >
                    {stat.count}
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      opacity: 0.95,
                      textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 