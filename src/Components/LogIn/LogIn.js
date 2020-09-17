import React, { useState } from 'react';
import { useContext } from 'react';
import {TravelContext} from  "../../App.js"
import { useHistory, useLocation } from 'react-router-dom';
import {initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFBLogin, createUserWithEmailAndPassword, signInWithEmailAndPassword} from  "./logInManger"



function LogIn() {

    const logInStyle={
        textAlign:"center",
        backgroundColor:"#fff",
        height:"80vh",
        margin:"100px", 
        padding:"5px",
        border:"1px solid black",
        wordWrap:"wrap",
        overflow:"hidden",
        borderRadius:"5px"
    };
    const inputStyle={
        marginBottom:"5px",
    }

    initializeLoginFramework();
  
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSignedIn:false,
    name:'',
    email:'',
    photo:'',
    password:'',
  });

const [loggedInUser, setLoggedInUser] = useContext(TravelContext); //4
const history = useHistory();
const location = useLocation();

let { from } = location.state || { from: { pathname: "/" } };
// google sign in
const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
        handleResponse(res, true)
    })
}
// sign out
const signOut = () => {
    handleSignOut()
    .then(res => {
        handleResponse(res, false)
    })
}
// facebook log in
const fBLogin = () => {
    handleFBLogin()
    .then(res => {
        handleResponse(res, true)

    })

}
// redirect function
const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);

        }
}
// email/name/password validation
  const handleBlur = (e) =>{
   
    let isFieldValid = true;
    if(e.target.name === 'name'){
        isFieldValid = /\S+@\S+.\S+/.test(e.target.value)
        
      }
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+.\S+/.test(e.target.value)
      
    }
    if(e.target.name === "password"){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value)
      isFieldValid = isPasswordValid && passwordHasNumber
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
     setUser(newUserInfo)
    }

  }
// submit button
  const handleSubmit = (e)=>{
    console.log(user.email , user.password)
   if (newUser && user.email && user.password){
       createUserWithEmailAndPassword(user.name, user.email, user.password)
       .then(res => {
        handleResponse(res, true)
       })
   }

   if (!newUser && user.email && user.password){
       signInWithEmailAndPassword(user.email, user.password)
       .then(res => {
           console.log(user,res)
        setUser(res);
        handleResponse(res, true)
       })
   }
      e.preventDefault();
  }

 
  return (
    <div style={logInStyle}>
      

      {newUser? "Create new account" : "Log In"}
      <form onSubmit={handleSubmit}>
          {newUser && <input type="text" style={inputStyle} name="name" onBlur={handleBlur} placeholder="your name" required/>}
        <br/>
          <input type="text" name="email" style={inputStyle} onBlur={handleBlur} placeholder="Your Email address" required/>
       <br/>
         <input style={inputStyle} type="password" name="password" onBlur={handleBlur} placeholder="Your password" required/>
       <br/>
         {newUser && <input style={inputStyle} type="text" name="password" onBlur={handleBlur} placeholder="match password" required/>}
       <br/>
          <input className="btn btn-warning" style={inputStyle} type="submit" value={newUser? 'sign up' : 'sign in'}/>
      </form>
      {newUser? <button className="btn btn-outline-secondary" onClick={()=> setNewUser(!newUser)}>Log In</button> : <button className="btn btn-outline-success" onClick={()=> setNewUser(!newUser)}>Create an account</button>}
        <p style={{color:"red"}}>{user.error}</p>
         {loggedInUser.email && <p style={{color:"green"}}>user {newUser ? "created" : "logged in"} successfully</p>}

     
       <button className="btn btn-outline-danger" onClick={googleSignIn}><img width="20px" src="https://i.imgur.com/k9qQDNa.png"/> Sign in</button>
      <br/>
      <br/>
      <button className="btn btn-outline-primary" onClick={fBLogin}><img width="20px" src="https://i.imgur.com/GvYeTRq.png"/> Sign In</button>
    </div>
  );
}

export default LogIn;