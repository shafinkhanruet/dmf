import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Slider,
  Grid,
  Paper,
  Container,
  Fade,
  Tooltip,
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HomeIcon from '@mui/icons-material/Home';

const impactMetrics = [
  {
    icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
    label: 'Meals Provided',
    calculation: (amount) => Math.floor(amount * 2), // $1 = 2 meals
    color: '#10B981'
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    label: 'Education Hours',
    calculation: (amount) => Math.floor(amount * 1.5), // $1 = 1.5 hours
    color: '#3B82F6'
  },
  {
    icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />,
    label: 'Medical Supplies',
    calculation: (amount) => Math.floor(amount * 0.5), // $1 = 0.5 medical supplies
    color: '#EF4444'
  },
  {
    icon: <HomeIcon sx={{ fontSize: 40 }} />,
    label: 'Shelter Days',
    calculation: (amount) => Math.floor(amount * 0.25), // $1 = 0.25 shelter days
    color: '#8B5CF6'
  }
];

const ImpactCalculator = () => {
  const [donationAmount, setDonationAmount] = useState(100);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, [donationAmount]);

  const handleSliderChange = (event, newValue) => {
    setAnimate(false);
    setTimeout(() => {
      setDonationAmount(newValue);
    }, 200);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          mb: 6,
          fontWeight: 700,
          background: 'linear-gradient(45deg, #3B82F6, #2563EB)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        See Your Impact
      </Typography>

      <Card
        elevation={3}
        sx={{
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Donation Amount: ${donationAmount}
          </Typography>
          
          <Slider
            value={donationAmount}
            onChange={handleSliderChange}
            min={10}
            max={1000}
            step={10}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `$${value}`}
            sx={{
              color: '#3B82F6',
              mb: 6,
              '& .MuiSlider-thumb': {
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: '0 0 0 8px rgba(59, 130, 246, 0.16)',
                },
              },
            }}
          />

          <Grid container spacing={4}>
            {impactMetrics.map((metric, index) => (
              <Grid item xs={12} sm={6} md={3} key={metric.label}>
                <Fade in={animate} timeout={500 + index * 100}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      borderRadius: 3,
                      height: '100%',
                      background: `linear-gradient(135deg, ${metric.color}15, ${metric.color}05)`,
                      border: `1px solid ${metric.color}30`,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Tooltip title={`Impact through ${metric.label}`} arrow>
                      <Box sx={{ color: metric.color, mb: 2 }}>
                        {metric.icon}
                      </Box>
                    </Tooltip>
                    <Typography
                      variant="h3"
                      sx={{
                        mb: 1,
                        color: metric.color,
                        fontWeight: 700,
                      }}
                    >
                      {metric.calculation(donationAmount)}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: 'text.secondary',
                        fontWeight: 500,
                      }}
                    >
                      {metric.label}
                    </Typography>
                  </Paper>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ImpactCalculator; 