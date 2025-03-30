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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Paper,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';

const Volunteer = () => {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [availability, setAvailability] = useState('');

  const volunteerOpportunities = [
    {
      title: 'Education Support',
      description:
        'Help teach children, assist with homework, and organize educational activities.',
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      skills: ['Teaching', 'Mentoring', 'Organization'],
      commitment: '2-4 hours/week',
      location: 'On-site',
    },
    {
      title: 'Healthcare Initiatives',
      description:
        'Assist in medical camps, health awareness programs, and patient support.',
      icon: <LocalHospitalIcon sx={{ fontSize: 40 }} />,
      skills: ['Healthcare', 'Patient Care', 'Organization'],
      commitment: '4-6 hours/week',
      location: 'On-site',
    },
    {
      title: 'Housing Support',
      description:
        'Help with home repairs, construction projects, and housing assistance programs.',
      icon: <HomeWorkIcon sx={{ fontSize: 40 }} />,
      skills: ['Construction', 'Handyman', 'Project Management'],
      commitment: '4-8 hours/week',
      location: 'On-site',
    },
    {
      title: 'Food Security',
      description:
        'Assist in food distribution, community kitchens, and sustainable farming projects.',
      icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
      skills: ['Cooking', 'Agriculture', 'Distribution'],
      commitment: '3-5 hours/week',
      location: 'On-site',
    },
    {
      title: 'Skill Development',
      description:
        'Teach vocational skills, conduct workshops, and provide career guidance.',
      icon: <WorkIcon sx={{ fontSize: 40 }} />,
      skills: ['Teaching', 'Career Counseling', 'Workshop Facilitation'],
      commitment: '3-6 hours/week',
      location: 'On-site',
    },
    {
      title: 'Community Outreach',
      description:
        'Help with community events, awareness programs, and fundraising activities.',
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      skills: ['Event Planning', 'Communication', 'Fundraising'],
      commitment: '2-5 hours/week',
      location: 'On-site',
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({ selectedProgram, availability });
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
            Volunteer With Us
          </Typography>
          <Typography variant="h5" align="center" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Join our community of volunteers and make a difference in people's lives
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Volunteer Opportunities */}
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 6 }}>
          Volunteer Opportunities
        </Typography>
        <Grid container spacing={4}>
          {volunteerOpportunities.map((opportunity, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 1 }}>
                      {opportunity.icon}
                    </Box>
                    <Typography variant="h6" component="h2">
                      {opportunity.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {opportunity.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Required Skills:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {opportunity.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="text.secondary">
                      Commitment: {opportunity.commitment}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Location: {opportunity.location}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Volunteer Registration Form */}
        <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
          <Typography variant="h4" gutterBottom align="center">
            Register as a Volunteer
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
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
                <FormControl fullWidth required>
                  <InputLabel>Select Program</InputLabel>
                  <Select
                    value={selectedProgram}
                    label="Select Program"
                    onChange={(e) => setSelectedProgram(e.target.value)}
                  >
                    {volunteerOpportunities.map((opportunity) => (
                      <MenuItem key={opportunity.title} value={opportunity.title}>
                        {opportunity.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Availability</InputLabel>
                  <Select
                    value={availability}
                    label="Availability"
                    onChange={(e) => setAvailability(e.target.value)}
                  >
                    <MenuItem value="weekday">Weekdays</MenuItem>
                    <MenuItem value="weekend">Weekends</MenuItem>
                    <MenuItem value="both">Both Weekdays and Weekends</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  label="Why do you want to volunteer?"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                >
                  Submit Application
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>

        {/* Benefits Section */}
        <Grid container spacing={4} sx={{ mt: 8 }}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Personal Growth
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Develop new skills, gain experience, and build meaningful
                  relationships while making a difference.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Community Impact
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Be part of positive change in your community and help create a
                  better future for all.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recognition
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Receive certificates, references, and recognition for your
                  valuable contribution.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Volunteer; 