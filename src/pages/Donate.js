import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import ImpactCalculator from '../components/ImpactCalculator';
import LiveDonationFeed from '../components/LiveDonationFeed';

const Donate = () => {
  return (
    <Box sx={{ minHeight: '100vh', pt: 10, pb: 8 }}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            px: 2,
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1))',
            backdropFilter: 'blur(10px)',
            mb: 8,
          }}
        >
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
            Make a Difference Today
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Your contribution helps us create lasting change in our community.
            See the direct impact of your donation below.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              background: 'linear-gradient(45deg, #10B981, #059669)',
              '&:hover': {
                background: 'linear-gradient(45deg, #34D399, #10B981)',
              },
            }}
          >
            Donate Now
          </Button>
        </Box>
      </Container>

      {/* Impact Calculator */}
      <ImpactCalculator />

      {/* Live Donation Feed */}
      <LiveDonationFeed />

      {/* Call to Action */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Paper
          elevation={3}
          sx={{
            p: 6,
            textAlign: 'center',
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1))',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #10B981, #059669)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ready to Make an Impact?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Join our community of changemakers and help us create a better future for those in need.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              background: 'linear-gradient(45deg, #10B981, #059669)',
              '&:hover': {
                background: 'linear-gradient(45deg, #34D399, #10B981)',
              },
            }}
          >
            Start Donating
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Donate; 