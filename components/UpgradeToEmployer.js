import { Alert, StyleSheet } from "react-native";
import React from "react";
import { TextInput, Title} from "react-native-paper";
import {Button, Text} from "native-base"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { PRIMARY } from "../Colors";

function UpgradeToEmployerForm({}) {
  const [companyName, setCompanyName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
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
        <Button style={{alignSelf: "center", marginTop: 10}} onPress={() => {Alert.alert("Nang cap")}}><Text>Nâng cấp</Text></Button>
      </KeyboardAwareScrollView>
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

export default UpgradeToEmployerForm;
