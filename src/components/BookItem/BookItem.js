import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./BookItem.style";

function BookItem({book, onPress}){
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{book.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BookItem;
