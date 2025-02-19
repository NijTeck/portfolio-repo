import React from 'react';
    import { Box, Typography, styled } from '@mui/material';
    import Typewriter from 'typewriter-effect';

    const StyledHome = styled(Box)({
      textAlign: 'center',
      padding: '50px',
      backgroundImage: 'url("https://images.unsplash.com/photo-1505243405224-422c8e37e263?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
      },
      position: 'relative',
      zIndex: 0,
    });

    const Home = () => {
      return (
        <StyledHome>
          <Typography variant="h2" component="h1" gutterBottom style={{ zIndex: 2 }}>
            Leonard Esere
          </Typography>
          <Typography variant="h4" style={{ zIndex: 2 }}>
            <Typewriter
              options={{
                strings: ['IT Professional', 'Azure Cloud Architect', 'DevOps Engineer'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </Typography>
        </StyledHome>
      );
    };

    export default Home;
