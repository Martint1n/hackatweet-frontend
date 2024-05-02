import styles from '../styles/Login.module.css';

import Image from "next/image"

function Login() {
  return (
    <div  className={styles.login}>
        <div className={styles.containerLeft}> 
        </div>
        <div className={styles.containerRight}>
          <div>
            <img src="/logo.png" />
            </div>
                <div>
                <h1 className={styles.h1}>See what's<br/> happening</h1>
                <h3 className={styles.h3}>Join Hackatweet today.</h3>
                </div>
                     <button className={styles.button1}>Sign up</button>
                <p className={styles.p}>Already have on account?</p>
                    <button  className={styles.button2}>Sign in</button>
        </div>
    </div>
  );
}

export default Login;
