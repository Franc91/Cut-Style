// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

// function Nav() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     right: false,
//   });

//   const toggleDrawer = (side, open) => event => {
//     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setState({ ...state, [side]: open });
//   };

//   const sideList = side => (
//     <div
//       className={classes.list}
//       role="presentation"
//       onClick={toggleDrawer(side, false)}
//       onKeyDown={toggleDrawer(side, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   const fullList = side => (
//     <div
//       className={classes.fullList}
//       role="presentation"
//       onClick={toggleDrawer(side, false)}
//       onKeyDown={toggleDrawer(side, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       <Button onClick={toggleDrawer('right', true)}><MenuIcon/></Button>
//       <SwipeableDrawer
//         anchor="right"
//         open={state.right}
//         onClose={toggleDrawer('right', false)}
//         onOpen={toggleDrawer('right', true)}
//       >
//         {sideList('right')}
//       </SwipeableDrawer>
//     </div>
//   );
// };

import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="navigation__nav" style={{border: '1px solid red', margin: 10, height: '5vh', display:'flex', alignItems:'center' }}>
                <MenuList className='navigation' style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                    <MenuItem  className="navigationList__item">
                        <Link 
                        activeClass="active"
                        to="AboutUs"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        delay={0}
                        >
                            O Nas
                        </Link>
                    </MenuItem>
                    <MenuItem  className="navigationList__item">
                        <Link 
                        activeClass="active"
                        to="Price"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        delay={0}
                        >
                            Cennik
                        </Link>
                    </MenuItem >
                    <MenuItem  className="navigationList__item">
                        <Link 
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        delay={0}
                        >
                            Kontakt
                        </Link>
                    </MenuItem>
                    <MenuItem  className="navigationList__item">
                        <RouterLink
                        style={{textDecoration: 'none'}} 
                        to="/signUp">
                            Rejestracja
                        </RouterLink>
                    </MenuItem>
                    <MenuItem  className="navigationList__item">
                        <RouterLink
                        style={{textDecoration: 'none'}} 
                        to="/signIn"
                        >
                            Logowanie
                        </RouterLink>
                    </MenuItem>
                </MenuList>    
            </nav>
        );
    }
}


export default Nav
