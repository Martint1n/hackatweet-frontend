import styles from "../styles/WindowSignin.module.css";

import Image from "next/image"

function WindowSignin() {
  return (
    <div>
      <div className={styles.WindowSignin}>
        <div className={styles.infocontainer}>
           <Image className={styles.icon} src="/logo.png" alt="logo twitter" height={50} width={50}/>
          <h3 className={styles.h3}>Connect to Hackatweet</h3>
          <input className={styles.inputName} type="text" placeholder="Username" id="signInUsername"></input>
          <input className={styles.inputPassword}type="text" placeholder="Password" id="signInUsername"></input>
          <button className={styles.buttonSignin}>Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default WindowSignin;
