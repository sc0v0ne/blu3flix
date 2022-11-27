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
import { MotiView, MotiText } from 'moti'
import Styles from '../styles/patternStyles/Styles'
import MediumButton from '../components/buttons/MediumButton';

export default function Home({navigation}) {
  
  return (
    <View style={Styles.containerPattern}>        
        <View style={Styles.containerCentralize}>
          <MotiText
            from={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{
              type: 'timing',
              duration: 3050,
            }}
            style={Styles.homeLogo}

          >BLUEFLIX
          </MotiText>
          <MotiText
            from={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{
              type: 'timing',
              duration: 3450,
            }}
            style={Styles.homeTitle}

          >Movies for everyone
          </MotiText>
          <MotiText
            from={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{
              type: 'timing',
              duration: 3850,
            }}
            style={Styles.homeText}

          >Movies, series available to everyone and with quality
          </MotiText>
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
    </View>
  );
}

