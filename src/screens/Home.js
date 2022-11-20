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
        <Text style={Styles.textScreen}>Home</Text>
        <View style={Styles.containerDoubleButton}>
          <MediumButton
            styleMediumButton={Styles.mediumButtonBlue}
            styleMediumText={Styles.mediumButtonTextBlue}
            buttonText = 'Sign In'
            buttonPress = {() => navigation.navigate('SignIn')}
          />
          <MediumButton
            styleMediumButton={Styles.mediumButtonNormal}
            styleMediumText={Styles.mediumButtonTextNormal}
            buttonText = 'Sign Up'
            buttonPress = {() => navigation.navigate('SignUp')}
            
          />
        </View>
    </View>
  );
}

