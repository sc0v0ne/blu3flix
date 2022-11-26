import React, { useState } from 'react';
import {
    Text,
    View,

  } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { firebaseConfig } from '../config/firebase';
import Styles from '../styles/patternStyles/Styles'
import MediumButton from '../components/buttons/MediumButton';

export default function Settings({navigation}) {
  
  const auth = getAuth(app);

  function logout(){
      auth.signOut().then(() => {
        navigation.navigate('Home')
      }).catch((error) => {
        Alert.alert(error.message)
      })
  }


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

