import React, { useState, useEffect } from 'react';
import firebase from '../config/fbConfig';
import moment from 'moment';
import 'moment/locale/pl'
const Dashboard = ({user}) => {
    const [ name, setName ] = useState(null);
    const [ surname, setSurname ] = useState(null);
    const [ email, setEmail ] = useState(null)
    const [ regData, setRegData ] = useState({})
    const { addInfo, hairColor, hairLenght, hairdresser, dateVisit } = regData;
    const db = firebase.firestore()

    useEffect(()=>{
        if(user !=null){
            db.collection('users')
            .doc(user.uid)
            .get()
            .then(doc =>{
                console.log(user.uid)
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    setName(doc.data().profileName)
                    setSurname (doc.data().profileSurname)
                    setEmail (doc.data().profileEmail)
                    setRegData (doc.data().regData)
                    }
                }
            )
        }
    },[user])

    console.log(name, surname, regData);
    console.log(regData);

    console.log(hairColor)
    console.log(dateVisit)

    return (
        <div style={{border: '1px solid red', marginBottom: 10, height:'65vh'}} id='Dashboard'>
            <div className='userInfo' >
                Imie: {name},
                Nazwisko: {surname},
                e-mail: {email},
                kolor włosów: {hairColor},
                długość włosów: {hairLenght},
                fryzjerka: {hairdresser},
                data wizyty: {  dateVisit?.seconds && moment.unix(dateVisit.seconds).locale('pl').format("LLLL")},
                Dodatkowe informacje: {addInfo}  
            </div>
        </div>
    )

}

export default Dashboard

