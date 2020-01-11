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
    console.log(name)
    console.log(surname)

    return (
            <MenuList className='navigation' style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                <MenuItem  className="navigationList__item--Info">
                    <Link 
                    to="/info"
                    >
                        Informacje
                    </Link>
                </MenuItem>
                <MenuItem  className="navigationList__item--registration">
                    <Link 
                    to="/registration"
                    >
                        Zapisy
                    </Link>
                </MenuItem >
                <MenuItem className="navigationList__item--signOut" onClick={handleOnClick}>
                    Wyloguj
                </MenuItem>
                    <Avatar className='orange'>{name}</Avatar> 
                </MenuList>
    );
}
  
export default SignInLinks
