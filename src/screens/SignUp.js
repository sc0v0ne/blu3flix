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
import MediumInput from '../components/inputs/MediumInput';
import MediumButton from '../components/buttons/MediumButton';

export default function SignUp({navigation}) {
  
  return (
    <View style={Styles.containerPattern}>
        <Text>SignUp</Text>
        <Text>E-mail</Text>
        <MediumInput


        />
        <Text>Password</Text>
        <MediumInput

          
        />
        <MediumButton
          buttonText = 'Create Account'
          buttonPress = {() => navigation.navigate('Home')}

        />
    </View>
  );
}

