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
        <View style={Styles.containerEvenly}>
          <Text style={Styles.inputMethodTitle}>Sign In</Text>
          <Text style={Styles.inputMethodText}>If you need any support click here</Text>
          <View>
            <MediumInput
                inputStyle = {Styles.inputMethodInput}
                inputPlaceholder= {'Enter Username Or Email'}
                inputKeyboard = {'email-address'}

            />
            <MediumInput
                inputStyle = {Styles.inputMethodInput}
                inputPlaceholder= {'Password'}
                inputKeyboard = {'default'}
                secureTextEntry={true}

            />
          </View>
          <Text style={Styles.inputMethodText}>Recovery Password</Text>
          <MediumButton
            buttonText = 'Sign In'
            buttonPress = {() => navigation.navigate('Dashboard')}
            styleMediumButton={Styles.inputMethodButton}
          />
          <Text style={Styles.inputMethodText}>Not A Member ? Register Now</Text>         
        </View>
    </View>
  );
}

