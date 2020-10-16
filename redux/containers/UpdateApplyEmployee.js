import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  Item,
  Input,
  Button,
  Text,
  Form,
  Textarea,
  Content,
  Card,
  CardItem,
  Body,
} from "native-base";
import Drawer from "../../components/Drawer";
import styles from "../../Style/CrudJobStyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
import {UpdateData} from '../actions/UpdateApplyEmployee';
import {DeleteData} from '../actions/DeleteApplyEmployee';

function UpdateApplyForm({ job_id, navigation, state, dispatch, identities }) {
  console.log("STATE O UPDATE APPLY FORM" + JSON.stringify(state))
  const { applied_job } = state.data
  const [apply, setApply] = useState({})
  const [job, setJob] = useState({})
  useEffect(()=>{
    for (var a of applied_job) {
      if (a.job.id == job_id) {
        setApply(a.apply)
        setJob(a.job)
      }
    }
  })
  const [description, changeDes] = useState(apply.description);
  const [cv, changeCV] = useState(apply.cv);
  const token = identities.access_token
  return (
    <View style={{ flex: 1 }}>
      <Drawer navigation={navigation} name={"Sửa Đăng ký"} />
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>{job.title}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Item style={styles.textInput}>
          <Input
            placeholder="Đường dẫn tới CV"
            style={styles.input}
            value={cv}
            onChangeText={(new_cv) => changeCV(new_cv)}
          />
        </Item>
        <Form>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="Desciption"
            value={description}
            onChangeText={(new_des) => changeDes(new_des)}
          />
        </Form>
        <Button success style={styles.button} onPress={() => dispatch(UpdateData(apply.id, token))}>
          <Text style={{ fontSize: 16 }}>Cập nhật</Text>
        </Button>
        <Button success style={styles.destroyButton} onPress={() => dispatch(DeleteData(apply.id, token))}>
          <Text style={{ fontSize: 16 }}>Xóa</Text>
        </Button>
      </KeyboardAwareScrollView>
    </View>
  );
}
function mapStateToProps(state) {
  return {
    state: state.ApplyEmployeeReducer,
    identities: state.authReducer.identities
  };
}


export default connect(mapStateToProps)(UpdateApplyForm);
