import React from "react";
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


function Buttons() {
  return (
    <View>
      <Button success style={styles.button}>
        <Text style={{ fontSize: 16 }}>Gửi CV</Text>
      </Button>
      <Button success style={styles.destroyButton}>
        <Text style={{ fontSize: 16 }}>Hủy</Text>
      </Button>
    </View>
  );
}

function ApplyForm({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Drawer navigation={navigation} name={"Ứng tuyển"} />
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
          <Input placeholder="Đường dẫn tới CV" style={styles.input} />
        </Item>
        <Form>
          <Textarea rowSpan={5} bordered placeholder="Desciption" />
        </Form>
        <Buttons />
      </KeyboardAwareScrollView>
    </View>
  );
}

export default ApplyForm;
