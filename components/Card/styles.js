import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
    // inline: { deixando na linha horizontal 
    //     flexDirection: "row",
    // },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        width: 200,
    },
    cardT: {
        margin: 20,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 20,
        width: 300,
    },
    texto:{
        padding: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
    },
    textoA:{
        color: '#ff0000',
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold',
    },
    img:{
        width: 200,
        height: 390,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    titulo: {
        margin: 4,
        padding: 14,
        fontSize: 30,
        fontStyle: 'italic',
        backgroundColor: 'black',
        color: 'yellow',
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
    },
});

export default styles;