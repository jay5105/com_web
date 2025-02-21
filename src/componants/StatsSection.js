import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People'; // IT Professionals (dots)
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'; // Happy Clients (smiley)
import ThumbUpIcon from '@mui/icons-material/ThumbUp'; // Client Recommended US (thumbs up)
import PersonIcon from '@mui/icons-material/Person'; // Repeat Client Ratio (user)
import SettingsIcon from '@mui/icons-material/Settings'; // Project Delivered (gear)
import StarIcon from '@mui/icons-material/Star'; // 5 Star Rating (star)
import PublicIcon from '@mui/icons-material/Public'; // Countries Served (globe)
import overviewImage from './img/company-overview.webp'; // Replace with your image path
import './StatsSection.css'; // Optional CSS for custom styling

const CombinedSection = () => {
  return (
    <Box sx={{ backgroundColor: '#F5F7FA', py: 6 }}> {/* Light gray background matching screenshot */}
      <Container maxWidth="lg">
        {/* Stats Section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h2"
              component="h1"
              color="#1E4D92" // Blue title from screenshot
              sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3rem' } }}
            >
              Choose Prince IT Solution As Your Services
            </Typography>
            <Typography
              variant="subtitle1"
              color="#7F8C9D" // Gray subtitle from screenshot
              sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}
            >
              A Reliable Web and Mobile Development Partner
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {/* Row 1 */}
            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card">
                <Box className="stat-icon" sx={{ backgroundColor: '#2C3F8C' }}>
                  <PeopleIcon sx={{ fontSize: 60, color: '#ffffff' }} /> {/* 60px × 60px, white color */}
                </Box>
                <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#000', mt: 2 }}>
                  10+
                </Typography>
                <Typography variant="body2" color="#7F8C9D" sx={{ mt: 1 }}>
                  IT Professionals
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card">
                <Box className="stat-icon" sx={{ backgroundColor: '#F4B400' }}>
                  <SentimentSatisfiedIcon sx={{ fontSize: 60, color: '#ffffff' }} /> {/* 60px × 60px, white color */}
                </Box>
                <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#000', mt: 2 }}>
                  50+
                </Typography>
                <Typography variant="body2" color="#7F8C9D" sx={{ mt: 1 }}>
                  Happy Clients
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card">
                <Box className="stat-icon" sx={{ backgroundColor: '#E67E22' }}>
                  <ThumbUpIcon sx={{ fontSize: 60, color: '#ffffff' }} /> {/* 60px × 60px, white color */}
                </Box>
                <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#000', mt: 2 }}>
                  98+
                </Typography>
                <Typography variant="body2" color="#7F8C9D" sx={{ mt: 1 }}>
                  Client Recommended US
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card">
                <Box className="stat-icon" sx={{ backgroundColor: '#4CAF50' }}>
                  <PersonIcon sx={{ fontSize: 60, color: '#ffffff' }} /> {/* 60px × 60px, white color */}
                </Box>
                <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#000', mt: 2 }}>
                  96+
                </Typography>
                <Typography variant="body2" color="#7F8C9D" sx={{ mt: 1 }}>
                  Repeat Client Ratio
                </Typography>
              </Box>
            </Grid>

            {/* Row 2 */}
            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card">
                <Box className="stat-icon" sx={{ backgroundColor: '#9C27B0' }}>
                  <SettingsIcon sx={{ fontSize: 60, color: '#ffffff' }} /> {/* 60px × 60px, white color */}
                </Box>
                <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#000', mt: 2 }}>
                  100+
                </Typography>
                <Typography variant="body2" color="#7F8C9D" sx={{ mt: 1 }}>
                  Project Delivered
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card">
                <Box className="stat-icon" sx={{ backgroundColor: '#F4B400' }}>
                  <StarIcon sx={{ fontSize: 60, color: '#ffffff' }} /> {/* 60px × 60px, white color */}
                </Box>
                <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#000', mt: 2 }}>
                  100+
                </Typography>
                <Typography variant="body2" color="#7F8C9D" sx={{ mt: 1 }}>
                  5 Star Rating
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card">
                <Box className="stat-icon" sx={{ backgroundColor: '#E74C3C' }}>
                  <SentimentSatisfiedIcon sx={{ fontSize: 60, color: '#ffffff' }} /> {/* 60px × 60px, white color */}
                </Box>
                <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#000', mt: 2 }}>
                  50+
                </Typography>
                <Typography variant="body2" color="#7F8C9D" sx={{ mt: 1 }}>
                  Happy End Users
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box className="stat-card">
                <Box className="stat-icon" sx={{ backgroundColor: '#2C3F8C' }}>
                  <PublicIcon sx={{ fontSize: 60, color: '#ffffff' }} /> {/* 60px × 60px, white color */}
                </Box>
                <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', color: '#000', mt: 2 }}>
                  20+
                </Typography>
                <Typography variant="body2" color="#7F8C9D" sx={{ mt: 1 }}>
                  Countries Served
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Company Overview Section */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
            {/* Text Content */}
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h2"
                component="h1"
                color="#1E4D92" // Blue title from screenshot
                sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3rem' }, mb: 2, position: 'relative' }}
              >
                Company Overview
                <Box
                  sx={{
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '50px',
                    height: '4px',
                    backgroundColor: '#27AE60', // Green underline from screenshot
                    borderRadius: '2px',
                  }}
                />
              </Typography>
              <Typography
                variant="body1"
                color="#333" // Dark gray text for readability
                sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}
              >
                At Prince IT Solution, we specialize in providing creative and bespoke digital solutions to help organizations prosper in the digital age. From custom web and mobile applications to e-commerce platforms and enterprise solutions, we combine cutting-edge technology and creativity to create solutions that promote growth and success.
                <br /><br />
                Our devoted team of specialists is committed to providing great service and ensuring that each project fits your specific requirements. Whether you’re a startup or an established company, we bring your ideas to life with precision, efficiency, and attention to detail.
              </Typography>
            </Box>

            {/* Illustration Image */}
            <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
              <img src={overviewImage} alt="Team collaborating" className="overview-image" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CombinedSection;