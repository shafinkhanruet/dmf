import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Zoom, useScrollTrigger } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FloatingDonateButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    setIsVisible(trigger);
  }, [trigger]);

  return (
    <Zoom in={isVisible}>
      <Box
        component="div"
        sx={{
          position: 'fixed',
          bottom: { xs: 16, sm: 24 },
          right: { xs: 16, sm: 24 },
          zIndex: 1000,
        }}
      >
        <Button
          component={RouterLink}
          to="/donate"
          variant="contained"
          startIcon={<FavoriteIcon />}
          sx={{
            borderRadius: '50px',
            px: 3,
            py: 1.5,
            background: 'linear-gradient(45deg, #10B981, #059669)',
            boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
            animation: 'pulse 2s infinite',
            '&:hover': {
              background: 'linear-gradient(45deg, #34D399, #10B981)',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(16, 185, 129, 0.6)',
            },
            '@keyframes pulse': {
              '0%': {
                boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.4)',
              },
              '70%': {
                boxShadow: '0 0 0 10px rgba(16, 185, 129, 0)',
              },
              '100%': {
                boxShadow: '0 0 0 0 rgba(16, 185, 129, 0)',
              },
            },
          }}
        >
          Donate Now
        </Button>
      </Box>
    </Zoom>
  );
};

export default FloatingDonateButton; 