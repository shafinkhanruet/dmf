import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stepper,
  Step,
  StepLabel,
  Paper,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Donate = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');
  const [program, setProgram] = useState('general');

  const donationPrograms = [
    {
      title: 'General Fund',
      description: 'Support our overall mission and initiatives',
      icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
      value: 'general',
    },
    {
      title: 'Education Support',
      description: 'Help provide education to underprivileged children',
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      value: 'education',
    },
    {
      title: 'Healthcare Initiatives',
      description: 'Support medical camps and healthcare access',
      icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />,
      value: 'healthcare',
    },
    {
      title: 'Housing Support',
      description: 'Help provide shelter and housing assistance',
      icon: <HomeWorkIcon sx={{ fontSize: 40 }} />,
      value: 'housing',
    },
    {
      title: 'Food Security',
      description: 'Support food assistance programs',
      icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
      value: 'food',
    },
  ];

  const steps = ['Select Program', 'Choose Amount', 'Payment Details'];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({ donationType, amount, program });
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            {donationPrograms.map((program) => (
              <Grid item xs={12} sm={6} md={4} key={program.value}>
                <Card
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    border: program.value === program ? '2px solid' : 'none',
                    borderColor: 'primary.main',
                  }}
                  onClick={() => setProgram(program.value)}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {program.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {program.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {program.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        );
      case 1:
        return (
          <Box sx={{ maxWidth: 400, mx: 'auto' }}>
            <FormControl component="fieldset" sx={{ mb: 4 }}>
              <FormLabel component="legend">Donation Type</FormLabel>
              <RadioGroup
                row
                value={donationType}
                onChange={(e) => setDonationType(e.target.value)}
                sx={{ justifyContent: 'center' }}
              >
                <FormControlLabel
                  value="one-time"
                  control={<Radio />}
                  label="One-time Donation"
                />
                <FormControlLabel
                  value="monthly"
                  control={<Radio />}
                  label="Monthly Donation"
                />
              </RadioGroup>
            </FormControl>

            <Typography variant="h6" gutterBottom>
              Select Amount
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {[100, 500, 1000, 2000, 5000].map((value) => (
                <Grid item xs={6} sm={4} key={value}>
                  <Button
                    variant={amount === value.toString() ? 'contained' : 'outlined'}
                    fullWidth
                    onClick={() => setAmount(value.toString())}
                  >
                    ₹{value}
                  </Button>
                </Grid>
              ))}
            </Grid>

            <TextField
              fullWidth
              label="Custom Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              sx={{ mb: 4 }}
            />
          </Box>
        );
      case 2:
        return (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ maxWidth: 500, mx: 'auto' }}
          >
            <Typography variant="h6" gutterBottom>
              Payment Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Card Number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  label="Expiry Date"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  label="CVV"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Make a Donation
          </Typography>
          <Typography variant="h5" align="center" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Your contribution can help us create lasting change in communities
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Stepper activeStep={activeStep} sx={{ mb: 6 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {renderStepContent(activeStep)}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
            >
              {activeStep === steps.length - 1 ? 'Donate Now' : 'Next'}
            </Button>
          </Box>
        </Paper>

        {/* Additional Information */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Tax Benefits
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your donations are eligible for tax benefits under Section 80G of
                  the Income Tax Act.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Secure Payment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We use industry-standard encryption to ensure your payment
                  information is secure.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Transparency
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We maintain complete transparency in how your donations are used
                  and provide regular updates.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Donate; 