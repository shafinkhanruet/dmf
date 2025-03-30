import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
  Fade,
  Container,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Mock data - Replace with real API data in production
const mockDonations = [
  {
    id: 1,
    name: 'Sarah M.',
    amount: 50,
    cause: 'Education',
    message: 'Every child deserves a chance to learn!',
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
  },
  {
    id: 2,
    name: 'John D.',
    amount: 100,
    cause: 'Healthcare',
    message: 'Supporting medical supplies for those in need.',
    timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
  },
  {
    id: 3,
    name: 'Anonymous',
    amount: 25,
    cause: 'Food Security',
    message: 'Happy to help!',
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
  },
];

const LiveDonationFeed = () => {
  const [donations, setDonations] = useState(mockDonations);
  const [newDonation, setNewDonation] = useState(null);

  useEffect(() => {
    // Simulate new donations coming in
    const interval = setInterval(() => {
      const randomAmount = Math.floor(Math.random() * 200) + 10;
      const newDonation = {
        id: Date.now(),
        name: `Anonymous`,
        amount: randomAmount,
        cause: ['Education', 'Healthcare', 'Food Security', 'Shelter'][Math.floor(Math.random() * 4)],
        message: 'Supporting the cause!',
        timestamp: new Date().toISOString(),
      };

      setNewDonation(newDonation);
      setDonations(prev => [newDonation, ...prev.slice(0, 4)]);
    }, 15000); // New donation every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const getTimeAgo = (timestamp) => {
    const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  };

  const getCauseColor = (cause) => {
    const colors = {
      Education: '#3B82F6',
      Healthcare: '#EF4444',
      'Food Security': '#10B981',
      Shelter: '#8B5CF6',
    };
    return colors[cause] || '#6B7280';
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
        Live Donations
      </Typography>

      <Card
        elevation={3}
        sx={{
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <List sx={{ p: 0 }}>
            {donations.map((donation, index) => (
              <Fade
                key={donation.id}
                in={true}
                timeout={donation === newDonation ? 1000 : 0}
              >
                <ListItem
                  sx={{
                    py: 3,
                    px: 4,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    background: donation === newDonation ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        bgcolor: getCauseColor(donation.cause),
                        width: 48,
                        height: 48,
                      }}
                    >
                      <FavoriteIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                        <Typography variant="h6" component="span">
                          {donation.name}
                        </Typography>
                        <Chip
                          label={`$${donation.amount}`}
                          color="primary"
                          size="small"
                          sx={{
                            background: getCauseColor(donation.cause),
                            fontWeight: 600,
                          }}
                        />
                        <Chip
                          label={donation.cause}
                          variant="outlined"
                          size="small"
                          sx={{
                            borderColor: getCauseColor(donation.cause),
                            color: getCauseColor(donation.cause),
                          }}
                        />
                      </Box>
                    }
                    secondary={
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {donation.message}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: 'text.secondary', mt: 1, display: 'block' }}
                        >
                          {getTimeAgo(donation.timestamp)}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              </Fade>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LiveDonationFeed; 