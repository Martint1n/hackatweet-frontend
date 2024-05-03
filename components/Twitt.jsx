import styles from '../styles/Twitt.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Twitt(props) {
    //props.usename, props.twitt, props.date, props.avatar, props.firstname, props.likedBy
    
    return (
    <div class={styles.twitt}>
        <div class={styles.header}>
            <Image src={props.avatar} height={50} width={50}/>
            <div class={styles.white}>{props.firstname}</div>
            <div class={styles.grey}>@{props.username} • </div>
            <div class={styles.grey}>{props.date}</div>
        </div>
        <p class={styles.white}>{props.twitt}</p>
        <FontAwesomeIcon icon={faHeart} /><span class={styles.white}>{props.likedBy.length}</span>
    </div>
    );
}

export default Twitt;