import AsyncStorage from "@react-native-community/async-storage";

const TOKEN_FIELD_NAME = "_token";


export async function removeToken() {
  try {
    await AsyncStorage.removeItem(TOKEN_FIELD_NAME);
  } catch (e) {
    console.log("Remove token error" + e);
  }
}

export async function getToken(setTokenFunction) {
  try {
    token = await AsyncStorage.getItem(TOKEN_FIELD_NAME);
    setTokenFunction(token);
  } catch (e) {
    // error reading value
    console.log("Get token error");
  }
}


export async function setTokenState(setTokenFunction) {
  getToken().then(setTokenFunction);
}


export async function logout(setTokenFunction) {
  await removeToken()
  await setTokenState(setTokenFunction)
}


export async function saveToken(token, setTokenFunction) {
  try {
    await AsyncStorage.setItem(TOKEN_FIELD_NAME, token);
    await setTokenState(setTokenFunction)
  } catch (e) {
    console.log("Save token error" + e);
  }
}
