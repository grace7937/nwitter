import { useEffect, useState } from 'react';
import AppRouter from './Router';
import { authService } from '../fbase';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setUserobj] =useState(null);

   
  useEffect(()=> {

    authService.onAuthStateChanged((user) => {

      if(user) {
        setIsLoggedIn(true);
        setUserobj(user);
      }else {
        setIsLoggedIn(false);
      }

      setInit(true)
    });


  }, []);


  return (
    <>
      {
      init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : 'Initializing..'
      }

      <footet> &copy; {new Date().getFullYear()} Nwitter</footet>
    </>
  );
}

export default App;
