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
    return <BookItem book={item} onPress={()=>handlePress(item.isbn13)} isFavorite={true} onFavorite={()=>removeFavorite(item.isbn13)} isHomeItem={false}/>;
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

  const removeFavorite=(bookId)=>{
    dispatch({type: "Remove_Favorite",payload:{removeFavoriteId:bookId}});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList overScrollMode="never" keyExtractor={keyExtractor} data={favorites} renderItem={renderItem} ItemSeparatorComponent={ItemDivider} />
    </View>
  );
};

export default Favorites;
