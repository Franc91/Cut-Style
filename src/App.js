import React, { Component } from 'react';
import Dashboard from './component/Dashboard';
import Header from './component/Header';
import Footer from './component/Footer';
import Registration from './component/Registration'
import HomePage from './component/HomePage'
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import firebase from "./config/fbConfig";
import { 
  HashRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom';

class App extends Component {

  state = { user: null }

 componentDidMount() {
    this.authListener()
  }
  
  authListener=()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      console.log(user)
        if(user){
            this.setState({user})
        }else{
          this.setState({user:null})
        }
    });
  }

  setUser = (user) => {
    this.setState({ user })
  }

  render() { 
    const { user } = this.state
    return ( 
      <div className="App">
        <Router>
          <Header user={user} setUser={this.setUser} /> {/* props jak chce przekazywac propsa dalej*/}
          <Switch>
            <Route exact path="/" render={props => <HomePage user={user} {...props} />} />
            <Route path="/info" render={props => <Dashboard user={user} {...props} />} />   {/* render props jak chce przekazywac propsa dalej*/}
            <Route path="/registration" render={props => <Registration user={user} {...props} />} />
            <Route path="/signup"render={props => <SignUp setUser={this.setUser} {...props} />}/> 
            <Route path="/signin" render={props => <SignIn setUser={this.setUser} {...props} />}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
     );
  }
}
 
export default App;