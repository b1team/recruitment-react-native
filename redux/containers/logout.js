import React from "react";
import { connect } from "react-redux";
import { View, Button } from "react-native";
import { logoutAction } from "../actions/auth";


function LogoutScreen({ dispatch}){
    return (
        <View>
            <Button title="Logout" onPress={() => {dispatch(logoutAction())}}></Button>
        </View>
    );
}

function mapStateToProps(state) {
  return {
    state: state,
  };
}

export default connect(mapStateToProps)(LogoutScreen);
