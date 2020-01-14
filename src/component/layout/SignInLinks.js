import React, { useEffect, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { MenuList, MenuItem, Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import firebase from '../../config/fbConfig'

const SignInLinks = ({user, setUser})=> {
    const [name, setName] = useState(null);
    const [surname, setSurname] = useState(null);
    const history = useHistory();
    const uid = user.uid;
    const handleOnClick = ()=>{
        firebase.default.auth().signOut()
        .then(()=>{
            setUser(null)
            history.push('/')
            console.log('wylogowano')
        })
    }
    const btnStyle={
        fontSize: '2rem',
        color: '#393D40'

    }
    const linkStyle = {

        color:'#022840', 
        textDecoration:'none', 
        fontSize: '2rem',
        color: '#393D40'
    }

    useEffect(()=>{
        if(uid){
            const db = firebase.firestore()
            // const profile = 
            db.collection('users')
            .doc(uid)
            .get()
            .then(doc =>{
                console.log(doc, uid)
                if (!doc.exists) {
                    console.log('No such document!');
                  } else {
                    setName(doc.data().profileName)
                    setSurname (doc.data().profileSurname)
                  }
                }
            )
        }
    },[user])

    

    return( 
            <MenuList className='navigation' style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                <MenuItem  style={btnStyle} className="navigationList__item--Info">
                    <Link 
                    style={linkStyle}
                    to="/info"
                    >
                        Informacje
                    </Link>
                </MenuItem>
                <MenuItem  style={btnStyle} className="navigationList__item--registration">
                    <Link 
                    style={linkStyle}
                    to="/registration"
                    >
                        Zapisy
                    </Link>
                </MenuItem >
                <MenuItem style={btnStyle} className="navigationList__item--signOut" onClick={handleOnClick}>
                    Wyloguj
                </MenuItem >
                    <Avatar style={{fontSize: '2rem', backgroundColor:'#393D40'}}alt= {name} src='./a' />
                </MenuList>
    );
}
  
export default SignInLinks
