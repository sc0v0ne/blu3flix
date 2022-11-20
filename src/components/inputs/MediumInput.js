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


export default function MediumInput(props) {
  
  return (
    <View>
        <TextInput
            style = {props.inputStyle}
            onChangeText={props.inputOnChange}
            value = {props.inputValue}
            placeholder ={props.inputPlaceholder}
            keyboardType = {props.inputKeyboard}
            placeholderTextColor="#A7A7A7"
        />
    </View>
  );
}

