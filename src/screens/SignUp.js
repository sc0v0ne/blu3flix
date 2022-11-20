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
        <View style={Styles.containerEvenly}>
          <Text style={Styles.inputMethodTitle}>Sign Up</Text>
          <Text style={Styles.inputMethodText}>If you need any support click here</Text>
          <View>
            <MediumInput
                inputStyle = {Styles.inputMethodInput}
                inputPlaceholder= {'Enter Email'}
                inputKeyboard = {'email-address'}

            />
            <MediumInput
                inputStyle = {Styles.inputMethodInput}
                inputPlaceholder= {'Password'}
                inputKeyboard = {'default'}
                secureTextEntry={true}

            />
          </View>
          <MediumButton
            buttonText = 'Create Account'
            buttonPress = {() => navigation.navigate('Home')}
            styleMediumButton={Styles.inputMethodButton}
          />
          <Text style={Styles.inputMethodText}>Do You Have An Account ? Sign In</Text>         
        </View>
    </View>
  );
}

