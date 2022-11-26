import React, { useState } from 'react';
import {
    Text,
    View,

  } from 'react-native';

import Styles from '../styles/patternStyles/Styles'
import MediumButton from '../components/buttons/MediumButton';

import { auth, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';

export default function Settings({navigation}) {
  

  auth().signOut()
  .then(() => console.log('User signed out!'));

  return (
    <View style={Styles.containerPattern}>
        <Text style={Styles.textScreen}>Settings</Text>
        <MediumButton
            buttonText = 'Log out'
            buttonPress = {() => navigation.navigate('Home')}
            styleMediumButton={Styles.inputMethodButton}
            styleMediumText={Styles.mediumButtonTextNormal}
        />
    </View>
  );
}

