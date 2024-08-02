import React, { useState } from 'react'
import Forms from '../component/form/Forms'
import loginImage from "../assets/login.png";

const Login = ({toggle}) => {
    
    
    return (
        <Forms
            title="Sign in"
            image={loginImage}
            bottomText="Create an account"
            main_btn="Sign in"
            agreementText="Remember me"
            socialLogin={true}
            userName={true}
            userEmail={false}
            userPass={true}
            userPassRe={false}
            imageDir={false}
            click={toggle}
            // submitFunc={login}
        />
    )
}

export default Login