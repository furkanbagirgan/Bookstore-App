import React from "react";
import { ActivityIndicator, FlatList, View, Text } from "react-native";
import { useSelector,useDispatch } from 'react-redux';

import styles from "./Favorites.style";
import BookItem from './../../components/BookItem';

function Favorites({navigation}){
  const favorites=useSelector(state=>state.favorites);
  const dispatch=useDispatch();

  const keyExtractor=(item)=>{
    return item.isbn13;
  }

  const renderItem=({item})=>{
    return <BookItem book={item} onPress={()=>handlePress(item.isbn13,item.title)} isFavorite={true} onFavorite={()=>removeFavorite(item.isbn13)}/>;
  }

  const handlePress=(bookId,bookName)=>{
    navigation.push("BookDetail",{bookId,bookName});
  }

  const removeFavorite=(bookId)=>{
    dispatch({type: "Remove_Favorite",payload:{removeFavoriteId:bookId}});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList keyExtractor={keyExtractor} data={favorites} renderItem={renderItem} />
    </View>
  );
};

export default Favorites;
