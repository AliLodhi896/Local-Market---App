import React, {useRef} from 'react';
import "react-native-gesture-handler";
import {KeyboardAvoidingView, SafeAreaView, Platform} from 'react-native';
import AppNavigationContainer from './src/navigations/NavigationContainer';
import {AuthProvider} from './src/context/Context';
import Colors from './src/constant/Colors';

const App = () => {
  return (
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
