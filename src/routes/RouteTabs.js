
import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert

  } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from '../screens/Settings'
import Movies from '../screens/Movies'
import Recommend from '../screens/Recommend'

const Tab = createBottomTabNavigator();

export default function RouteTabs() {

  return (
    <Tab.Navigator       
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Tips') {
            iconName = focused
              ? 'planet-outline'
              : 'planet-outline';
          } else if (route.name === 'Bank Morty') {
            iconName = focused ? 'wallet-outline' : 'wallet-outline';
          }else if (route.name === 'Rick Movies') {
            iconName = focused ? 'play-skip-forward-circle-outline' : 'play-skip-forward-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#013A71',
        tabBarInactiveTintColor: 'gray',
        
        
      })}
    >
        <Tab.Screen
        name="Movies"
        component={Movies}
        options={{ headerShown: true,
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
        name="Recommend"
        component={Recommend}
        options={{ headerShown: true,
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
        options={{ headerShown: true,
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

