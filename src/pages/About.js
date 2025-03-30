import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Avatar,
} from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PublicIcon from '@mui/icons-material/Public';

const About = () => {
  const values = [
    {
      icon: <PeopleAltIcon sx={{ fontSize: 48 }} />,
      title: 'Community First',
      description: 'We believe in the power of community and work together to create lasting positive change.',
    },
    {
      icon: <VolunteerActivismIcon sx={{ fontSize: 48 }} />,
      title: 'Compassionate Care',
      description: 'Our approach is rooted in empathy, understanding, and genuine care for those we serve.',
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 48 }} />,
      title: 'Innovative Solutions',
      description: 'We continuously seek creative and effective ways to address community challenges.',
    },
    {
      icon: <PublicIcon sx={{ fontSize: 48 }} />,
      title: 'Global Impact',
      description: 'While we act locally, our vision extends to creating positive change on a global scale.',
    },
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & President',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      bio: 'With over 20 years of experience in social work, Dr. Kumar leads our foundation with vision and compassion.',
    },
    {
      name: 'Priya Sharma',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      bio: 'Priya brings extensive experience in nonprofit management and community development.',
    },
    {
      name: 'Amit Patel',
      role: 'Program Director',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      bio: 'Amit oversees our various programs and ensures their effective implementation.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Outreach Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      bio: 'Sarah builds and maintains relationships with our community partners and stakeholders.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '60vh', md: '70vh' },
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
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}
              sx={{
                transform: 'translateY(0)',
                opacity: 1,
                animation: 'fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  textShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                  animation: 'glow 4s ease-in-out infinite alternate',
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: '800px',
                  lineHeight: 1.8,
                  animation: 'fadeIn 2s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                DUKKHOMUKH FOUNDATION was established with a vision to create positive change
                in communities across India. Our journey began with a simple idea: everyone
                deserves a chance at a better life.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}
            sx={{
              animation: 'fadeInLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(12px)',
                borderRadius: 4,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  background: 'linear-gradient(45deg, #3B82F6 30%, #2563EB 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3,
                }}
              >
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                To empower communities through sustainable development initiatives,
                focusing on education, healthcare, and economic empowerment. We strive
                to create lasting positive change in the lives of those we serve.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}
            sx={{
              animation: 'fadeInRight 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(12px)',
                borderRadius: 4,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  background: 'linear-gradient(45deg, #8B5CF6 30%, #7C3AED 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3,
                }}
              >
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                To be a catalyst for positive social change, creating a world where
                every individual has access to opportunities for growth and development,
                regardless of their socio-economic background.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Values Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.05))',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
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
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}
                sx={{
                  animation: `fadeInUp ${0.4 + index * 0.2}s cubic-bezier(0.4, 0, 0.2, 1)`,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    background: 'rgba(255,255,255,0.02)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      boxShadow: '0 12px 40px rgba(59, 130, 246, 0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: 'primary.light',
                      },
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      background: 'linear-gradient(45deg, #FFFFFF 30%, rgba(255,255,255,0.9) 90%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography
          variant="h2"
          align="center"
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
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}
              sx={{
                animation: `fadeInUp ${0.4 + index * 0.2}s cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    boxShadow: '0 12px 40px rgba(59, 130, 246, 0.1)',
                  },
                }}
              >
                <Avatar
                  src={member.image}
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 3,
                    border: '4px solid',
                    borderColor: 'primary.main',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    background: 'linear-gradient(45deg, #FFFFFF 30%, rgba(255,255,255,0.9) 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: 'primary.main',
                    mb: 2,
                    fontWeight: 500,
                  }}
                >
                  {member.role}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {member.bio}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Add keyframe animations */}
      <Box
        sx={{
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
          '@keyframes fadeInLeft': {
            from: {
              opacity: 0,
              transform: 'translateX(-40px)',
            },
            to: {
              opacity: 1,
              transform: 'translateX(0)',
            },
          },
          '@keyframes fadeInRight': {
            from: {
              opacity: 0,
              transform: 'translateX(40px)',
            },
            to: {
              opacity: 1,
              transform: 'translateX(0)',
            },
          },
          '@keyframes fadeIn': {
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },
          },
          '@keyframes glow': {
            from: {
              textShadow: '0 0 20px rgba(59, 130, 246, 0.2)',
            },
            to: {
              textShadow: '0 0 30px rgba(59, 130, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)',
            },
          },
        }}
      />
    </Box>
  );
};

export default About; 