import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import globeImage from './img/GlobeImage.webp'; // Ensure this file exists

const PrinceIT = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        minHeight: '80vh', // Kept compact height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 1.5rem 0rem 1.5rem', // Reduced side and bottom padding from 1.5rem/2rem to 1.5rem
        marginTop: 0,
        marginBottom: 0, // Explicitly remove any bottom margin
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: { xs: 'center', md: 'left' },
            gap: 12, // Kept the increased space between text and image
            marginTop: 0, // Remove any top margin
            marginBottom: 0, // Remove any bottom margin
          }}
        >
          {/* Left Section: Text Content */}
          <Box sx={{ flex: 1, margin: 0 }}> {/* Removed any default margins */}
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{ fontSize: '0.9rem', mb: 0.5 }} // Reduced margin-bottom from 1 to 0.5
            >
              Your Growth is our Vision
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              color="textPrimary"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '3rem', md: '4rem' },
                mb: 1, // Reduced margin-bottom from 2 to 1
              }}
            >
              Innovative IT Solutions for Your Business
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ mb: 2, fontSize: '1.3rem' }} // Reduced margin-bottom from 4 to 2
            >
              We offer customized IT design, management, and support services, specializing in business software solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, margin: 0 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#1976d2',
                  color: '#ffffff',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  '&:hover': { backgroundColor: '#1565c0' },
                  margin: 0, // Remove any default margins
                }}
              >
                Discover Prince IT
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: '#1976d2',
                  borderColor: '#1976d2',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  '&:hover': { borderColor: '#1565c0', color: '#1565c0' },
                  margin: 0, // Remove any default margins
                }}
              >
                Embark on Your Project
              </Button>
            </Box>
          </Box>

          {/* Right Section: Globe Image with Annotations */}
          <Box sx={{ flex: 1, position: 'relative', display: { xs: 'none', md: 'block' }, margin: 0 }}>
            <GlobeImage />
            {/* Annotations */}
            <Typography
              variant="caption"
              sx={{
                position: 'absolute',
                top: '10%',
                left: '20%',
                color: '#1976d2',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '5px 9px',
                borderRadius: '4px',
                fontSize: '0.9rem',
                margin: 0, // Remove any default margins
              }}
            >
              Active Website
            </Typography>
            <Typography
              variant="caption"
              sx={{
                position: 'absolute',
                top: '60%',
                left: '40%',
                color: '#1976d2',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '5px 9px',
                borderRadius: '4px',
                fontSize: '0.9rem',
                margin: 0, // Remove any default margins
              }}
            >
              High Performance
            </Typography>
            <Typography
              variant="caption"
              sx={{
                position: 'absolute',
                top: '80%',
                right: '10%',
                color: '#1976d2',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '5px 9px',
                borderRadius: '4px',
                fontSize: '0.9rem',
                margin: 0, // Remove any default margins
              }}
            >
              End User
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// Custom GlobeImage component with smaller size
const GlobeImage = () => (
  <Box
    component="img"
    src={globeImage}
    alt="Globe Illustration"
    sx={{
      width: '100%',
      height: 'auto',
      maxHeight: '400px',
      objectFit: 'contain',
      margin: 0, // Remove any default margins
    }}
  />
);

export default PrinceIT;