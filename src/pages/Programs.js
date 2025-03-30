import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WorkIcon from '@mui/icons-material/Work';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ElderlyIcon from '@mui/icons-material/Elderly';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const Programs = () => {
  const programs = [
    {
      title: 'Education Empowerment',
      icon: <SchoolIcon sx={{ fontSize: 48 }} />,
      description: 'Providing quality education and learning resources to underprivileged children and young adults.',
      features: [
        'Free primary education',
        'Scholarship programs',
        'Digital literacy training',
        'Teacher training initiatives',
      ],
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'Healthcare Access',
      icon: <LocalHospitalIcon sx={{ fontSize: 48 }} />,
      description: 'Making healthcare accessible to all through mobile clinics and health awareness programs.',
      features: [
        'Mobile health clinics',
        'Health awareness camps',
        'Preventive healthcare',
        'Medical assistance',
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'Skill Development',
      icon: <BusinessCenterIcon sx={{ fontSize: 48 }} />,
      description: 'Empowering individuals with vocational training and entrepreneurship skills.',
      features: [
        'Vocational training',
        'Entrepreneurship workshops',
        'Job placement assistance',
        'Business mentoring',
      ],
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470',
    },
    {
      title: 'Environmental Conservation',
      icon: <WorkIcon sx={{ fontSize: 48 }} />,
      description: 'Promoting environmental awareness and sustainable practices in communities.',
      features: [
        'Tree plantation drives',
        'Waste management',
        'Environmental education',
        'Clean energy initiatives',
      ],
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470',
    },
  ];

  const initiatives = [
    {
      icon: <ChildCareIcon sx={{ fontSize: 40 }} />,
      title: 'Child Welfare',
      description: 'Supporting children through nutrition, education, and care programs.',
    },
    {
      icon: <AccessibilityNewIcon sx={{ fontSize: 40 }} />,
      title: 'Women Empowerment',
      description: 'Enabling women through skill development and entrepreneurship support.',
    },
    {
      icon: <ElderlyIcon sx={{ fontSize: 40 }} />,
      title: 'Elder Care',
      description: 'Providing support and care services for the elderly community.',
    },
    {
      icon: <WaterDropIcon sx={{ fontSize: 40 }} />,
      title: 'Clean Water',
      description: 'Ensuring access to clean water through infrastructure development.',
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
            background: 'linear-gradient(rgba(3, 7, 18, 0.85), rgba(3, 7, 18, 0.95)), url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80)',
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
                Our Programs
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
                Discover our comprehensive range of programs designed to create lasting
                positive impact in communities across India.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Programs Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={6}>
          {programs.map((program, index) => (
            <Grid item xs={12} key={index}
              sx={{
                animation: `fadeInUp ${0.4 + index * 0.2}s cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  overflow: 'hidden',
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
                <Grid container>
                  <Grid item xs={12} md={6} sx={{ p: 4 }}>
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
                      {program.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      gutterBottom
                      sx={{
                        background: 'linear-gradient(45deg, #FFFFFF 30%, rgba(255,255,255,0.9) 90%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 2,
                      }}
                    >
                      {program.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                      }}
                    >
                      {program.description}
                    </Typography>
                    <Grid container spacing={2}>
                      {program.features.map((feature, idx) => (
                        <Grid item xs={12} sm={6} key={idx}>
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'text.secondary',
                              display: 'flex',
                              alignItems: 'center',
                              '&::before': {
                                content: '""',
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                backgroundColor: 'primary.main',
                                marginRight: 2,
                              },
                            }}
                          >
                            {feature}
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                    <Button
                      variant="outlined"
                      sx={{
                        mt: 4,
                        borderWidth: 2,
                        borderColor: 'primary.main',
                        color: 'white',
                        '&:hover': {
                          borderWidth: 2,
                          backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        height: '100%',
                        minHeight: 300,
                        background: `url(${program.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Other Initiatives Section */}
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
            Other Initiatives
          </Typography>
          <Grid container spacing={4}>
            {initiatives.map((initiative, index) => (
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
                    {initiative.icon}
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
                    {initiative.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {initiative.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

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

export default Programs; 