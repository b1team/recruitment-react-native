import AsyncStorage from '@react-native-community/async-storage';

const TOKEN_FIELD_NAME = "_token"


export async function saveToken(token) {
    try {
        await AsyncStorage.setItem(TOKEN_FIELD_NAME, value)
    } catch (e) {
        console.log("Save token error")
    }
}


export async function getToken() {
    token = null
    try {
        token = await AsyncStorage.getItem(TOKEN_FIELD_NAME)
        return token
    } catch (e) {
        // error reading value
        console.log("Get token error")
        return null
    }
}


export async function getIsSignedIn(){
    const token = await getToken()
    return token !== null
}
