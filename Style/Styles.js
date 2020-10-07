import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    job_name: {
        width: 350,
        marginTop:15,
        marginLeft:12
    },
    address: {
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
    button: {
        width: 150,
        marginTop: 8,
        backgroundColor: '#0275d8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton:{
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
    //numberic
    container: {
        width: 350,
        justifyContent: 'center',
        marginLeft: 12,
        marginTop: 12
    },
    TextInputStyle: {
        textAlign: 'center',
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#009688',
    }
});

export default styles;