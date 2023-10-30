import React from 'react';
import { View, Text } from 'react-native';

const Rating = ({ rating }) => {
  return (
    <View>
      <Text>{'⭐'.repeat(rating)}</Text>
    </View>
  );
};

export default Rating;
