import 'react-native-gesture-handler';
import React, { Component } from "react";
import MyTabs from './components/Home';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;