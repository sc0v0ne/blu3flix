import React, { useState } from 'react';
import {
    Text,
    View,

  } from 'react-native';
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase';
import Styles from '../styles/patternStyles/Styles'
import MediumButton from '../components/buttons/MediumButton';

export default function Settings({navigation}) {
  

  function logout(){
      signOut(auth).then(() => {
        navigation.navigate('Home')
      }).catch((error) => {
        Alert.alert(error.message)
      })
  }

  return (
    <View style={Styles.containerPattern}>
        <Text style={Styles.textScreen}>Settings</Text>
        <MediumButton
            buttonText = 'Logout'
            buttonPress = {() => {logout()}}
            styleMediumButton={Styles.inputMethodButton}
            styleMediumText={Styles.mediumButtonTextNormal}
        />
    </View>
  );
}

