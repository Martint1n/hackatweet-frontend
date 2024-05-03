import styles from "../styles/WindowSignin.module.css";
import {Button, Modal } from 'antd';
import { useState } from 'react';
import Image from "next/image"

function WindowSignIn() {
  const [isModalOpen, setIsModalOpen] = useState(false);  // constante qui verifie si le modal est ouvert qui d'origine fermé
  const [username, setUsername] = useState('')            // constante qui correspond a notre input username qui est d'origine vide
  const [password, setPassword] = useState('')            // constante qui correspond a notre input password qui est d'origine vide
  const showModal = () => {                               // constante qui contient une fonction elle meme appele onclick qui permet d'afficher le modal
    console.log('ok')
    setIsModalOpen(true);
  };

  const handleCancel = () => {                            // constante qui contient une fonction qui permet de fermer le modal
    setIsModalOpen(false);
  };
  return (
    <>
    <Button type="primary" onClick={showModal}>          // onclick appele la const showModal
        SignIn
      </Button>        // ci dessous, l'eefet du modal avec le style et la variable handleCancel
    <Modal title="" footer={null} bodyStyle={{'background-color': 'red', 'padding': '0px', 'margin': '0px'}} open={isModalOpen} onCancel={handleCancel} className={styles.WindowSignin}>
            <Image className={styles.icon} src="/logo.png" alt="logo twitter" height={50} width={50}/>
          <h3 className={styles.h3}>Connect to Hackatweet</h3>
          <input value={username} className={styles.inputName} type="text" placeholder="Username" id="signInUsername"></input>
          <input value={username} className={styles.inputPassword}type="text" placeholder="Password" id="signInUsername"></input>
          <button className={styles.buttonSignin}>Sign in</button>
      </Modal>
    </>
  );
}

export default WindowSignIn;
