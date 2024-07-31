import React from 'react';
import styles from './Form.module.css';
import Input from '../Input/Input'; 


const Form = () => {
  return (
    < >
  
    <div className={styles.main}>
    <div className={styles.form}>
     <Input
        label={"Name"}
        type={"text"}
      />
      <Input
        label={"Email"}
        type={"email"}
      />
      <Input
        label={"Phone Number"}
        type={"number"}
      />
      <Input
        className={styles.messageInput}
        label={"Message"}
        type={"text"}
      />
      
     
      <button>submit</button>
     </div>
    </div>

      {
        // Code for displaying the records can be added here
      }
    </>
  );
};

export default Form;
