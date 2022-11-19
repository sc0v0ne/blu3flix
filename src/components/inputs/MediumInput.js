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
            style = {Styles.mediumInput}
            onChangeText={props.inputOnChange}
            value = {props.inputValue}
            placeholder ={props.inputPlaceholder}
            keyboardType = {props.inputKeyboard}
        />
    </View>
  );
}

