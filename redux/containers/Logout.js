import React from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "react-native";
import { logoutAction } from "../actions/auth";
import Drawer from "../../components/Drawer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


function LogoutScreen({ navigation, dispatch}){
    return (
        <View>
             <Drawer navigation={navigation} name="Đăng Xuất" />
             <KeyboardAwareScrollView>
            <Button title="Nhấn vào đây để đăng xuất" color="red" onPress={() => dispatch(logoutAction())}></Button>
             </KeyboardAwareScrollView>
        
        </View>
    );
}

function mapStateToProps(state) {
  return {
    state: state,
  };
}

export default connect(mapStateToProps)(LogoutScreen);
