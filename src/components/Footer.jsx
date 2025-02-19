import React from 'react';
    import { Box, Typography, styled } from '@mui/material';

    const StyledFooter = styled(Box)({
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
    });

    const Footer = () => {
      return (
        <StyledFooter component="footer">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Leonard Esere. All rights reserved.
          </Typography>
        </StyledFooter>
      );
    };

    export default Footer;
