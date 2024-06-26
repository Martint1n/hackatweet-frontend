import styles from '../styles/Login.module.css';
import Image from "next/image"
import WindowSignUp from './WindowSignUp';
import WindowSignIn from './WindowSignin';

function Login() {
  return (
    <div  className={styles.login}>
        <div className={styles.containerLeft}> 
        </div>
        <div className={styles.containerRight}>
          <div>
            <img className={styles.logo} src="/logo.png" />
            </div>
            <div>
              <h1 className={styles.h1}>See what's<br/> happening</h1>
              <h3 className={styles.h3}>Join Hackatweet today.</h3>
            </div>
            <WindowSignUp />
            <p className={styles.p}>Already have on account?</p>
            <WindowSignIn />
        </div>
    </div>
  );
}

export default Login;
