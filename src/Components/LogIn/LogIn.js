import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';
import { TravelContext } from '../../App';
import firebaseConfig from './firebaseConfig';



const LogIn = () => {
    if (firebase.apps.length===0) {
        firebase.initializeApp(firebaseConfig);
     }
     const history = useHistory();
     const location = useLocation();  
     const { from } = location.state || { from: { pathname: "/" } };
   
    const [loggedInUser, setLoggedInUser ] = useContext(TravelContext);
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            const {displayName, email} = result.user;
            const googleSignedInUser = {name : displayName, email}
            console.log(googleSignedInUser);
            setLoggedInUser(googleSignedInUser);
            history.replace(from);
          }).catch(error => {
            const errorMessage = error.message;
            const email = error.email;
            console.log(email, errorMessage)  
          })
    }
    
    return (
        <div style={{textAlign: 'center'}}>
            <button onClick={handleGoogleSignIn}>Google sign in</button>
       
        </div>
    );
};

export default LogIn;