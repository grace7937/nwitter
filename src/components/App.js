import { useEffect, useState } from 'react';
import AppRouter from './Router';
import { authService } from '../fbase';

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });

  }, []);


  return (
    <>
      {
      init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : 'Initializing..'
      }

      {/* <footet> &copy; {new Date().getFullYear()} Nwitter</footet> */}
    </>
  );
}

export default App;
