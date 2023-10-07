import React, {useRef} from 'react';
import {Welcome} from './src/screens/Authentication';
import Home from './src/screens/Home';
import Subject from './src/screens/Subject';
import OnBoarding from './src/screens/Authentication/OnBoarding';
import AppNavigationContainer from './src/navigations/NavigationContainer';
import { AuthProvider } from './src/context/Context';

const App = () => {
  return (

    // <OnBoarding/>
    // <Welcome/>
    // <>
    // <Home />
    // </>
    // <Subject/>
    <AuthProvider>
    <AppNavigationContainer/>

    </AuthProvider>
  );
};

export default App;
