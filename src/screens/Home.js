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

import Styles from '../styles/patternStyles/Styles'
import MediumButton from '../components/buttons/MediumButton';

export default function Home({navigation}) {
  
  return (
    <View style={Styles.containerPattern}>
        <Text>Home</Text>
        <MediumButton
          buttonText = 'Sign In'
          buttonPress = {() => navigation.navigate('SignIn')}
        />
        <MediumButton
          buttonText = 'Sign Up'
          buttonPress = {() => navigation.navigate('SignUp')}
        />
    </View>
  );
}

