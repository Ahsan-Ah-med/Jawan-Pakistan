import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./login/login";
import Signup from "./signup/signup";
import './App.css'


const App = ()=>{

const [action,setaction] = useState()

let toogle = ()=>{
   setaction(!action)
}



   return(
    <>
{
   action ? <Signup clickFunc={toogle}/> : <Login clickFunc={toogle}/>
}


    </>
 )   
    
}


export default App;