import React from "react";
import { ActivityIndicator, FlatList, View, Text } from "react-native";
import Config from "react-native-config";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./Home.style";
import useFetch from './../../hooks/useFetch';
import BookItem from './../../components/BookItem';

function Home({navigation}){
  const {data,error,loading} = useFetch(`${Config.API_HOME_URL}`,"books");

  const keyExtractor=(item)=>{
    return item.isbn13;
  }

  const renderItem=({item})=>{
    return <BookItem book={item} onPress={()=>handlePress(item.isbn13,item.title)}/>;
  }

  const handlePress=(bookId,bookName)=>{
    navigation.push("BookDetail",{bookId,bookName});
  }

  if(error){
    return (
      <View style={styles.errorContainer}>
        <Icon name="cloud-alert" size={75} color="#ba68c8" />
        <Text style={styles.errorTitle}>Bir hata oluştu-{error}</Text>
      </View>
    );
  }

  if(loading){
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#ba68c8" size={30} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList keyExtractor={keyExtractor} data={data} renderItem={renderItem} />
    </View>
  );
};

export default Home;
