import { Button } from '@ui';
import React from 'react';
import Test from '@activities/Test';
import { createStackNavigator } from '@react-navigation/stack';
import { testRoutes } from '@common';

const Stack = createStackNavigator();

const AuthNavigation: React.FC<{}> = () => {
  return (
    <Stack.Navigator initialRouteName={testRoutes.TEST}>
      <Stack.Screen
        name={testRoutes.TEST}
        component={Test}
        options={{
          title: 'HEADER',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerRight: () => <Button label="Right" link color="#fff" />,
          headerLeft: () => <Button label="Left" link color="#fff" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
