import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import CertificateGenerator from '../components/CertificateGenerator';

const Certificates = () => {
  return (
    <Box sx={{ minHeight: '100vh', py: { xs: 4, md: 8 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Box sx={{ mb: { xs: 4, md: 8 }, textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              mb: 3,
              background: 'linear-gradient(45deg, #FFFFFF 30%, rgba(255,255,255,0.9) 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(59, 130, 246, 0.2)',
            }}
          >
            Recognition & Appreciation
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 500,
              color: 'text.secondary',
              mb: 4,
            }}
          >
            Generate certificates for donors, volunteers, and event participants
          </Typography>
        </Box>

        {/* Info Cards */}
        <Grid container spacing={4} sx={{ mb: { xs: 4, md: 8 } }}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  boxShadow: '0 8px 30px rgba(59, 130, 246, 0.2)',
                },
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>
                Donor Certificates
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Recognize and appreciate generous contributions from our donors with
                personalized certificates of appreciation.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  boxShadow: '0 8px 30px rgba(16, 185, 129, 0.2)',
                },
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, color: 'secondary.main', fontWeight: 700 }}>
                Volunteer Recognition
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Honor our dedicated volunteers with certificates that acknowledge their
                valuable time and service to the community.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(124, 58, 237, 0.1))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  boxShadow: '0 8px 30px rgba(139, 92, 246, 0.2)',
                },
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, color: 'tertiary.main', fontWeight: 700 }}>
                Event Participation
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Commemorate event attendance and participation with beautifully designed
                certificates that serve as lasting mementos.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Certificate Generator */}
        <CertificateGenerator />

        {/* Additional Information */}
        <Paper
          elevation={3}
          sx={{
            mt: { xs: 4, md: 8 },
            p: 4,
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, color: 'text.primary', fontWeight: 700 }}>
            About Our Certificates
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
            Our certificates are designed to recognize and appreciate the valuable
            contributions of our community members. Each certificate is:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  • Professionally designed with modern aesthetics
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  • Personalized with recipient details and achievements
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  • Available in multiple languages
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  • Digitally generated and instantly downloadable
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  • Includes unique verification features
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  • Shareable on social media platforms
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Certificates; 