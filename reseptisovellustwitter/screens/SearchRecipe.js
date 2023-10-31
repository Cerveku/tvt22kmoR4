import React from 'react';
import { View, FlatList } from 'react-native';
import RecipeCard from '../components/RecipeCard'; // <-- Lisää tämä

const dummyData = [
  { id: '1', name: 'Pasta', image: 'https://example.com/pasta.jpg' },
  { id: '2', name: 'Pizza', image: 'https://example.com/pizza.jpg' },
  // ... lisää dataa
];

const SearchRecipe = () => {
  const onSelectRecipe = (recipe) => {
    // Logiikka reseptin valitsemiseen (esim. navigointi yksityiskohtiin)
  };

  return (
    <View>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <RecipeCard recipe={item} onSelect={onSelectRecipe} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SearchRecipe;
