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


export default function LargeButton(props) {
  
  return (
    <View>
        <TouchableOpacity
            style={Styles.largeButton}
            onPress={props.buttonPress}
        >
        <Text style={Styles.largeButtonText}>
            {props.buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

