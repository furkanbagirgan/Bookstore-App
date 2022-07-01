import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Favorites from './pages/Favorites';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Router() {
  const Tabs=()=>{
    return (
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
                iconName = focused ? "bookmark-multiple" : "bookmark-multiple-outline";
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
          <Tab.Screen name="HomeTab" component={Home} />
          <Tab.Screen name="FavoritesTab" component={Favorites} />
        </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
        <Stack.Screen name="BookDetail" component={BookDetail} options={{
          title: "Book Detail",
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerTintColor: "#ba68c8",
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;