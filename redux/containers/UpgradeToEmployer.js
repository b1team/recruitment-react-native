import { Alert, StyleSheet } from "react-native";
import React from "react";
import { connect } from 'react-redux';
import Loader from '../../components/LoaderScreen';
import { TextInput, Title } from "react-native-paper";
import { Button, Text, View } from "native-base"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { PRIMARY } from "../../Colors";
import { upgradeToEmployer } from '../actions/upgrade';

function UpgradeToEmployerForm({ dispatch, identities, upgradeState }) {
  const [companyName, setCompanyName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [description, setDescription] = React.useState("");

  const info = {
    name: companyName,
    code: companyName.toLowerCase().replace(" ", "-"),
    description: description,
    address: address,
    active: true,
    type: "outsourcing"
  }

  return (
    <View>
      {upgradeState?.upgradeUserReqesting ? <Loader /> : null}
      <KeyboardAwareScrollView style={{ padding: 10 }}>
        <Title style={{ alignSelf: "center", marginBottom: 10 }}>
          Trở thành nhà tuyển dụng
        </Title>
        <TextInput
          mode="flat"
          label="Tên công ty"
          value={companyName}
          onChangeText={(text) => setCompanyName(text)}
          theme={{
            colors: { primary: PRIMARY, underlineColor: "transparent" },
          }}
          style={styles.inputStyle}
        />
        <TextInput
          mode="flat"
          label="Địa chỉ"
          value={address}
          onChangeText={(text) => setAddress(text)}
          theme={{
            colors: { primary: PRIMARY, underlineColor: "transparent" },
          }}
          style={styles.inputStyle}
        />
        <TextInput
          multiline
          mode="flat"
          label="Mô tả về công ty"
          value={description}
          onChangeText={(text) => setDescription(text)}
          theme={{
            colors: { primary: PRIMARY, underlineColor: "transparent" },
          }}
          style={styles.inputStyle, styles.mutlilineStyle}
        />
        <Button style={{ alignSelf: "center", marginTop: 10 }} onPress={() => { dispatch(upgradeToEmployer(identities.access_token, info)) }}><Text>Nâng cấp</Text></Button>
        {upgradeState?.error ? <Text style={{alignSelf: "center", margin: 10, color: "red"}}>{upgradeState?.errorMessage}</Text> : null}
        {upgradeState?.upgradeUserDone && !upgradeState?.error ? <Text style={{alignSelf: "center", margin: 10, color: "green"}}>Nâng cấp thành công, Đăng nhập lại để áp dụng thay đổi</Text> : null}
      </KeyboardAwareScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  inputStyle: {
    marginBottom: 10
  },
  mutlilineStyle: {
    textAlignVertical: "top",
    height: 200
  }
});

function mapStateToProps(state) {
  return {
    identities: state.authReducer.identities,
    upgradeState: state.upgradeUserReducer
  }
}

export default connect(mapStateToProps)(UpgradeToEmployerForm);
