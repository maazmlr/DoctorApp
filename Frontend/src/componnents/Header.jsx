import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../assets/Logo/Landie.svg'
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['yourApointment', 'Doctor'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ pt: 2 }}>
      <NavLink to={'/'}><img  src={logo} alt="" style={{height:30}} /> </NavLink>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <NavLink to={'./signup'}>
                    <ListItem disablePadding>

          <ListItemButton onClick={()=>localStorage?.removeItem('uid')}  sx={{textAlign:'center'}}><ListItemText primary="Logout" /></ListItemButton>
                      </ListItem>

                      </NavLink>

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex ',m:0}}>
      <CssBaseline />
      <AppBar component="nav" sx={{background:'transparent'}}>
        <Toolbar>
          <IconButton
            color="#FFFFFF"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           <NavLink to={'/'}><img src={logo} alt="" /> </NavLink> 
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
           <NavLink to={`/${item.toLowerCase()}`}> {}<Button  key={item} sx={{ color: '#FFF',bgcolor:'#1B263B',borderRadius:'0.6rem',mr:1 ,padding:"0.5rem 3rem"}}>
                {item}
              </Button></NavLink> 
            ))}
             <NavLink to={`/signin`}> {}<Button onClick={()=>localStorage.removeItem('uid')} sx={{ color: '#FFF',bgcolor:'#1B263B',borderRadius:'0.6rem',mr:1 ,padding:"0.5rem 3rem"}}>
              Logout
              </Button></NavLink> 
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{h:7,mb:3 }}>
        <Toolbar />
   
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
