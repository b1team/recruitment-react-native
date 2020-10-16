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
import Drawer from "../../components/Drawer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoginForm from './LoginForm';
import styles from '../../Style/CrudJobStyle';
import UpgradeScreen from './UpgradeSelector';
import { TextInput, Title } from "react-native-paper";
import { PRIMARY } from "../../Colors";
import Loader from '../../components/LoaderScreen';
import {createApply} from '../actions/createApply';
import {connect} from 'react-redux';



function ApplyForm({route, navigation, dispatch, createApplyState, identities}) {
  var job = route.params?.job
  const [cv, setCV] = React.useState("");
  const [description, setDescription] = React.useState("");

  const applyData = {
    job_id: job.id,
    cv: cv,
    description: description
  }

  if (identities.user_type == "viewer") {
    return <UpgradeScreen />
  }
  return (
    <View style={{ flex: 1 }}>
      {createApplyState?.createApplyRequesting ? <Loader/> : null}
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
        <Button success style={styles.button} onPress={() => { dispatch(createApply(identities, applyData)) }}>
          <Text style={{ fontSize: 16 }}>Gửi CV</Text>
        </Button>
        <Button success style={styles.destroyButton} onPress={() => { navigation.navigate("DetailJob") }}>
          <Text style={{ fontSize: 16 }}>Hủy</Text>
        </Button>
        {createApplyState?.createApplyDone && createApplyState?.error ? <Text style={{textAlign: "center", color: "green"}}>Ứng tuyển thành công</Text> : null}
        {createApplyState?.error ? <Text style={{color: "red", textAlign: "center"}}>{createApplyState.errorMessage}</Text> : null}
      </KeyboardAwareScrollView>
    </View>
  );
}

function mapStateToProps(state) {
  return {
      identities: state.authReducer.identities,
      createApplyState: state.createApplyReducer
  }
  
}

export default connect(mapStateToProps)(ApplyForm);
