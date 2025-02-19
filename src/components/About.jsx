import React from 'react';
    import { Box, Typography, Grid, Avatar, styled } from '@mui/material';

    const StyledAbout = styled(Box)({
      padding: '50px',
      textAlign: 'center',
      backgroundColor: '#1e1e1e',
      color: '#fff',
    });

    const StyledAvatar = styled(Avatar)({
      width: '150px',
      height: '150px',
      margin: '0 auto',
      marginBottom: '20px',
    });

    const About = () => {
      return (
        <StyledAbout>
          <Typography variant="h4" component="h2" gutterBottom>
            About Me
          </Typography>
          <StyledAvatar alt="Leonard Esere" src="https://via.placeholder.com/150" />
          <Typography variant="body1" paragraph>
            Highly driven individual who enjoys tackling complex challenges. I am a Microsoft Azure Cloud Architect with deep expertise in Exchange 2013, 2016, 2019, Exchange Online, and Exchange Hybrid Infrastructures. I bring extensive Azure Cloud Identity Management knowledge, particularly in designing secure Conditional Access policies and leveraging Entra ID for single sign-on. Additionally, I am highly skilled in Exchange/Active Directory PowerShell toolmaking (functions & modules) and deliver comprehensive IT solutions informed by my infrastructure background in network and system engineering.
          </Typography>
          <Typography variant="body1" paragraph>
            My experience includes system virtualization (Hyper-V), private cloud, and large-scale Active Directory/DNS deployments, as well as Office 365, Certificate Authority, and High Availability solutions. I have also led multiple advanced Azure projects, such as:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Skills</Typography>
              <ul>
                <li>Azure Cloud Architecture</li>
                <li>Exchange Server Management</li>
                <li>Active Directory</li>
                <li>PowerShell Scripting</li>
                <li>System Virtualization (Hyper-V)</li>
                <li>Network & System Engineering</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Education</Typography>
              <Typography variant="body2">
                Bachelor of Arts in Economics specializing in Managerial Economics
                <br />
                The University of Texas at San Antonio
              </Typography>
            </Grid>
          </Grid>
        </StyledAbout>
      );
    };

    export default About;
