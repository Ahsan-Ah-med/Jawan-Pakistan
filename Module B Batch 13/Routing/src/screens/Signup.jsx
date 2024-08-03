import React, { useState } from 'react'
import signupImage from "../assets/singup.avif";
import Forms from '../component/form/Forms';

const Signup = ({ toggle }) => {
    // console.log(signData)
    return (
        <Forms
            title="Sign up"
            image={signupImage}
            bottomText="I am already member"
            main_btn="Register"
            agreementText="I agree all statements in Terms of service"
            socialLogin={false}
            userName={true}
            userEmail={true}
            userPass={true}
            userPassRe={false}
            imageDir={true}
            click={toggle}
        // submitFunc={signup}
        />
    )
}

export default Signup