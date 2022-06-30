import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Favorites from './pages/Favorites';
import { View } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Router() {

  const HomeStack=()=>{
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="BookDetail" component={BookDetail} options={({route}) => ({
          title: route.params.bookName,
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerTintColor: "#FFA040",
        })}/>
      </Stack.Navigator>
    );
  }

  const FavoriteStack=()=>{
    return (
      <Stack.Navigator>
        <Stack.Screen name="Favorites" component={Favorites} options={{headerShown: false}}/>
        <Stack.Screen name="BookDetail" component={BookDetail} options={({route}) => ({
          title: route.params.bookName,
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerTintColor: "#FFA040",
        })}/>
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "HomeTab") {
              iconName = focused
                ? "book-multiple"
                : "book-multiple-outline";
            } else if (route.name === "FavoritesTab") {
              iconName = focused ? "heart-multiple" : "heart-multiple-outline";
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#fff",
          tabBarActiveBackgroundColor: "#ba68c8",
          tabBarInactiveBackgroundColor: "#ba68c8",
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStack} />
        <Tab.Screen name="FavoritesTab" component={FavoriteStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;