import { StyleSheet } from 'react-native'
import { colors, fonts } from '..'; 


const styles = StyleSheet.create({
    containerPattern:{
        flex: 1,
        margin: 40,

    },
    mediumButton: {
        alignItems: "center",
        backgroundColor: "#DDD1DD",
        padding: 10,
    },
    mediumButtonText: {
        fontSize: 10,
        fontWeight: "bold"
    },
    smallButton: {
        alignItems: "center",
        backgroundColor: "#DDD1DD",
        padding: 10,
    },
    smallButtonText: {
        fontSize: 10,
        fontWeight: "bold"
    },
    largeButton: {
        alignItems: "center",
        backgroundColor: "#DDD1DD",
        padding: 10,
    },
    largeButtonText: {
        fontSize: 10,
        fontWeight: "bold"
    },
    mediumInput:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    containerModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      
    itemModalAnime: {
        backgroundColor: "#97C44B",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    titleModalAnime: {
        fontSize: 34,
        marginBottom: 20,
    },
    modalViewModalAnime: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
    },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonModalAnime: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpenModalAnime: {
        backgroundColor:"#97C44B",
    },
    buttonCloseModalAnime: {
        backgroundColor: "#97C44B",
    },
    textStyleModalAnime: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalTextModalAnime: {
        marginBottom: 15,
        textAlign: "center",
    
    },
    containerRickAnime: {
        
    },
    itemRickAnime: {
        backgroundColor: "#97C44B",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    titleRickAnime: {
        fontSize: 32,
    },
    
})

export default styles