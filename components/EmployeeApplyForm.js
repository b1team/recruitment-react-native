import React from "react";
import { View, Alert} from "react-native";
import {
  Button,
  Text,
  Content,
  Card,
  CardItem,
  Body
} from "native-base";
import Drawer from "./Drawer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoginForm from '../redux/containers/LoginForm';
import styles from '../Style/CrudJobStyle';
import UpgradeScreen from '../redux/containers/UpgradeSelector';
import { TextInput, Title } from "react-native-paper";
import { PRIMARY } from "../Colors";
import axios from 'axios';

function createApply(job, description, cv) {

  var token="TOKEN"
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const bodyParameters = {
      job_id: job.id,
      description: description.trim(),
      cv: cv,
  };
  console.log(bodyParameters);
  axios.post('API_URL',
  bodyParameters,
  config)
  .then(response => response.status==200?Alert.alert("Ứng tuyển thành công"):null)
  .catch((error) => Alert.alert(error.response.data.detail));
}


var isSignedIn = true
var userType = "employee"

function ApplyForm(props) {
  const [cv, setCV] = React.useState("");
  const [description, setDescription] = React.useState("");

  var job = props.job
  var navigation = props.navigation
  if (!isSignedIn) {
    return <LoginForm navigation={navigation} />
  }
  else if (userType == "viewer") {
    return <UpgradeScreen />
  }
  return (
    <View style={{ flex: 1 }}>
      <Drawer navigation={navigation} name={"Ứng tuyển"} />
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Title>{job.title}</Title>
              </Body>
            </CardItem>
          </Card>
        </Content> 
        <TextInput
          mode="flat"
          label="Đường dẫn tới CV"
          theme={{
            colors: { primary: PRIMARY, underlineColor: "transparent" },
          }}
          value={cv}
          onChangeText={(text) => setCV(text)}
          style={{marginBottom: 10}}
        />
        <TextInput
          multiline
          mode="flat"
          label="Mô tả"
          theme={{
            colors: { primary: PRIMARY, underlineColor: "transparent" },
          }}
          value={description}
          onChangeText={(text) => setDescription(text)}
          style={{ marginBottom: 10, textAlignVertical: "top", height: 200}}
        />
        <Button success style={styles.button} onPress={() => { createApply(job, description, cv) }}>
          <Text style={{ fontSize: 16 }}>Gửi CV</Text>
        </Button>
        <Button success style={styles.destroyButton} onPress={() => { navigation.navigate("DetailJob") }}>
          <Text style={{ fontSize: 16 }}>Hủy</Text>
        </Button>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default ApplyForm;
