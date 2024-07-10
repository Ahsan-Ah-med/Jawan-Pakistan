import React from "react";
import emailIcon from "../assets/email.png";
import lock1Icon from "../assets/lock (1).png";
import lockIcon from "../assets/lock.png";
import userIcon from "../assets/user.png";
import faceIcon from "../assets/facebook.png";
import googleIcon from "../assets/google.png";
import twiIcon from "../assets/twitter.png";
import styles from "./Login.module.css";

const Login = ({
  title,
  image,
  bottomText,
  main_btn,
  agreementText,
  socialLogin,
  userName,
  userEmail,
  userPass,
  userPassRe,
  imageDir,
  click,
}) => {
  return (
    <div
      className={`${styles.container} ${imageDir && styles.containerReverse}`}
    >
      <div className={styles.form_div}>
        <div className={styles.heading}>
          <p>{title}</p>
        </div>
        <div className={styles.form}>
          {userName && (
            <div className={styles.username}>
              <div className={styles.icon}>
                <img src={userIcon} />
              </div>
              <input
                type="text"
                placeholder="John Doe"
                name="username"
                id="username"
              />
            </div>
          )}
          {userEmail && (
            <div className={styles.username}>
              <div className={styles.icon}>
                <img src={emailIcon} />
              </div>
              <input
                type="email"
                placeholder="JohnDoe@example"
                name="email"
                id="email"
              />
            </div>
          )}
          {userPass && (
            <div className={styles.password}>
              <div className={styles.icon}>
                <img src={lockIcon} />
              </div>
              <input
                type="text"
                placeholder="Password"
                name="password"
                id="password"
              />
            </div>
          )}
          {userPassRe && (
            <div className={styles.password}>
              <div className={styles.icon}>
                <img src={lock1Icon} />
              </div>
              <input
                type="text"
                placeholder="Confirm Password"
                name="confirm_password"
                id="confirm_password"
              />
            </div>
          )}
          <div className={styles.rem}>
            <input type="checkbox" className="remember" id="remem" />
            <label for="remem">{agreementText}</label>
          </div>
          <div className={styles.signin}>
            <button>{main_btn}</button>
          </div>
        </div>
        {socialLogin && (
          <div className={styles.footer}>
            <p>Or login with</p>
            <div className={styles.socialLogin}>
              <img src={faceIcon} />
              <img src={twiIcon} />
              <img src={googleIcon} />
            </div>
          </div>
        )}
      </div>
      <div className={styles.image_div}>
        <img src={image} />
        <div className={styles.actionBtn}>
          <button onClick={click}>{bottomText}</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
