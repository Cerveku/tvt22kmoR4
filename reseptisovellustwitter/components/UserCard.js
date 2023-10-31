import React from 'react';
import { View, Text } from 'react-native';

const UserCard = ({ user }) => {
  return (
    <View>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </View>
  );
};

export default UserCard;
