import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import Drawer from '../../components/Drawer';
import { loginAction, logoutAction } from '../actions/auth';


function TestComponent({ navigation, state, dispatch }) {
  // console.log(state)
  const token = state.authReducer.token
  if (token === null) {
    console.log("HEEE")
    return (<View>
      <Drawer navigation={navigation} />
        <View>
        <Text>Chua dang nhap, hay dang nhap</Text>
          <Button title="Login" onPress={() => { dispatch(loginAction("username", "password")); }} />
        </View>
    </View>);

  }
  return (<View>
    <Drawer navigation={navigation} />
      <View>
      <Text>Dang nhap thanh cong</Text>
      <Button color="red" title="Logout" onPress={() => { dispatch(logoutAction()); }} />
      </View>
  </View>);
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(TestComponent);