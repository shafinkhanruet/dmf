import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
} from '@mui/material';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const certificateTemplates = {
  donation: {
    title: 'Certificate of Appreciation',
    subtitle: 'For Generous Contribution',
    template: 'donation-template',
    conditions: {
      minAmount: 100,
    },
  },
  volunteer: {
    title: 'Certificate of Recognition',
    subtitle: 'For Dedicated Volunteer Service',
    template: 'volunteer-template',
    conditions: {
      minHours: 10,
    },
  },
  event: {
    title: 'Certificate of Participation',
    subtitle: 'For Event Attendance',
    template: 'event-template',
    conditions: {
      attendance: true,
    },
  },
};

const CertificateGenerator = () => {
  const [certificateData, setCertificateData] = useState({
    recipientName: '',
    certificateType: 'donation',
    amount: '',
    hours: '',
    eventName: '',
    date: new Date().toISOString().split('T')[0],
    language: 'en',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCertificateData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateCertificate = async () => {
    try {
      // Create new PDF document
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      // Set background color
      doc.setFillColor(245, 245, 245);
      doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F');

      // Add border
      doc.setDrawColor(59, 130, 246);
      doc.setLineWidth(5);
      doc.rect(10, 10, doc.internal.pageSize.getWidth() - 20, doc.internal.pageSize.getHeight() - 20);

      // Add logo (you'll need to replace with your actual logo)
      // doc.addImage(logoUrl, 'PNG', 20, 20, 30, 30);

      // Set certificate title
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(40);
      doc.setTextColor(59, 130, 246);
      doc.text(certificateTemplates[certificateData.certificateType].title, 
        doc.internal.pageSize.getWidth() / 2, 50, { align: 'center' });

      // Add subtitle
      doc.setFontSize(24);
      doc.setTextColor(16, 185, 129);
      doc.text(certificateTemplates[certificateData.certificateType].subtitle,
        doc.internal.pageSize.getWidth() / 2, 70, { align: 'center' });

      // Add recipient name
      doc.setFontSize(32);
      doc.setTextColor(0, 0, 0);
      doc.text(certificateData.recipientName,
        doc.internal.pageSize.getWidth() / 2, 100, { align: 'center' });

      // Add specific details based on certificate type
      doc.setFontSize(16);
      let detailsText = '';
      switch (certificateData.certificateType) {
        case 'donation':
          detailsText = `For the generous donation of $${certificateData.amount}`;
          break;
        case 'volunteer':
          detailsText = `For dedicating ${certificateData.hours} hours of volunteer service`;
          break;
        case 'event':
          detailsText = `For participating in ${certificateData.eventName}`;
          break;
        default:
          break;
      }
      doc.text(detailsText, doc.internal.pageSize.getWidth() / 2, 120, { align: 'center' });

      // Add date
      doc.setFontSize(14);
      doc.text(`Issued on ${new Date(certificateData.date).toLocaleDateString()}`,
        doc.internal.pageSize.getWidth() / 2, 140, { align: 'center' });

      // Add signature placeholder
      doc.line(70, 170, 150, 170);
      doc.text('Director Signature', 110, 180, { align: 'center' });

      doc.line(160, 170, 240, 170);
      doc.text('Organization Seal', 200, 180, { align: 'center' });

      // Save the PDF
      const pdfOutput = doc.output('blob');
      const pdfUrl = URL.createObjectURL(pdfOutput);

      // Create download link
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `${certificateData.recipientName.replace(/\s+/g, '_')}_certificate.pdf`;
      link.click();

      setSnackbar({
        open: true,
        message: 'Certificate generated successfully!',
        severity: 'success',
      });

      // Clean up
      URL.revokeObjectURL(pdfUrl);
    } catch (error) {
      console.error('Error generating certificate:', error);
      setSnackbar({
        open: true,
        message: 'Error generating certificate. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          mb: 6,
          fontWeight: 700,
          background: 'linear-gradient(45deg, #FFFFFF 30%, rgba(255,255,255,0.9) 90%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 2px 10px rgba(59, 130, 246, 0.2)',
        }}
      >
        Certificate Generator
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Recipient Name"
              name="recipientName"
              value={certificateData.recipientName}
              onChange={handleInputChange}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'text.secondary',
                },
                '& .MuiInputBase-input': {
                  color: 'text.primary',
                },
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: 'text.secondary' }}>Certificate Type</InputLabel>
              <Select
                name="certificateType"
                value={certificateData.certificateType}
                onChange={handleInputChange}
                label="Certificate Type"
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                  color: 'text.primary',
                }}
              >
                <MenuItem value="donation">Donation Certificate</MenuItem>
                <MenuItem value="volunteer">Volunteer Certificate</MenuItem>
                <MenuItem value="event">Event Certificate</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {certificateData.certificateType === 'donation' && (
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Donation Amount"
                name="amount"
                type="number"
                value={certificateData.amount}
                onChange={handleInputChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'text.secondary',
                  },
                  '& .MuiInputBase-input': {
                    color: 'text.primary',
                  },
                }}
              />
            </Grid>
          )}

          {certificateData.certificateType === 'volunteer' && (
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Volunteer Hours"
                name="hours"
                type="number"
                value={certificateData.hours}
                onChange={handleInputChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'text.secondary',
                  },
                  '& .MuiInputBase-input': {
                    color: 'text.primary',
                  },
                }}
              />
            </Grid>
          )}

          {certificateData.certificateType === 'event' && (
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Event Name"
                name="eventName"
                value={certificateData.eventName}
                onChange={handleInputChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'text.secondary',
                  },
                  '& .MuiInputBase-input': {
                    color: 'text.primary',
                  },
                }}
              />
            </Grid>
          )}

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="date"
              value={certificateData.date}
              onChange={handleInputChange}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'text.secondary',
                },
                '& .MuiInputBase-input': {
                  color: 'text.primary',
                },
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: 'text.secondary' }}>Language</InputLabel>
              <Select
                name="language"
                value={certificateData.language}
                onChange={handleInputChange}
                label="Language"
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                  color: 'text.primary',
                }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="bn">Bengali</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={generateCertificate}
              fullWidth
              size="large"
              sx={{
                mt: 2,
                background: 'linear-gradient(45deg, #3B82F6, #2563EB)',
                color: '#FFFFFF',
                '&:hover': {
                  background: 'linear-gradient(45deg, #60A5FA, #3B82F6)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(59, 130, 246, 0.3)',
                },
              }}
            >
              Generate Certificate
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CertificateGenerator; 