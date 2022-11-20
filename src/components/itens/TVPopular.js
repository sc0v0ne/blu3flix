import React, { useState } from "react";
import { 
    View,
    Text,
    Linking,
    Alert,
    Modal,
    Pressable
} from 'react-native';

import Styles from "../../styles/patternStyles/Styles";

import {
    Card,
} from 'react-native-paper';


export default function TVPopular({original_name, poster_path, link, preview, release_date, overview}) {

    const imagePath = 'https://image.tmdb.org/t/p/original/'

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>    
            <Card style={Styles.modalCard}>   
                <Card.Cover style={Styles.modalCardCover} source={{ uri: imagePath + poster_path }} />
                <Card.Actions style={Styles.modalCardActions}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {

                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        
                        }}
                        >
                        <View style={Styles.containerModal}>
                            <View style={Styles.modalView}>
                            <Text style={Styles.modalCardTitle}>{original_name}</Text>
                            <Text style={Styles.modalText}>{overview}</Text>
                            <Pressable
                                style={Styles.modalButton}
                                onPress={() => setModalVisible(!modalVisible)}
                                >
                                <Text style={Styles.modalTextButton}>Close</Text>
                            </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable mode='text'  onPress={() => {Linking.openURL(link)}}><Text>More Info</Text></Pressable>
                    
                    <Pressable
                        style={[Styles.buttonModalAnime, Styles.buttonOpenModalAnime]}
                        onPress={() => setModalVisible(true)}
                        >
                        <Text style={Styles.textStyleModalAnime}>Overview</Text>
                    </Pressable>
                </Card.Actions>                
            </Card>
    </View>
    );
}

