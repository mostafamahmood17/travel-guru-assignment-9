import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';

export const initializeLoginFramework = () => {
    if (firebase.apps.length===0) {
        firebase.initializeApp(firebaseConfig);
     }
    }
// google Sign In
     export const handleGoogleSignIn = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
        .then(res => {
          const {displayName, email} = res.user;
          const signedInUser = {
            isSignedIn:true,
            name:displayName,
            email:email,
            success:true
          }
          return signedInUser;
        
        })
        .catch(err => {
          console.log(err);
          console.log(err.massage);
    
        })
      }
// facebook sign in
export const handleFBLogin = () =>{
        const fbProvider = new firebase.auth.FacebookAuthProvider();
     return firebase.auth().signInWithPopup(fbProvider)
      .then(result => {

        const user = result.user;
        user.success = true;
        user.name = result.user.displayName;
        // user.email = result.user.email;
        console.log(result)
        
        
        
        return user;
      })
     
      .catch(error => {
        const errorMessage = error.message;
        const email = error.email;
        console.log(email)
        console.log(errorMessage)
      });
    }
// sign out
export const handleSignOut = ()=>{
       return firebase.auth().signOut()
        .then(res=> {
          const signOutUser ={
            isSignedIn:false,
            name:'',
            email:'',
            photo:'',
            password:"",
            error:"",
            success: false
          }
          return signOutUser;
        })
        .catch(err => console.log(err))
      }
//  new user sign in function
      export const createUserWithEmailAndPassword = (name, email, password) => {
       return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
   const newUserInfo = res.user;
         newUserInfo.error = "";
         newUserInfo.success =true;
         newUserInfo.name = name;
         updateUserName(name) ;
         return newUserInfo;
    
        })
        .catch(error => {
    const newUserInfo = {}
          newUserInfo.success =false;
          newUserInfo.error=error.message
          return newUserInfo;
        });
      }
// log in function
      export const signInWithEmailAndPassword = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res=>{
   const newUserInfo=res.user;
         newUserInfo.error = "";
         newUserInfo.success =true;
         newUserInfo.name = res.user.displayName;
         return newUserInfo;
         
        })
         .catch(error=> {
    const newUserInfo = {}
          newUserInfo.success =false;
          newUserInfo.error=error.message
          return newUserInfo;
         
        });
      }
// update name
      const updateUserName = name =>{
        console.log(name)

        const user = firebase.auth().currentUser;
    
        user.updateProfile({
          displayName: name,
        }).then(()=> {
          console.log('user name updated successfully')
        }).catch(error => {
          console.log(error)

        });
      }



