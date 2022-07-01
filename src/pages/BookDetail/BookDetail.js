import React from "react";
import { View, Text, ActivityIndicator, Image, ScrollView, Linking } from "react-native";
import Config from "react-native-config";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./BookDetail.style";
import useFetch from './../../hooks/useFetch';
import Button from './../../components/Button';

function BookDetail({route}){
  const {bookId}=route.params;
  const {data,error,loading}=useFetch(`${Config.API_DETAIL_URL}${bookId}`,"detail");

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
    <ScrollView contentContainerStyle={styles.container} bounces={false} overScrollMode="never">
      <View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri:data.image}}/>
          <View style={styles.imageBottom}></View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.author}>Publisher: {data.publisher}</Text>
          <Text style={styles.author}>Pages: {data.pages}</Text>
          <Text style={styles.author}>Authors: {data.authors}</Text>
          <Text style={styles.desc}>Description: {data.desc}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceTitle}>Total Price:</Text>
          <Text style={styles.price}>{data.price}</Text>
        </View>
        <Button title="Buy Now" onPress={()=>Linking.openURL(data.url)} iconName="link-variant" iconSize={25} iconColor="#fff" />
      </View>
    </ScrollView>
  );
};

export default BookDetail;
