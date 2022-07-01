import React from "react";
import { ActivityIndicator, FlatList, View, Text } from "react-native";
import Config from "react-native-config";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector,useDispatch } from 'react-redux';

import styles from "./Home.style";
import useFetch from './../../hooks/useFetch';
import BookItem from './../../components/BookItem';

function Home({navigation}){
  const {data,error,loading} = useFetch(`${Config.API_HOME_URL}`,"books");
  const favorites=useSelector(state=>state.favorites);
  const dispatch=useDispatch();

  const keyExtractor=(item)=>{
    return item.isbn13;
  }

  const renderItem=({item})=>{
    let isFavorite=favorites.find((book)=>book.isbn13===item.isbn13);
    return <BookItem book={item} onPress={()=>handlePress(item.isbn13)} isFavorite={!!isFavorite} onFavorite={()=>addFavorite(item)} isHomeItem={true}/>;
  }

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#ededed",
        }}
      />
    );
  }

  const handlePress=(bookId)=>{
    navigation.push("BookDetail",{bookId});
  }

  const addFavorite=(book)=>{
    dispatch({type: "Add_Favorite",payload:{newFavorite:book}});
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
      <Text style={styles.title}>New Books</Text>
      <FlatList overScrollMode="never" keyExtractor={keyExtractor} data={data} renderItem={renderItem} ItemSeparatorComponent={ItemDivider} />
    </View>
  );
};

export default Home;
