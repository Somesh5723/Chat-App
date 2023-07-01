import React, { useState } from 'react';

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db , auth , storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate , Link } from 'react-router-dom';
import addAvatar from '../img/addAvatar.png'

const Register = ()=> {

  const [err,setErr] = useState(false);
  const navigate = useNavigate();
  // const [ selectedFile , setSelectedFile ] = useState(null);

  // const handleFileChange = (e)=>{
  //   setSelectedFile(e.target[3].files[0]);
  //   console.log(selectedFile);
  // }

  // HANDLING REGISTRATION BUTTON
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    // console.log(displayName);
    // console.log(email);
    // console.log(password);
    

  
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const storageRef = ref(storage, `${displayName}_${Date.now()}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on( 
      
      (error) => {
        // Handle unsuccessful uploads
        setErr(true);
      }, 

      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(storageRef).then( async (downloadURL) => {
          await updateProfile(res.user,{
            displayName,
            photoURL : downloadURL,
          });

          await setDoc(doc(db, "users" , res.user.uid),{
            uid: res.user.uid,
            displayName,
            email,
            photoURL : downloadURL,
          });

          // after registeration  navigating to home page
          await setDoc(doc(db, "userChats", res.user.uid),{});
          navigate("/");
        });
      }
    );
  } catch (err) {
      setErr(err.message);
      console.log(err)
  }
    
    
  };

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Somesh's Chat-App</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type={"text"} placeholder='Name' />
                <input type={"email"} placeholder='E-mail'/>
                <input type={"password"} placeholder='Password'/>
                <input style={{display:"none"}} type={"file"} id='file' />
                {/* onChange={handleFileChange} */}
                <label htmlFor="file">
                    <img src={addAvatar}  alt="" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign up!</button>
                { err && <span>Something went wrong..!!</span>}
            </form>
            <p>Already Registered? <Link to="/login">Login</Link></p>
        </div>
      
    </div>
  )
};

export default Register;

