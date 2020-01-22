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
        <div id='userInfo' className='userInfo container divStyle'>
            <div className='profileCard' style={{borderRadius: '2rem', width:'50%'}}>
            <h1>Informacje o użytkowniku:</h1>
            <h2>Imie i nazwisko: {name} {surname}</h2>
            <h2>e-mail: {email}</h2>
            <h2>kolor włosów: {hairColor}</h2>
            <h2>długość włosów: {hairLenght}</h2>
            </div>
            <div>
            <h1>Informacje o umówionej wizycie</h1>
            <h2>fryzjerka: {hairdresser}</h2>
            <h2>data wizyty: {  dateVisit?.seconds && moment.unix(dateVisit.seconds).locale('pl').format("LLLL")}</h2>
            <h2>Informacje dotyczace fryzury:{addInfo}</h2> 
            </div>
        </div>
    )

}

export default Dashboard

