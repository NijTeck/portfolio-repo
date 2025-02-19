import React from 'react';
    import { Box, Typography, Link, styled } from '@mui/material';

    const StyledContact = styled(Box)({
      padding: '50px',
      textAlign: 'center',
      backgroundColor: '#1e1e1e',
      color: '#fff',
    });

    const Contact = () => {
      return (
        <StyledContact>
          <Typography variant="h4" component="h2" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1">
            Email: <Link href="mailto:leonard.esere@example.com" color="inherit">leonard.esere@example.com</          </Typography>
          <Typography variant="body1">
            LinkedIn: <Link href="https://www.linkedin.com/in/leonardesere" color="inherit">linkedin.com/in/leonardesere</Link>
          </Typography>
          <Typography variant="body1">
            GitHub: <Link href="https://github.com/leonardesere" color="inherit">github.com/leonardesere</Link>
          </Typography>
        </StyledContact>
      );
    };

    export default Contact;
