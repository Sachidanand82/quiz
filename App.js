import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Quiz from './components/Quiz';
import Card from './components/Card';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Quiz">
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Card" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
