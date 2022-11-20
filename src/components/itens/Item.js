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


export default function Item({title, poster_path, link, preview, release_date}) {

    const imagePath = 'https://image.tmdb.org/t/p/w500/'

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={Styles.containerDouble}>    
            <Card style={Styles.itemModalAnime}>

                <Card.Content>
                    <Text style={Styles.titleModalAnime}>{title}</Text>
                    <Text>{release_date}</Text>
                </Card.Content>

                <Card.Cover style={Styles.imageModalAnime} source={{ uri: imagePath + poster_path }} />
                    
                <Card.Actions style={Styles.button_1ModalAnime}>

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
                            <View style={Styles.modalViewModalAnime}>
                                <Text style={Styles.modalText}>{preview}</Text>
                                <Pressable
                                    style={[Styles.buttonModalAnime, Styles.buttonCloseModalAnime]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                    >
                                    <Text style={Styles.textStyleModalAnime}>Close</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <Pressable mode='text'  onPress={() => {Linking.openURL(link)}}><Text>More Info</Text></Pressable>
                    
                    <Pressable
                        style={[Styles.buttonModalAnime, Styles.buttonOpenModalAnime]}
                        onPress={() => setModalVisible(true)}
                        >
                        <Text style={Styles.textStyleModalAnime}>Sinopse</Text>
                    </Pressable>
                </Card.Actions>
            </Card>
    </View>
    );
}

