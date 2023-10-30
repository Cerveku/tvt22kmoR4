import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import AddRecipe from './screens/AddRecipe';
import SearchRecipe from './screens/SearchRecipe';
import RecipeDetails from './screens/RecipeDetails';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AddRecipe" component={AddRecipe} />
        <Stack.Screen name="SearchRecipe" component={SearchRecipe} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
