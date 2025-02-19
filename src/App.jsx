import React from 'react';
    import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
    import { Box, AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, styled } from '@mui/material';
    import MenuIcon from '@mui/icons-material/Menu';
    import Home from './components/Home';
    import About from './components/About';
    import Experience from './components/Experience';
    import Projects from './components/Projects';
    import Certifications from './components/Certifications';
    import Contact from './components/Contact';
    import Footer from './components/Footer';
    import './App.css';

    const navItems = [
      { text: 'Home', path: '/' },
      { text: 'About', path: '/about' },
      { text: 'Experience', path: '/experience' },
      { text: 'Projects', path: '/projects' },
      { text: 'Certifications', path: '/certifications' },
      { text: 'Contact', path: '/contact' },
    ];

    const StyledAppBar = styled(AppBar)({
      background: 'linear-gradient(45deg, #333333 30%, #000000 90%)',
      color: '#fff',
      boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .1)',
    });

    const StyledDrawer = styled(Drawer)({
      '& .MuiDrawer-paper': {
        background: '#121212',
        color: '#fff',
      },
    });

    function App() {
      const [mobileOpen, setMobileOpen] = React.useState(false);

      const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

      const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Leonard Esere
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={item.path}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

      return (
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <StyledAppBar position="static">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Leonard Esere
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {navItems.map((item) => (
                    <Button key={item.text} color="inherit" component={Link} to={item.path}>
                      {item.text}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </StyledAppBar>
            <StyledDrawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
              }}
            >
              {drawer}
            </StyledDrawer>
            <Box component="main" sx={{ p: 3, flexGrow: 1, backgroundColor: '#121212', color: '#fff' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      );
    }

    export default App;
