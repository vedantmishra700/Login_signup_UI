import React from "react";
import Login from "./screens/Login";
import signup from "./screens/signup";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';


const Stack= createStackNavigator();

function App(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login " component={Login} />
      <Stack.Screen name="signup" component={signup} />


    </Stack.Navigator>
  );

}

export default() => {
  return (
    
    <NavigationContainer>
      <App />
    </NavigationContainer>
    )
}


