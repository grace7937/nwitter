import {authService} from '../fbase';
import {useHistory} from 'react-router-dom';
import { useEffect } from 'react';


const Profile = () => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push('/'); 
    };
    const getMyNweets = async() =>
    useEffect(() =>{
        getMyNweets();
    })

    return (
        <>
        <button onClick = {onLogOutClick}>Log Out</button>
        </>

    );
}

export default Profile;
