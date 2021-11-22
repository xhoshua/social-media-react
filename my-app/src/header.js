import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { createSvgIcon } from '@mui/material/utils'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import './style.css';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Link } from 'react-router-dom';

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor:'black'
}));
const options = ['Log out' ];
export default function Head(){
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
    return(
        <div>
          <Grid  >
            <Grid item xs={12} className="header" >
            <Grid item xs container direction="column" >
            <Item  >
      <Box >
      <BottomNavigation 
      style={{display:"flex",justifyContent:"space-between",alignItems:"center", backgroundColor:"transparent"}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >

      <Box>
        <BottomNavigationAction  
         className="Home-button"  component={Link} value="home"
         to="/home" label="Home" icon={<HomeIcon  color="secondary"  sx={{ fontSize: 35 }} /> } 
        />
        <BottomNavigationAction  component={Link} value="login"
        to="/login" className="Profile-button" label="Profile" icon={<PersonOutlineIcon color="secondary" sx={{ fontSize: 35 }} />} />
       </Box>
       
        <ButtonGroup  ref={anchorRef} aria-label="split button" >
        <IconButton className="Menu-button"  aria-label="Menu"  
         aria-controls={open ? 'split-button-menu' : undefined}
         aria-expanded={open ? 'true' : undefined}
         aria-label="select merge strategy"
         aria-haspopup="menu"
         onClick={handleToggle}
        > <MenuIcon color="secondary" sx={{ fontSize: 35 }}  /> </IconButton >   
          </ButtonGroup>  
          <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>


      </BottomNavigation>
    </Box>
    </Item>
    </Grid>
  </Grid>
  </Grid>
  </div>

    );
}