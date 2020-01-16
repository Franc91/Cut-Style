import React, { useEffect, useState } from 'react'
import firebase from '../config/fbConfig'
import UnLoggedPage from './homePage/UnLoggedPage';

const HomePage = ({user}) => {
    const [name, setName] = useState(null);

    useEffect(()=>{
        if(user != null){
            const db = firebase.firestore()
            // const profile = 
            db.collection('users')
            .doc(user.uid)
            .get()
            .then(doc =>{
                if (!doc.exists) {
                    console.log('No such document!');
                  } else {
                    setName(doc.data().profileName)
                  }
                }
            )
        }
    },[user])
        return (
            <div className='homePage divStyle' id='homePage'>
                {
                    user 
                    ?<div className='logHomePage'>
                            <h1> Witaj !</h1>
                            <h2>W celu dokonania rejestracji należy kliknąć w zakładkę Zapisy</h2>
                        </div> 
                    :<div className='unlogHomePage'> 
                            {/* <h1>Witaj nieznajomy!</h1>
                            <h2></h2>
                            <h2>Skorzystać z appki mogą wyłącznie posiadacze konta. W celu jego stworzenia należy dokonać rejestracji. </h2> */}
                            <UnLoggedPage/>
                            
                    </div> 
                }
            </div>
        )
    }

export default HomePage
