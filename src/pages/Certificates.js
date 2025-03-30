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
    <Box sx={{ minHeight: '100vh', py: 8, backgroundColor: '#F3F4F6' }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              mb: 3,
              background: 'linear-gradient(45deg, #3B82F6, #2563EB)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Recognition & Appreciation
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 500,
              color: '#4B5563',
              mb: 4,
            }}
          >
            Generate certificates for donors, volunteers, and event participants
          </Typography>
        </Box>

        {/* Info Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 4,
                background: 'linear-gradient(135deg, #60A5FA20, #3B82F620)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, color: '#1E40AF', fontWeight: 700 }}>
                Donor Certificates
              </Typography>
              <Typography variant="body1" sx={{ color: '#4B5563' }}>
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
                background: 'linear-gradient(135deg, #34D39920, #05966920)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, color: '#065F46', fontWeight: 700 }}>
                Volunteer Recognition
              </Typography>
              <Typography variant="body1" sx={{ color: '#4B5563' }}>
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
                background: 'linear-gradient(135deg, #F8717120, #DC262620)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, color: '#991B1B', fontWeight: 700 }}>
                Event Participation
              </Typography>
              <Typography variant="body1" sx={{ color: '#4B5563' }}>
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
            mt: 8,
            p: 4,
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, color: '#1F2937', fontWeight: 700 }}>
            About Our Certificates
          </Typography>
          <Typography variant="body1" sx={{ color: '#4B5563', mb: 2 }}>
            Our certificates are designed to recognize and appreciate the valuable
            contributions of our community members. Each certificate is:
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>
                  • Professionally designed with modern aesthetics
                </Typography>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>
                  • Personalized with recipient details and achievements
                </Typography>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>
                  • Available in multiple languages
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>
                  • Digitally generated and instantly downloadable
                </Typography>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>
                  • Includes unique verification features
                </Typography>
                <Typography variant="body1" sx={{ color: '#4B5563' }}>
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