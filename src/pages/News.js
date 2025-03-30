import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  TextField,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const News = () => {
  const newsItems = [
    {
      title: 'New Education Center Opens',
      date: 'March 15, 2024',
      category: 'Education',
      image: '/images/news/education-center.jpg',
      excerpt:
        'We are excited to announce the opening of our new education center, which will provide quality education to over 200 underprivileged children.',
      location: 'City Center',
      time: '10:00 AM',
    },
    {
      title: 'Medical Camp Success',
      date: 'March 10, 2024',
      category: 'Healthcare',
      image: '/images/news/medical-camp.jpg',
      excerpt:
        'Our recent medical camp served over 500 patients, providing essential healthcare services to the community.',
      location: 'Community Hall',
      time: '9:00 AM - 5:00 PM',
    },
    {
      title: 'Volunteer Recognition Ceremony',
      date: 'March 5, 2024',
      category: 'Events',
      image: '/images/news/volunteer-ceremony.jpg',
      excerpt:
        'We celebrated our dedicated volunteers who have contributed over 1000 hours of service to the community.',
      location: 'Foundation Office',
      time: '6:00 PM',
    },
    {
      title: 'Food Distribution Drive',
      date: 'March 1, 2024',
      category: 'Food Security',
      image: '/images/news/food-drive.jpg',
      excerpt:
        'Our monthly food distribution drive provided essential supplies to 200 families in need.',
      location: 'Various Locations',
      time: 'All Day',
    },
    {
      title: 'Skill Development Workshop',
      date: 'February 25, 2024',
      category: 'Employment',
      image: '/images/news/skill-workshop.jpg',
      excerpt:
        'A successful workshop on digital skills training was conducted for 50 youth from underprivileged backgrounds.',
      location: 'Training Center',
      time: '10:00 AM - 4:00 PM',
    },
    {
      title: 'Housing Support Program',
      date: 'February 20, 2024',
      category: 'Housing',
      image: '/images/news/housing-support.jpg',
      excerpt:
        'We completed the renovation of 10 homes for families in need, providing them with better living conditions.',
      location: 'Various Locations',
      time: 'Ongoing',
    },
  ];

  const categories = [
    'All',
    'Education',
    'Healthcare',
    'Events',
    'Food Security',
    'Employment',
    'Housing',
  ];

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
            News & Updates
          </Typography>
          <Typography variant="h5" align="center" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Stay informed about our latest activities, achievements, and community impact
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Categories */}
        <Box sx={{ mb: 6, display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              color={category === 'All' ? 'primary' : 'default'}
              sx={{ m: 0.5 }}
            />
          ))}
        </Box>

        {/* News Grid */}
        <Grid container spacing={4}>
          {newsItems.map((news, index) => (
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
                <CardMedia
                  component="img"
                  height="200"
                  image={news.image}
                  alt={news.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Chip
                      label={news.category}
                      size="small"
                      color="primary"
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {news.date}
                    </Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {news.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {news.excerpt}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {news.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {news.time}
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Newsletter Signup */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Subscribe to Our Newsletter
          </Typography>
          <Typography variant="body1" paragraph>
            Stay updated with our latest news, events, and impact stories.
            Subscribe to our monthly newsletter.
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              gap: 2,
              maxWidth: 500,
              mx: 'auto',
              mt: 2,
            }}
          >
            <TextField
              fullWidth
              placeholder="Enter your email"
              variant="outlined"
              sx={{ bgcolor: 'white', borderRadius: 1 }}
            />
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ whiteSpace: 'nowrap' }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default News; 