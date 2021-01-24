import { useEffect, useState } from 'react';
import AppRouter from './Router';
import { authService } from '../fbase';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

   
  useEffect(()=> {

    authService.onAuthStateChanged((user) => {

      if(user) {
        setIsLoggedIn(true);
      }else {
        setIsLoggedIn(false);
      }
      
      setInit(true)
    });


  }, []);


  return (
    <>
      {
      init ? <AppRouter isLoggedIn={isLoggedIn} /> : 'Initializing..'
      }

      <footet> &copy; {new Date().getFullYear()} Nwitter</footet>
    </>
  );
}

export default App;
