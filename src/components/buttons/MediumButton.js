import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert,
  } from 'react-native';

import Styles from '../../styles/patternStyles/Styles';


export default function MediumButton(props) {
  
  return (
    <View>
        <TouchableOpacity
            style = {props.styleMediumButton}
            onPress={props.buttonPress}
        >
        <Text style={props.styleMediumText}>
            {props.buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

