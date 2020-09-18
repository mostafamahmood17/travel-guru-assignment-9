import React, { useState } from 'react';
import { useContext } from 'react';
import { TravelContext } from "../../App.js"
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFBLogin, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./logInManger"

function LogIn() {

  const logInStyle = {
    textAlign: "center",
    backgroundColor: "#fff",
    height: "500px",
    margin: "100px",
    padding: "10px",
    border: "1px solid black",
    wordWrap: "wrap",
    overflow: "hidden",
    borderRadius: "5px"
  };
  const inputStyle = {
    marginBottom: "5px",
  }

  initializeLoginFramework();

  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    password: '',
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
    if (redirect) {
      history.replace(from);

    }
  }
  // email/name/password validation
  const handleBlur = (e) => {

    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+.\S+/.test(e.target.value)
      !isFieldValid && alert("format = demo@example.com")

    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber
      !isFieldValid && alert("Password should be 6 character and one number")
    }
   
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo)
    }
  }
  // submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true)
        })
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          setUser(res);
          handleResponse(res, true)
        })
    }
    
  }
  


  return (
    // log in / sign in page
    <div style={logInStyle}>

      {newUser ? <h2>Create new account</h2> : <h2>Log In</h2>}
      <form onSubmit={handleSubmit}>
        {newUser && <input minlength="1" type="text" style={inputStyle} name="name" onBlur={handleBlur} placeholder="your name" required />}
        <br />
        <input type="text" name="email" style={inputStyle} onBlur={handleBlur} placeholder="Your Email address" required />
        <br />
        <input style={inputStyle} type="password" name="password" onBlur={handleBlur} placeholder="Your password" required />
        <br />
       <br/>
        <input className="btn btn-outline-primary mt-1" style={inputStyle} type="submit" value={newUser ? 'sign up' : 'sign in'} />
        <br />
      </form>
      {newUser ? <button className="btn btn-outline-secondary mt-2" onClick={() => setNewUser(!newUser)}>Log In</button> : <button className="btn btn-outline-success mt-2" onClick={() => setNewUser(!newUser)}>Create an account</button>}
      <br />
      {loggedInUser.email && <p style={{ color: "green" }}>user {newUser ? "created" : "logged in"} successfully</p>}
      <br />
      <button className="btn btn-outline-danger" onClick={googleSignIn}><img width="20px" height="20px" src="https://i.imgur.com/k9qQDNa.png"  alt=""/> Sign in</button>
      <br />
      <br />
      <button className="btn btn-outline-primary" onClick={fBLogin}><img width="20px" height="20px" src="https://i.imgur.com/GvYeTRq.png" alt=""/> Sign In</button>
    </div>
  );
}

export default LogIn;