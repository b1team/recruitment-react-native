import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    textInput: {
        width: 350,
        marginTop: 15,
        marginLeft: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#0275d8',
        borderRadius: 12,
        borderWidth: 2
    },
    button:{
        marginLeft: 210,
        width: 150,
        marginTop: 20,
        backgroundColor: '#0275d8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    destroyButton:{
        width: 150,
        marginTop: -45,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    //number-pad
    numberPad: {
        width: 350,
        justifyContent: 'center',
        marginLeft: 12,
        marginTop: 12
    },
    numberPadInput: {
        textAlign: 'center',
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#009688',
    }
});

export default styles;