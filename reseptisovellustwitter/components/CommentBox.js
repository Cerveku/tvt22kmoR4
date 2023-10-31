import React from 'react';
import { View, Text } from 'react-native';

const CommentBox = ({ comment }) => {
  return (
    <View>
      <Text>{comment.user}</Text>
      <Text>{comment.text}</Text>
    </View>
  );
};

export default CommentBox;
