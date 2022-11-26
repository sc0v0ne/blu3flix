import React, {  useState } from 'react';
import {
    Text,
    View,
    Alert,

  } from 'react-native';

import Styles from '../styles/patternStyles/Styles'
import MediumInput from '../components/inputs/MediumInput';
import MediumButton from '../components/buttons/MediumButton';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';

export default function SignUp({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      Alert.alert('Create Account!')
        let user = userCredential.user;
      navigation.navigate('Dashboard', { idUser: user.uid})
    })
    .catch(error => {
      Alert.alert(error.message)
    })

    }

    

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
          <MediumButton
            buttonText = 'Create Account'
            buttonPress = {handleCreateAccount}
            styleMediumButton={Styles.inputMethodButton}
            styleMediumText={Styles.mediumButtonTextNormal}
          />
          <Text style={Styles.inputMethodText}>Do You Have An Account ? Sign In</Text>         
        </View>
    </View>
  );
}

