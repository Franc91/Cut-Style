import React from 'react';
import firebase from '../config/fbConfig'


const Dashboard = ({user}) => {

    // const [ name, setName ] = useState(null);
    // const [ surname, setSurname ] = useState(null);
    // const uid = user.uid
    // const db = firebase.firestore()

    // useEffect(()=>{

    //     if(uid){
    //         db.collection('users')
    //         .doc(uid)
    //         .get()
    //         .then(doc =>{
    //             // console.log(doc, uid)
    //             if (!doc.exists) {
    //                 console.log('No such document!');
    //               } else {
    //                 setName(doc.data().profileName)
    //                 setSurname (doc.data().profileSurname)
    //               }
    //             }
    //         )
    //     }
    // },[])
    // console.log(name)

    return (
        <div style={{border: '1px solid red', marginBottom: 10, height:'65vh'}} id='Dashboard'>
            <div className='userInfo' >
                {/* `Imie: ${profileName} Nazwisko: ${profilSurname}` */}

                info

            </div>
        </div>
    )
}

export default Dashboard
