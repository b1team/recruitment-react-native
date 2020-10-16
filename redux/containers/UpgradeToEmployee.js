import React from "react";
import { connect } from 'react-redux';
import { Title } from "react-native-paper";
import { Button, Text } from "native-base"
import { View } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { upgradeToEmployee } from '../actions/upgrade';
import Loader from '../../components/LoaderScreen';

function UpgradeToEmployeeForm({ dispatch, identities, upgradeState }) {
  return (
    <View>
      {upgradeState?.upgradeUserReqesting ? <Loader /> : null}
      <KeyboardAwareScrollView style={{ padding: 10 }}>
        <Title style={{ textAlign: "center", alignSelf: "center", marginBottom: 10 }}>
          Nhấn "Nâng cấp" để ứng tuyển vào các công việc mà bạn thích!
        </Title>
        <Button style={{ alignSelf: "center", marginTop: 10 }} onPress={() => { dispatch(upgradeToEmployee(identities.access_token)) }}><Text>Nâng cấp</Text></Button>
        {upgradeState?.error ? <Text style={{alignSelf: "center", margin: 10, color: "red"}}>{upgradeState?.errorMessage}</Text> : null}
        {upgradeState?.upgradeUserDone && !upgradeState?.error ? <Text style={{alignSelf: "center", margin: 10, color: "green"}}>Nâng cấp thành công, Đăng nhập lại để áp dụng thay đổi</Text> : null}
      </KeyboardAwareScrollView>
    </View>

  );
}

function mapStateToProps(state) {
  return {
    identities: state.authReducer.identities,
    upgradeState: state.upgradeUserReducer
  }
}

export default connect(mapStateToProps)(UpgradeToEmployeeForm);
