import React, { useState, useEffect } from 'react';
import firebase from '../config/fbConfig'


const Dashboard = ({ user }) => {

    const [ hairColor, setHairColor ] = useState([]);
    const [color, setColor] = useState({
        blond:'',
        brąz:'',
        czarne:'',
        siwe:'',
        rude:'',
    });

    useEffect(()=>{
            const db = firebase.firestore()
            db.collection('hairType')
            .doc('hairColor')
            .get()
            .then(doc =>{
                console.log(doc)
                if (!doc.exists) {
                    console.log('No such document!');
                  } else {
                    setHairColor(doc.data().colors)
                  }
                }
            )
    },[user])

    console.log(hairColor) 

  
    const handleOnChange=({target})=>{
        setColor(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }
    console.log(color)
    return (
        <div style={{border: '1px solid red', marginBottom: 10, height:'65vh'}} id='Dashboard'>
           <select value={color} onChange={handleOnChange}>
               {hairColor.map((el,i)=>(
                   <option key={i}>{el}</option>
               ))}
           </select>
        </div>
    )
}

export default Dashboard
