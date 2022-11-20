import { StyleSheet } from 'react-native'
import { colors, fonts } from '..'; 


const styles = StyleSheet.create({
    containerPattern:{
        flex: 1,
        margin: 40,
    },
    containerModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    containerDouble:{
        flexDirection: "row",
        flexWrap: "wrap",
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
    
      
    modalCard: {
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
    modalCardActions: {
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
    modalCardCover: {
        backgroundColor: "#97C44B",
        width:220,
        height: 290,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    
})

export default styles