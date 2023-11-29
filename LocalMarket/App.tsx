import React, {useRef} from 'react';
import "react-native-gesture-handler";
import {KeyboardAvoidingView, SafeAreaView, Platform} from 'react-native';
import AppNavigationContainer from './src/navigations/NavigationContainer';
import {AuthProvider} from './src/context/Context';
import Colors from './src/constant/Colors';
import Toast from 'react-native-toast-message';

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
          <Toast />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </AuthProvider>
  );
};

export default App;
