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


export default function SmallButton(props) {
  
  return (
    <View>
        <TouchableOpacity
            style={Styles.smallButton}
            onPress={props.buttonPress}
        >
        <Text style={Styles.smallButtonText}>
            {props.buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

