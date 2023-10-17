import React, {useRef} from 'react';
import {KeyboardAvoidingView, SafeAreaView, Platform} from 'react-native';
import {Welcome} from './src/screens/Authentication';
import Home from './src/screens/Home';
import Subject from './src/screens/Subject';
import OnBoarding from './src/screens/Authentication/OnBoarding';
import AppNavigationContainer from './src/navigations/NavigationContainer';
import {AuthProvider} from './src/context/Context';
import Colors from './src/constant/Colors';

const App = () => {
  return (
    // <OnBoarding/>
    // <Welcome/>
    // <>
    // <Home />
    // </>
    // <Subject/>
    <AuthProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <SafeAreaView
          style={{flex: 1, backgroundColor: Colors.backgroundColor}}>
          <AppNavigationContainer />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </AuthProvider>
  );
};

export default App;
