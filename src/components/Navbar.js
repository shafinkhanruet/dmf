import React, { useState, useCallback, memo } from 'react';
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
import CardMembershipIcon from '@mui/icons-material/CardMembership';

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
  { title: 'Certificates', path: '/certificates', icon: <CardMembershipIcon /> },
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

// Memoize menu items to prevent unnecessary re-renders
const MobileMenuItem = memo(({ item, location, handleDrawerToggle, openSubmenu, handleSubmenuToggle }) => (
  <React.Fragment>
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
        py: 1.5, // Increase touch target size
      }}
    >
      <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
        {item.icon}
      </ListItemIcon>
      <ListItemText 
        primary={item.title} 
        primaryTypographyProps={{
          sx: { fontSize: '1rem', fontWeight: location.pathname === item.path ? 600 : 400 }
        }}
      />
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
                py: 1.5,
                color: location.pathname === subItem.path ? 'primary.main' : 'text.primary',
                '&:hover': {
                  backgroundColor: 'rgba(59, 130, 246, 0.08)',
                },
              }}
            >
              <ListItemText 
                primary={subItem.title}
                primaryTypographyProps={{
                  sx: { fontSize: '0.95rem', fontWeight: location.pathname === subItem.path ? 600 : 400 }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    )}
  </React.Fragment>
));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState({});
  const [openSubmenu, setOpenSubmenu] = useState('');
  const location = useLocation();

  // Memoize handlers
  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [mobileOpen]);

  const handleMenuOpen = useCallback((event, menuId) => {
    setAnchorEl(prev => ({ ...prev, [menuId]: event.currentTarget }));
  }, []);

  const handleMenuClose = useCallback((menuId) => {
    setAnchorEl(prev => ({ ...prev, [menuId]: null }));
  }, []);

  const handleSubmenuToggle = useCallback((menuId) => {
    setOpenSubmenu(prev => prev === menuId ? '' : menuId);
  }, []);

  const isMenuOpen = (menuId) => Boolean(anchorEl[menuId]);

  const drawer = (
    <Box 
      sx={{ 
        width: 280, 
        pt: 2,
        overflowY: 'auto',
        height: '100%',
        WebkitOverflowScrolling: 'touch' // Improve scroll performance on iOS
      }}
    >
      <List>
        {menuItems.map((item) => (
          <MobileMenuItem
            key={item.title}
            item={item}
            location={location}
            handleDrawerToggle={handleDrawerToggle}
            openSubmenu={openSubmenu}
            handleSubmenuToggle={handleSubmenuToggle}
          />
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
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
                  minWidth: 'fit-content',
                }}
              >
                <Box
                  component="img"
                  src="https://media-hosting.imagekit.io/715ccaf9968f4077/logo.png?Expires=1837929368&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=v9tvKMPj8RxjM-7af968eWWgmtNGLj7bO3n~es5w~~cVEgzijWf9s6iUfLbkJZiQteKQqRoKXC3Y3hUShKnB8LarNFWa4Dk2HBv6sUl5K339y1TZKuk~ppHNEDd-gn0NJt2IEedNq76RufuEUCJgIOwTUJKIq5I8gy939SrMAVhNXAlMIJCYEOWk3~VatyhApi4XH-RSSeBS3XcPZgaVFZNdJzSAPVtxsRbp9WU9dHbNbIxz7Xa-qjmlfr2CsXFiE1pMk~dMdr5XuxpmQp-n67DXyU4mPHOsurfIO8Vnn0BuZrFh9reKWOnNP4PmzideVRTTNcNTd9PRTuUnl2Odfw__"
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
                  noWrap
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

              <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
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
                  src="https://media-hosting.imagekit.io/715ccaf9968f4077/logo.png?Expires=1837929368&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=v9tvKMPj8RxjM-7af968eWWgmtNGLj7bO3n~es5w~~cVEgzijWf9s6iUfLbkJZiQteKQqRoKXC3Y3hUShKnB8LarNFWa4Dk2HBv6sUl5K339y1TZKuk~ppHNEDd-gn0NJt2IEedNq76RufuEUCJgIOwTUJKIq5I8gy939SrMAVhNXAlMIJCYEOWk3~VatyhApi4XH-RSSeBS3XcPZgaVFZNdJzSAPVtxsRbp9WU9dHbNbIxz7Xa-qjmlfr2CsXFiE1pMk~dMdr5XuxpmQp-n67DXyU4mPHOsurfIO8Vnn0BuZrFh9reKWOnNP4PmzideVRTTNcNTd9PRTuUnl2Odfw__"
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
                  noWrap
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

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 0.5, justifyContent: 'center' }}>
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
                            px: 1.5,
                            minWidth: 'auto',
                            whiteSpace: 'nowrap',
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
                          px: 1.5,
                          minWidth: 'auto',
                          whiteSpace: 'nowrap',
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
                  minWidth: 'auto',
                  whiteSpace: 'nowrap',
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
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: 'background.paper',
            backdropFilter: 'blur(12px)',
            overscrollBehavior: 'contain', // Prevent body scroll when drawer is scrolled
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default memo(Navbar); 