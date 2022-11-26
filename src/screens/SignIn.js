import React, { useState } from 'react';
import {
    Text,
    View,
    Alert

  } from 'react-native';

import Styles from '../styles/patternStyles/Styles'
import MediumInput from '../components/inputs/MediumInput';
import MediumButton from '../components/buttons/MediumButton';

import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';


export default function SignIn({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn= () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigation.navigate('Dashboard')
    })
    .catch(error => {
      Alert.alert(error.message)
    })

    } 

  return (
    <View style={Styles.containerPattern}>        
        <View style={Styles.containerEvenly}>
          <Text style={Styles.inputMethodTitle}>Sign In</Text>
          <Text style={Styles.inputMethodText}>If you need any support click here</Text>
          <View>
            <MediumInput
                inputStyle = {Styles.inputMethodInput}
                inputPlaceholder= {'Enter Email'}
                inputKeyboard = {'email-address'}
                inputOnChange={(text) => setEmail(text)}

            />
            <MediumInput
                inputStyle = {Styles.inputMethodInput}
                inputPlaceholder= {'Password'}
                inputKeyboard = {'default'}
                inputSecureTextEntry={true}
                inputOnChange={(text) => setPassword(text)}

            />
          </View>
          <Text style={Styles.inputMethodText}>Recovery Password</Text>
          <MediumButton
            buttonText = 'Sign In'
            buttonPress = {handleSignIn}
            styleMediumButton={Styles.inputMethodButton}
            styleMediumText={Styles.mediumButtonTextNormal}
          />
          <Text style={Styles.inputMethodText}>Not A Member ? Register Now</Text>         
        </View>
    </View>
  );
}

