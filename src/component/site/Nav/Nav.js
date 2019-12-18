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

class Nav extends Component {
    render() {
        return (
            <div className="navigation" style={{border: '1px solid red', margin: 10}}>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link">O Nas</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Cennik</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Kontakt</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Rejestracja</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Logowanie</a></li>
                    </ul>
            </nav>
        </div>
        );
    }
}


export default Nav
