import React, { useState, useEffect } from 'react'
import firebase from '../config/fbConfig'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';

const Registration = ({user}) => {

        const [ sexType, setSexType ] = useState([]);
        const [ sex, setSex ] = useState(null);
        const [ hairLenght, setHairLenght ] = useState([]);
        const [ lenght, setLenght ] = useState(null);
        const [ hairColor, setHairColor ] = useState([]);
        const [ color, setColor] = useState(null);
        const [ hairdressersArr, setHairDressersArr] = useState([]);
        const [ hairdresser, setHairDressers ] = useState(null);
        const db = firebase.firestore();
        const [selectedDate, setSelectedDate] = useState(new Date());

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

        const handleOnChange=({target})=>{
            setColor(prev=> ({...prev, [target.name]:target.value}))
            setLenght(prev=>({...prev,[target.name]:target.value}))
            setSex(prev=> ({...prev, [target.name]:target.value}))
            setHairDressers(prev=> ({...prev, [target.name]:target.value}))
        }
        
        const handleDateChange = date => {
            setSelectedDate(date);
          };
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

        console.log(color)
        console.log(sex)
        return (
            <div style={divStyle} id='Dashboard'>
                <FormControl style={formStyle}>
                    {/* <div className='hairLenghtSelect' style={divInnerStyle}> */}
                        <InputLabel id='sex-label'>Wybierz płeć</InputLabel>
                        <Select labelId='sex-label' name='sex' value={sex} onChange={handleOnChange}>
                                <MenuItem value=''></MenuItem>
                            {sexType.map((el,i)=>(
                                <MenuItem value={el} key={i}>{el}</MenuItem>
                            ))}
                        </Select>
                </FormControl>
                    {/* </div> */}
                <FormControl style={formStyle}>
                    {/* <div className='hairColorSelect'style={divInnerStyle}> */}
                        <InputLabel id='hairLenght-label'>Wybierz długość włosów</InputLabel>
                        <Select lableid='hairLenght-label' name='lenght' value={lenght} onChange={handleOnChange}>
                            <MenuItem value=''></MenuItem>
                            {hairLenght.map((el,i)=>(
                                <MenuItem value={el} key={i}>{el}</MenuItem>
                            ))}
                        </Select>
                </FormControl>
                    {/* </div> */}
                <FormControl style={formStyle}>
                    {/* <div className='hairLenghtSelect'> */}
                        <InputLabel id='hairColor-label'>Wybierz kolor włosów</InputLabel>
                        <Select labelId='hariColor-label' name='color' value={color} onChange={handleOnChange}>
                            <MenuItem value=''></MenuItem>  
                            {hairColor.map((el,i)=>(
                                <MenuItem value={el} key={i}>{el}</MenuItem>
                            ))}
                        </Select>
                </FormControl>
                    {/* </div> */}
                <FormControl style={formStyle}>
                    {/* <div className='hairDresserSelect'> */}
                        <InputLabel id='hairDressers-label'>Wybierz kolor włosów</InputLabel>
                        <Select labelId='hairDressers-label' name='hairdresser' value={hairdresser} onChange={handleOnChange}>
                            <MenuItem value=''>Fryzjerzy</MenuItem>
                                {hairdressersArr.map((el,i)=>(
                                    <MenuItem value={el} key={i}>{el}</MenuItem>
                                ))}
                            </Select>
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils} style={formStyle}>
                    <Grid container justify="space-around" direction='column' style={{width:'30%', margin: '0 auto'}}>

                        <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                        <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Time picker"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
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