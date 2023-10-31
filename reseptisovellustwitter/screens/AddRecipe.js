import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddRecipe = () => {
  return (
    <View>
      <Text>Recipe Name:</Text>
      <TextInput placeholder="Name" />
      <Text>Ingredients:</Text>
      <TextInput placeholder="Ingredients" />
      <Text>Instructions:</Text>
      <TextInput placeholder="Instructions" />
      <Button title="Add Recipe" onPress={() => { /* Add logic here */ }} />
    </View>
  );
};

export default AddRecipe;
