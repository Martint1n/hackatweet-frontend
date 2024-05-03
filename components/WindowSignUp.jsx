import styles from "../styles/WindowSignin.module.css";
import Image from "next/image";
import {Button, Modal } from 'antd';
import { useState } from 'react';
import Link from 'next/link';

function WindowSignUp() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstname, setFirstrname] = useState('')   // mise en place d'un etat sur le input firstname pour capter le contenu qu'on ecrit
  const [username, setUsername] = useState('')      // mise en place d'un etat sur le input username pour capter le contenu qu'on ecrit
  const [password, setPassword] = useState('')      // mise en place d'un etat sur le input password pour capter le contenu qu'on ecrit
  const showModal = () => {
    setIsModalOpen(true);
  };

  const [data, setData] = useState({ result: true });    // constante qui premet de creer un etat d'origine a false sur le data.result

  const handleCancel = () => {  // constante qui contient une fonction qui permet de fermer le modal
    setIsModalOpen(false);
  };

  const handleSubmit = () => {                     // permet d'envoyer le contenu des 3 inputs au backend
    console.log(firstname,username,password);

    fetch('http://localhost:3000/users/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },      // envoie du contenu des inputs au back via un fetch post
  body: JSON.stringify({firstname,username,password})

})
  .then(response => response.json())
  .then(data => {
    setData({result: data.result})     // on renvoie le data.result dans la variable data
    console.log(data);
});

  };
                // creation d'un link entourant le button qui permet de nous envoyer sur la page tweet SI le data.result est true sinon nous restons sur le modal
  return (
    <>
      <Button className={styles.buttonSignup} type="primary" onClick={showModal}>
        SignUp
      </Button>
    <Modal title="" footer={null} open={isModalOpen} onCancel={handleCancel} className={styles.WindowSignin}>
                   <Image className={styles.icon} src="/logo.png" alt="logo twitter" height={50} width={50}/>
                <h3 className={styles.h3}>Connect to Hackatweet</h3>
                <input onChange={(e) => setFirstrname (e.target.value)} value={firstname} className={styles.inputName} type="text" placeholder="Firstname" id="signUpFirstname" />
                <input onChange={(e) => setUsername (e.target.value)} value={username} className={styles.inputName} type="text" placeholder="Username" id="signUpUsername" />
                <input onChange={(e) => setPassword(e.target.value)} value={password} className={styles.inputPassword} type="text" placeholder="Password" id="signUpPassword" />
                {data.result ? (
                   <Link href="/home" onClick={() => handleSubmit()} className={styles.buttonSignin}>Sign up</Link>
                ) : ( 
                <button onClick={() => handleSubmit()} className={styles.buttonSignin}>Sign up</button>
                )}
     </Modal>
    </>
  )
}

export default WindowSignUp;
