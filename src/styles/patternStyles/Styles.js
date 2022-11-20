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
    containerEvenly:{
        flex:1,
        justifyContent: 'space-evenly',
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
    inputMethodTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.fontPattern,
        marginBottom: 4,
    },
    inputMethodText: {
        color: colors.textOne,
        fontSize: 14,
        marginBottom: 14,
    },
    inputMethodURL: {
    },
    inputMethodInput: {
        width: 390,
        height: 60,
        fontSize: 14,
        borderRadius: 30,
        borderWidth: 0.2,
        paddingLeft: 20,
        borderColor: colors.fontPattern,
        color: colors.fontPattern,
        marginBottom: 24,
        
    },
    inputMethodButton: {
        alignItems: "center",
        backgroundColor: colors.bluePattern,
        padding: 10,
        borderRadius: 30,
        width: 390,
        height: 60,
        justifyContent: "center",
        alignItems: "center", 
        marginBottom: 24,
    },      
    modalCard: {
        backgroundColor: colors.bluePattern,
        padding: 0,
        margin: 5,
        
    },
    modalCardActions: {
        
    },
    modalCardCover: {
        width:230,
        height: 300,
        padding: 0,
    },
    modalCardTitle: {
        fontSize: 18,
        maxWidth:200,
        fontWeight: "bold",
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