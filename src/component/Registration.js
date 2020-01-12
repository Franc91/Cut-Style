import React, { useState, useEffect } from 'react'
import firebase from '../config/fbConfig'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import SendIcon from '@material-ui/icons/Send';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { 
    Select, 
    MenuItem, 
    InputLabel, 
    FormGroup, 
    Button, 
    TextField} from '@material-ui/core';

const Registration = ({user}) => {

        const [ sexType, setSexType ] = useState([]);
        const [ sex, setSex ] = useState('');
        const [ hairLenght, setHairLenght ] = useState([]);
        const [ lenght, setLenght ] = useState('');
        const [ hairColor, setHairColor ] = useState([]);
        const [ color, setColor] = useState('');
        const [ hairdressersArr, setHairDressersArr] = useState([]);
        const [ hairdresser, setHairDressers ] = useState('');
        const [ addInfo, setAddInfo ] = useState({addInfo:''});
        const db = firebase.firestore();
        const [selectedDate, setSelectedDate] = useState('');

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

        const handleOnChangeSex=({target})=>{
            setSex(prev=>({
                ...prev, 
                sex:target.value}
                ));
        }

        const handleOnChangeColor=({target})=>{
            setColor(prev=>({
                ...prev, 
                color:target.value}
                ));
        }

        const handleOnChangeLenght=({target})=>{
            setLenght(prev=>({
                ...prev, 
                lenght:target.value}
                ));
        }

        const handleOnChangeHairdresser=({target})=>{
            setHairDressers(prev=>({
                ...prev, 
                hairdresser:target.value}));
        }
        
        const handleDateChange = (data)=> {
            setSelectedDate(data);
          };

        const handleOnChangeAddInfo =({target})=>{
            setAddInfo(prev=>({
                ...prev,
                [target.name]: target.value
            }))
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
            // display: 'flex', 
            // flexDirection: 'column', 
            // alignItems:'center',
            // justifyContent: 'center',
            width: '30%',
            margin: '0 auto'
        }
        // const divInnerStyle = {
        //     display: 'flex', 
        //     flexDirection: 'column', 
        //     alignItems:'center',
        //     justifyContent: 'center',
        // }

        const buttonStyle={
            marginTop: '1rem'
        }

        console.log(color,sex,lenght,hairdresser, selectedDate)
        console.log(sex)
        return (
            <div style={divStyle} id='Dashboard'>
                <FormGroup style={formStyle}>
                            <InputLabel id='sex-label'>Wybierz płeć</InputLabel>
                            <Select labelId='sex-label' name='sex' value={sex.sex} onChange={handleOnChangeSex} defaultValue={''}>
                                {sexType.map((el,i)=>(
                                    <MenuItem value={el} name={el} key={i}>{el}</MenuItem>
                                ))}
                            </Select>
                            <InputLabel id='hairLenght-label'>Wybierz długość włosów</InputLabel>
                            <Select lableid='hairLenght-label' name='lenght' value={lenght.lenght} onChange={handleOnChangeLenght}defaultValue={''}>
                                {hairLenght.map((el,i)=>(
                                    <MenuItem value={el} key={i}>{el}</MenuItem>
                                ))}
                            </Select>
                            <InputLabel id='hairColor-label'>Wybierz kolor włosów</InputLabel>
                            <Select labelId='hariColor-label' name='color' value={color.color} onChange={handleOnChangeColor}defaultValue={''}>  
                                {hairColor.map((el,i)=>(
                                    <MenuItem value={el} key={i}>{el}</MenuItem>
                                ))}
                            </Select>
                            <InputLabel id='hairDressers-label'>Wybierz kolor włosów</InputLabel>
                            <Select defaultValue labelId='hairDressers-label' name='hairdresser' value={hairdresser.hairdresser} onChange={handleOnChangeHairdresser}defaultValue={''}>
                                    {hairdressersArr.map((el,i)=>(
                                        <MenuItem value={el} key={i}>{el}</MenuItem>
                                    ))}
                            </Select>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around" direction='column' >
                        <InputLabel id='date-picker-dialog'>Wybierz datę wizyty</InputLabel>
                            <KeyboardDatePicker
                            margin="normal"
                            labelId="date-picker-dialog"
                            id="date-picker-dialog"
                            format="dd/MM/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                        <InputLabel id='time-picker-label'>Wybierz datę wizyty</InputLabel>
                            <KeyboardTimePicker
                            margin="normal"
                            ampm={false}
                            id="time-picker"
                            labelId="time-picker-label"
                            value={selectedDate}
                            onChange={handleDateChange}
                            minutesStep={15}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            />
                        <TextField
                        type="text" 
                        labelId="AddInfo" 
                        name="addInfo"
                        id="addInfo" 
                        value={addInfo} 
                        onChange={handleOnChangeAddInfo}
                        row='5'
                        size='medium'/>
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <InputLabel id='AddInfo'>Dodatkowe informacje</InputLabel>
                    <Button
                    type="submit"
                    style={buttonStyle}
                    variant="contained"
                    color="primary"
                    className='signUpBtn'
                    endIcon={<SendIcon>Zapisz się</SendIcon>}
                    > 
                    Zapisz się
                    </Button>
                </FormGroup>
            </div>
                // <div className='hairLenghtSelect'>
                //     <span>{sexs.sex}</span>
                //     <select value={sexs.sex} onChange={handleOnChange}>
                //         {sexType.map((el,i)=>(
                //             <option value={el} key={i}>{el}</option>
                //         ))}
                //     </select>
                // </div>

                // <div className='hairColorSelect'>
                //     <span>{lenghts.lenght}</span>
                //     <select value={lenghts.lenght} onChange={handleOnChange}>
                //         {hairLenght.map((el,i)=>(
                //             <option value={el} key={i}>{el}</option>
                //         ))}
                //     </select>
                // </div>
                // <div className='hairLenghtSelect'>
                //     <span>{colors.color}</span>
                //     <select value={colors.color} onChange={handleOnChange}>
                //         {hairColor.map((el,i)=>(
                //             <option value={el} key={i}>{el}</option>
                //         ))}
                //     </select>
                // </div>
                // <div className='hairDresserSelect'>
                //     <span>{hairdressers.hairdresser}</span>
                //     <select value={hairdressers.hairdresser} onChange={handleOnChange}>
                //     <option value='Fryzjerzy' ></option>
                //         {hairdressersArr.map((el,i)=>(
                //             <option value={el} key={i}>{el}</option>
                //         ))}
                //     </select>
                // </div>
                // <input type='date'></input>  
                // <input type = 'time'></input>
            // </div>
        )
}

export default Registration