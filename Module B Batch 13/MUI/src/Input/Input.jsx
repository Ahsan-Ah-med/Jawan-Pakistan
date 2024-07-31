import React from 'react'
// import styles from './Input.module.css'

const Input = ({type,label, className, style})=>{
    return(
        <>
        <label>{label}</label>
        <input type={type} className={className} style={style} />
       
        
        
        </>
    );
};
export default Input