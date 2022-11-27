import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Alert

  } from 'react-native';

import Styles from '../styles/patternStyles/Styles'
import MediumInput from '../components/inputs/MediumInput';
import MediumButton from '../components/buttons/MediumButton';

import { signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { auth } from '../config/firebase';


export default function SignIn({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSignIn= () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      navigation.navigate('Dashboard', { idUser: user.uid})
    })
    .catch(error => {
      Alert.alert(error.message)
    })

    } 
    useEffect(() =>{
          onAuthStateChanged(auth, function(user){
          if (user) {
            navigation.navigate('Dashboard', { idUser: user.uid })
          } 
        });
    }, [])

  return (
    <View style={Styles.containerPattern}>        
        <View style={Styles.containerEvenly}>
          <Text style={Styles.inputMethodTitle}>Sign In</Text>
          <Text style={Styles.inputMethodText}>If you need any support  
            <Text style={Styles.textLink}
            > click here
            </Text>
          </Text>
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
          <Text style={Styles.inputMethodText}>Not A Member ? 
          <Text 
              style={Styles.textLink}
              onPress={() => navigation.navigate('SignUp')}
            > Register Now
            </Text>
          </Text>         
        </View>
    </View>
  );
}

