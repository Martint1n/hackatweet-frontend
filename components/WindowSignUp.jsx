import styles from "../styles/WindowSignin.module.css";
import Image from "next/image";
import {Button, Modal } from 'antd';
import { useState } from 'react';

function WindowSignin() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('')
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        SignUp
      </Button>
    <Modal title="" footer={null} bodyStyle={{'background-color': 'red', 'padding': '0px', 'margin': '0px'}} open={isModalOpen} onCancel={handleCancel} className={styles.WindowSignin}>
                <Image className={styles.icon} src="/logo.png" alt="logo twitter" height={50} width={50}/>
                <h3 className={styles.h3}>Connect to Hackatweet</h3>
                <input value={username} className={styles.inputName} type="text" placeholder="Firstname" id="signInFirstname" />
                <input value={username} className={styles.inputName} type="text" placeholder="Username" id="signInUsername" />
                <input className={styles.inputPassword}type="text" placeholder="Password" id="signInUsername" />
                <button className={styles.buttonSignin}>Sign up</button>
    </Modal>
    </>
  );



  return (
    <div>
      
    </div>
  );
}

export default WindowSignin;
