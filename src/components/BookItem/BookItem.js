import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./BookItem.style";

function BookItem({book, onPress, isFavorite, onFavorite}){
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:book.image}}/>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.price}>{book.price}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name={isFavorite ? "heart" : "heart-outline"} size={23} color={isFavorite ? "#ba68c8" : "#000"} onPress={onFavorite} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BookItem;
