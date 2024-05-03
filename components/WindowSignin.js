import styles from "../styles/WindowSignin.module.css";
import {Button, Modal } from 'antd';
import { useState } from 'react';
import Image from "next/image"

function WindowSignIn() {
  const [isModalOpen, setIsModalOpen] = useState(false);  // constante qui verifie si le modal est ouvert qui d'origine fermé
  const [username, setUsername] = useState('')            // mise en place d'un etat sur le input username pour capter le contenu qu'on ecrit
  const [password, setPassword] = useState('')            // mise en place d'un etat sur le input password pour capter le contenu qu'on ecrit
  const showModal = () => {                               // constante qui contient une fonction elle meme appele onclick qui permet d'afficher le modal
    console.log('ok')
    setIsModalOpen(true);
  };

  const handleCancel = () => {                            // constante qui contient une fonction qui permet de fermer le modal
    setIsModalOpen(false);
  };

  const handleSubmit = () => {                     // permet d'envoyer le contenu des 3 inputs au backend
    console.log(username,password);

    fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username,password})
    
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
    });
  }

  return (
    <>
    <Button type="primary" onClick={showModal}>          
        SignIn
      </Button>        // ci dessous, l'eefet du modal avec le style et la variable handleCancel
    <Modal title="" footer={null} bodyStyle={{'background-color': 'red', 'padding': '0px', 'margin': '0px'}} open={isModalOpen} onCancel={handleCancel} className={styles.WindowSignin}>
            <Image className={styles.icon} src="/logo.png" alt="logo twitter" height={50} width={50}/>
          <h3 className={styles.h3}>Connect to Hackatweet</h3>
          <input onChange={(e) => setUsername (e.target.value)} value={username} className={styles.inputName} type="text" placeholder="Username" id="signInUsername"></input>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className={styles.inputPassword}type="text" placeholder="Password" id="signInPassword"></input>
          <button onClick={() => handleSubmit()} className={styles.buttonSignin}>Sign in</button>
      </Modal>
    </>
  );

}
export default WindowSignIn;
