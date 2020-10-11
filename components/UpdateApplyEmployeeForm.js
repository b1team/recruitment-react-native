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
import Drawer from "./Drawer";
import styles from "../Style/CrudJobStyle";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

var fake_data = {
  description: "lm moi thu",
  cv: "bit.ly/tungnt24cv",
};

function Buttons() {
  return (
    <View>
      <Button success style={styles.button}>
        <Text style={{ fontSize: 16 }}>Sửa Thông Tin</Text>
      </Button>
      <Button success style={styles.destroyButton}>
        <Text style={{ fontSize: 16 }}>Hủy</Text>
      </Button>
    </View>
  );
}

function UpdateApplyForm({ navigation }) {
  const [cv, changeCV] = useState(fake_data.cv);
  const [description, changeDes] = useState(fake_data.description);
  return (
    <View style={{ flex: 1 }}>
      <Drawer navigation={navigation} name={"Sửa Ứng Tuyển"} />
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
        <Buttons />
      </KeyboardAwareScrollView>
    </View>
  );
}

export default UpdateApplyForm;
