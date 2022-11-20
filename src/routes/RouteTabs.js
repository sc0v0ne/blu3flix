
import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,

  } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from '../screens/Settings'
import Movies from '../screens/Movies'
import Favorites from '../screens/Favorites'
import Tv from '../screens/Tv'

const Tab = createBottomTabNavigator();

export default function RouteTabs() {

  return (
    <Tab.Navigator    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Movies') {
            iconName = focused
              ? 'play-outline'
              : 'play-outline';
          } else if (route.name === 'Tv') {
            iconName = focused ? 'tv-outline' : 'tv-outline';
          }else if (route.name === 'Favorites') {
            iconName = focused ? 'heart-outline' : 'heart-outline';
          }else if (route.name === 'Settings') {
            iconName = focused ? 'person-outline' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1ABEE2',
        tabBarInactiveTintColor: '#A7A7A7',
        tabBarStyle: { 
          backgroundColor: '#1C1B1B',
          height: 60,
          paddingBottom: 7,
          }
        
        
      })}
    >
        <Tab.Screen
        name="Movies"
        component={Movies}
        options={{ headerShown: false,
          headerTitle: 'Dashboard',
          headerStyle: {
            backgroundColor: '#013A71',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          style: { 
            backgroundColor: '#fff',
            shadowColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            }
           },
          
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              
            > 
              <Text >Exit</Text>
            </TouchableOpacity>
          ),
        }} 
      />
      <Tab.Screen
        name="Tv"
        component={Tv}
        options={{ headerShown: false,
          headerTitle: 'Dashboard',
          headerStyle: {
            backgroundColor: '#013A71',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          style: { 
            backgroundColor: '#fff',
            shadowColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            }
           },
          
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              
            > 
              <Text >Exit</Text>
            </TouchableOpacity>
          ),
        }} 
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false,
          headerTitle: 'Dashboard',
          headerStyle: {
            backgroundColor: '#013A71',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          style: { 
            backgroundColor: '#fff',
            shadowColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            }
           },
          
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              
            > 
              <Text >Exit</Text>
            </TouchableOpacity>
          ),
        }} 
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false,
          headerTitle: 'Dashboard',
          headerStyle: {
            backgroundColor: '#013A71',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          style: { 
            backgroundColor: '#fff',
            shadowColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            }
           },
          
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              
            > 
              <Text >Exit</Text>
            </TouchableOpacity>
          ),
        }} 
      />

    </Tab.Navigator>
  );
}

