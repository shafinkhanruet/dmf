import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Modal,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470',
      title: 'Education Program',
      category: 'Education',
    },
    {
      url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470',
      title: 'Healthcare Initiative',
      category: 'Healthcare',
    },
    {
      url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470',
      title: 'Community Event',
      category: 'Events',
    },
    {
      url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470',
      title: 'Volunteer Activities',
      category: 'Volunteers',
    },
    {
      url: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470',
      title: 'Youth Program',
      category: 'Education',
    },
    {
      url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470',
      title: 'Medical Camp',
      category: 'Healthcare',
    },
    {
      url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470',
      title: 'Community Workshop',
      category: 'Events',
    },
    {
      url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470',
      title: 'Volunteer Training',
      category: 'Volunteers',
    },
  ];

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
    setSelectedImage(galleryImages[currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1]);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(galleryImages[currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1]);
  };

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
                Our Gallery
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
                Explore our journey through images, capturing moments of impact
                and transformation in the communities we serve.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Gallery Grid */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={4}>
          {galleryImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}
              sx={{
                animation: `fadeInUp ${0.4 + index * 0.2}s cubic-bezier(0.4, 0, 0.2, 1)`,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 4,
                  cursor: 'pointer',
                  height: 280,
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(59, 130, 246, 0.1)',
                    '& .image-overlay': {
                      opacity: 1,
                    },
                    '& .image': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
                onClick={() => handleImageClick(image, index)}
              >
                <Box
                  className="image"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url(${image.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
                <Box
                  className="image-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 3,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      mb: 1,
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    }}
                  >
                    {image.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.8)',
                      textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                    }}
                  >
                    {image.category}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Image Modal */}
      <Modal
        open={!!selectedImage}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: -48,
              right: 0,
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: -48,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: -48,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
            }}
          >
            <ChevronRightIcon />
          </IconButton>
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage.url}
              alt={selectedImage.title}
              sx={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: 2,
              }}
            />
          )}
        </Box>
      </Modal>

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

export default Gallery; 