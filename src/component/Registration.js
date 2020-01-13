import React, { useState, useEffect } from 'react'
import firebase from '../config/fbConfig'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import SendIcon from '@material-ui/icons/Send'
import { useHistory } from 'react-router-dom';
import {
  MuiPickersUtilsProvider,
  DateTimePicker
} from '@material-ui/pickers';
import { 
    Select, 
    MenuItem, 
    InputLabel, 
    FormGroup, 
    Button, 
    TextField,
    FormControl} from '@material-ui/core';

const Registration = ({user}) => {

    const history = useHistory();
    const db = firebase.firestore();

    const [ sexType, setSexType ] = useState([]);
    const [ hairLenght, setHairLenght ] = useState([]);;
    const [ hairColor, setHairColor ] = useState([]);
    const [ hairdressersArr, setHairDressersArr] = useState([]);
    const [selectedDate, handleDateChange ] = useState(new Date())
    const [ state, setState ] = useState({
        sex:'',
        lenght:'',
        color:'',
        hairdresser:'',
        addInfo: ''
    })

    useEffect(()=>{

            db.collection('sexType')
            .doc('sexType')
            .get()
            .then(doc =>{
                if (!doc.exists) {
                    console.log('No such document!');
                    } else {
                    setSexType(doc.data().sex)
                    }
            })

            db.collection('hairType')
            .doc('hairColor')
            .get()
            .then(doc =>{
                if (!doc.exists) {
                    console.log('No such document!');
                    } else {
                    setHairColor(doc.data().colors)
                    }
                }
            )

            db.collection('hairType')
            .doc('hairLength')
            .get()
            .then(doc =>{
                if (!doc.exists) {
                    console.log('No such document!');
                    } else {
                    setHairLenght(doc.data().lenght)
                    }
                }
            )

            db.collection('hairDressers')
            .doc('hairDressers')
            .get()
            .then(doc =>{
                if (!doc.exists) {
                    console.log('No such document!');
                    } else {
                    setHairDressersArr(doc.data().hairdresser)
                    }
                }
            )
    },[user])

    const handleOnChange= name => e =>{
        setState ({
            ...state,
            [name]: e.target.value
        })
    }
    
    const handleOnSubmit = (e) =>{
        console.log(user, 'dupa', firebase.auth().currentUser.uid)
        e.preventDefault()
        if(firebase.auth().currentUser !== null){
            db.collection('users')
            .doc(firebase.auth().currentUser.uid)
            .set({regData:{
                    sex: state.sex,
                    hairColor: state.color,
                    hairLenght: state.lenght,
                    hairdresser: state.hairdresser,
                    dateVisit: selectedDate,
                    addInfo: state.addInfo
                    }
                },{merge: true}
            ) 
            .then(()=>{
                history.push('/info')               //historia do zmiany elementów po zalgowaniu taki redirect
                console.log('zapisano')
            })
            .catch(()=>{
                console.log('dupa')
            })
        }

    }

    const divStyle = {
        border: '1px solid red', 
        marginBottom: 10, 
        height:'65vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignContent:'center',
        justifyContent: 'center'
    }
    const formStyle = {
        width: '30%',
        margin: '0 auto'
    }


    const buttonStyle={
        marginTop: '1rem'
    }

    console.log(state.color,state.sex,state.lenght,state.hairdresser, state.addInfo, selectedDate)

    return (
        <div style={divStyle} id='Dashboard'>
            <form onSubmit={handleOnSubmit}>
                <FormGroup style={formStyle} onSubmit={handleOnSubmit}>
                    <FormControl>
                        <InputLabel htmlFor='sex-label'>Wybierz płeć</InputLabel>
                                <Select inputProps={{name:'sex', id:'sex-label' }} value={state.sex} onChange={handleOnChange('sex')}>
                                    {sexType.map((el,i)=>(
                                        <MenuItem value={el} name={el} key={i}>{el}</MenuItem>
                                    ))}
                                </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='hairLenght-label'>Wybierz długość włosów</InputLabel>
                                <Select inputProps={{name:'lenght', id:'hairLenght-label' }} value={state.lenght} onChange={handleOnChange('lenght')}>
                                    {hairLenght.map((el,i)=>(
                                        <MenuItem value={el} key={i}>{el}</MenuItem>
                                    ))}
                                </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='hairColor-label'>Wybierz kolor włosów</InputLabel>
                                <Select inputProps={{name:'color', id:'hairColor-label'}} value={state.color} onChange={handleOnChange('color')}>  
                                    {hairColor.map((el,i)=>(
                                        <MenuItem value={el} key={i}>{el}</MenuItem>
                                    ))}
                                </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='hairDressers-label'>Wybierz kolor włosów</InputLabel>
                                <Select inputProps={{name:'hairdresser', id:'hairDressers-label'}} value={state.hairdresser} onChange={handleOnChange('hairdresser')}>
                                        {hairdressersArr.map((el,i)=>(
                                            <MenuItem value={el} key={i}>{el}</MenuItem>
                                        ))}
                                </Select>
                    </FormControl>     
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around" direction='column' >
                            <DateTimePicker
                                autoOk
                                minutesStep={15}
                                ampm={false}
                                value={selectedDate}
                                onChange={handleDateChange}
                                label="Wybierz datę i godzinę wizyty"
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <TextField
                        id="additionalInfo"
                        name="addInfo"
                        label="Dodatkowe informacje"
                        multiline
                        rowsMax="4"
                        value={state.addInfo}
                        onChange={handleOnChange('addInfo')}
                        />

                    <Button
                    type="submit"
                    style={buttonStyle}
                    variant="contained"
                    color="primary"
                    className='saveDataBtn'
                    endIcon={<SendIcon>Zapisz się</SendIcon>}
                    > 
                    Zapisz się
                    </Button>
                </FormGroup>
            </form>
        </div>
    )
}

export default Registration