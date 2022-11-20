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


export default function SignIn({navigation}) {
  
  return (
    <View style={Styles.containerPattern}>
        <Text style={Styles.textScreen}>Sign In</Text>
        <Text style={Styles.textScreen}>E-mail</Text>
        <MediumInput


        />
        <Text style={Styles.textScreen}>Password</Text>
        <MediumInput


        />
        <MediumButton
          buttonText = 'Acess'
          buttonPress = {() => navigation.navigate('Dashboard')}
          styleMediumButton={Styles.mediumButtonBlue}
        />
    </View>
  );
}

