import Twitt from '../components/Twitt';

function hashtag() {

    const dataTestTwitt = {
        avatar: '/avatar.jpeg',
        username: 'Cèdre',
        firstname: 'Cédric',
        date: '1 sept',
        like: 2,
        twitt: 'le twitt de malade qui va venir soonTM'
    }
    return <Twitt {...dataTestTwitt} />;
}

export default hashtag;