import { StyleSheet } from 'react-native'
import { colors, fonts } from '..'; 


const styles = StyleSheet.create({
    containerPattern:{
        flex: 1,
        padding: 20,
        backgroundColor: colors.backgroundPattern,
        
        
    },
    containerModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    containerCentralize:{
        flex:1,
        justifyContent: 'center',
        alignItems: "center",
        
    },
    containerDoubleButton: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-evenly',
    },
    homeLogo:{
        color: colors.textTwo,
        marginBottom: 24,
        fontSize: 44,
    },
    homeTitle:{
        color: colors.fontPattern,
        marginBottom: 24,
        fontSize: 18,
    },
    homeText:{
        color: colors.textOne,
        marginBottom: 24,
        fontSize: 14,
    },
    textScreen:{
        color: colors.fontPattern,
    },
    mediumButtonBlue: {
        alignItems: "center",
        backgroundColor: colors.bluePattern,
        padding: 10,
        borderRadius: 30,
        width: 150,
        height: 60,
        justifyContent: "center",
        alignItems: "center", 
        margin: 20,  
    },
    mediumButtonNormal: {
        alignItems: "center",
        padding: 10,
        borderRadius: 30,
        width: 150,
        height: 60,
        justifyContent: "center",
        alignItems: "center", 
        margin: 20,  
    },
    mediumButtonTextBlue: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.buttonPatternThree
    },
    mediumButtonTextNormal: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.buttonPatternTwo
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