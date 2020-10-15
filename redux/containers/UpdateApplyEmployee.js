import React, { useState } from "react";
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

var fake_data = {
  description: "lm moi thu",
  cv: "bit.ly/tungnt24cv",
};


function UpdateApplyForm({ navigation, state,  dispatch}) {
  console.log("STATE O Update Apply Form" + JSON.stringify(state));
  const [cv, changeCV] = useState(fake_data.cv);
  const [description, changeDes] = useState(fake_data.description);
  return (
    <View style={{ flex: 1 }}>
      <Drawer navigation={navigation} name={"Sửa Đăng ký"} />
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>Senior Android Developers (Kotlin, Java)</Text>
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
        <Text style={{ fontSize: 16 }}>Sửa Thông Tin</Text>
      </Button>
      <Button success style={styles.destroyButton}>
        <Text style={{ fontSize: 16 }}>Hủy</Text>
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
    };
}


export default connect(mapStateToProps)(UpdateApplyForm);
