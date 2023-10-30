import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Email:</Text>
      <TextInput placeholder="Email" />
      <Text>Password:</Text>
      <TextInput placeholder="Password" secureTextEntry={true} />
      <Button title="Login" onPress={() => navigation.navigate('SearchRecipe')} />
      <Button title="Register" onPress={() => { /* Register logic here */ }} />
    </View>
  );
};

export default Login;
