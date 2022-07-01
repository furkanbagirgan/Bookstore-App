import React from "react";
import { View, Text } from "react-native";

import styles from "./BookDetail.style";

function BookDetail({route}){
  const {bookId,bookName}=route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bookId+bookName}</Text>
    </View>
  );
};

export default BookDetail;
