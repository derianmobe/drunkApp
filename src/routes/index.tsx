import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Test from './test';

const AppNavigation: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <Test />
    </NavigationContainer>
  );
};

export default AppNavigation;
