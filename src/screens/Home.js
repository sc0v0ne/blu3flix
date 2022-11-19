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

export default function Home() {
  
  return (
    <View style={Styles.containerPattern}>
        <Text>Home</Text>
        <MediumButton
          buttonText = 'Sign In'

        />
        <MediumButton
          buttonText = 'Sign Up'

        />
    </View>
  );
}

