import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  useScrollTrigger,
  Slide,
  Fade,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GroupsIcon from '@mui/icons-material/Groups';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const menuItems = [
  { title: 'Home', path: '/', icon: <HomeIcon /> },
  {
    title: 'About Us',
    path: '/about',
    icon: <InfoIcon />,
    submenu: [
      { title: 'Our Story', path: '/about' },
      { title: 'Our Team', path: '/about#team' },
      { title: 'Our Impact', path: '/about#impact' },
    ],
  },
  {
    title: 'Our Work',
    path: '/programs',
    icon: <WorkIcon />,
    submenu: [
      { title: 'Programs', path: '/programs' },
      { title: 'Gallery', path: '/gallery' },
      { title: 'Success Stories', path: '/success-stories' },
    ],
  },
  { title: 'Volunteer', path: '/volunteer', icon: <GroupsIcon /> },
  { title: 'News', path: '/news', icon: <NewspaperIcon /> },
  { title: 'Contact', path: '/contact', icon: <ContactsIcon /> },
];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState({});
  const [openSubmenu, setOpenSubmenu] = useState('');
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event, menuId) => {
    setAnchorEl({ ...anchorEl, [menuId]: event.currentTarget });
  };

  const handleMenuClose = (menuId) => {
    setAnchorEl({ ...anchorEl, [menuId]: null });
  };

  const handleSubmenuToggle = (menuId) => {
    setOpenSubmenu(openSubmenu === menuId ? '' : menuId);
  };

  const isMenuOpen = (menuId) => Boolean(anchorEl[menuId]);

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.title}>
            <ListItem
              button
              component={RouterLink}
              to={item.path}
              onClick={() => item.submenu ? handleSubmenuToggle(item.title) : handleDrawerToggle()}
              sx={{
                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                '&:hover': {
                  backgroundColor: 'rgba(59, 130, 246, 0.08)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
              {item.submenu && (
                openSubmenu === item.title ? <ExpandLess /> : <ExpandMore />
              )}
            </ListItem>
            {item.submenu && (
              <Collapse in={openSubmenu === item.title} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenu.map((subItem) => (
                    <ListItem
                      button
                      key={subItem.title}
                      component={RouterLink}
                      to={subItem.path}
                      onClick={handleDrawerToggle}
                      sx={{
                        pl: 4,
                        color: location.pathname === subItem.path ? 'primary.main' : 'text.primary',
                        '&:hover': {
                          backgroundColor: 'rgba(59, 130, 246, 0.08)',
                        },
                      }}
                    >
                      <ListItemText primary={subItem.title} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            transition: 'all 0.3s ease',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  mr: 4,
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + '/images/logo.png'}
                  alt="DMF Logo"
                  sx={{
                    height: 40,
                    mr: 2,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    background: 'linear-gradient(45deg, #3B82F6, #2563EB)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  DUKKHOMUKH FOUNDATION
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <Box
                component={RouterLink}
                to="/"
                sx={{
                  flexGrow: 1,
                  display: { xs: 'flex', md: 'none' },
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + '/images/logo.png'}
                  alt="DMF Logo"
                  sx={{
                    height: 32,
                    mr: 1,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    background: 'linear-gradient(45deg, #3B82F6, #2563EB)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  DMF
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                {menuItems.map((item) => (
                  <Box key={item.title}>
                    {item.submenu ? (
                      <>
                        <Button
                          onClick={(e) => handleMenuOpen(e, item.title)}
                          sx={{
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.08)',
                            },
                          }}
                        >
                          {item.title}
                          {isMenuOpen(item.title) ? <ExpandLess /> : <ExpandMore />}
                        </Button>
                        <Menu
                          anchorEl={anchorEl[item.title]}
                          open={isMenuOpen(item.title)}
                          onClose={() => handleMenuClose(item.title)}
                          TransitionComponent={Fade}
                          sx={{
                            '& .MuiPaper-root': {
                              backgroundColor: 'background.paper',
                              backdropFilter: 'blur(12px)',
                              mt: 1.5,
                              minWidth: 180,
                            },
                          }}
                        >
                          {item.submenu.map((subItem) => (
                            <MenuItem
                              key={subItem.title}
                              component={RouterLink}
                              to={subItem.path}
                              onClick={() => handleMenuClose(item.title)}
                              sx={{
                                color: location.pathname === subItem.path ? 'primary.main' : 'text.primary',
                                '&:hover': {
                                  backgroundColor: 'rgba(59, 130, 246, 0.08)',
                                },
                              }}
                            >
                              {subItem.title}
                            </MenuItem>
                          ))}
                        </Menu>
                      </>
                    ) : (
                      <Button
                        component={RouterLink}
                        to={item.path}
                        sx={{
                          color: location.pathname === item.path ? 'primary.main' : 'white',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                          },
                        }}
                      >
                        {item.title}
                      </Button>
                    )}
                  </Box>
                ))}
              </Box>

              <Button
                component={RouterLink}
                to="/donate"
                variant="contained"
                sx={{
                  ml: 2,
                  background: 'linear-gradient(45deg, #10B981, #059669)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #34D399, #10B981)',
                  },
                }}
              >
                Donate Now
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 