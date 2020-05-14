/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import IntroScreenContainer from './src/IntroScreenContainer'

const App: () => React$Node = () => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
    return () => {
      clearTimeout(timeOut);
    };
  });
  
  return (
    <>
      <IntroScreenContainer/>
    </>
  );
};

export default App;
