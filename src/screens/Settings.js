import React, { useState } from 'react';
import {
    Text,
    View,

  } from 'react-native';

import Styles from '../styles/patternStyles/Styles'

import MediumButton from '../components/buttons/MediumButton';

export default function Settings() {
  
  return (
    <View style={Styles.containerPattern}>
        <Text style={Styles.textScreen}>Settings</Text>
        <MediumButton
            buttonText = 'Log out'
            buttonPress = {() => navigation.navigate('Dashboard')}
            styleMediumButton={Styles.inputMethodButton}
            styleMediumText={Styles.mediumButtonTextNormal}
        />
    </View>
  );
}

