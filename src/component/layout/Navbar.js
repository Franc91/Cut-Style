import React, { Component } from 'react';
import SignOutLinks from './SignOutLinks';
import SignInLinks from './SignInLinks';
import firebase from "../../config/fbConfig";

class Navbar extends Component{

    state ={ user: null}
  
    componentDidUpdate() {
        this.authListener();

    }
  
    authListener=()=>{
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user})

            }else{
                this.setState({user:null})
            }
        });
    }


    // get divStyle (){
    //     this.return({
    //         display: 'flex',
    //         flexDirection: 'row',
    //         alignItem: 'center'
    //     })
    // }
    render(){
        return ( 
            <nav className="navigation__nav" style={{border: '1px solid red',  margin: '1rem,0,1rem,1rem', height: '5vh', display:'flex', alignItems:'center', justifyContent: "space-around" }}>
                {
                   this.state.user ?  <SignInLinks /> : <SignOutLinks/>
                } 
                 {/* <SignOutLinks/>
                 <SignInLinks /> */}
            </nav>    
         );
    }

}

 
export default Navbar;