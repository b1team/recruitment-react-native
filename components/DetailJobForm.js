import React from "react";
import { Alert, SafeAreaView } from "react-native";
import {
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Content
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


var userType = "employee"

function DetailJobForm(props) {
  var job = props.detail
  var navigation = props.navigation
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card transparent>
        <CardItem>
          <Body>
            <Text>{job.title}</Text>
          </Body>
        </CardItem>
      </Card>
      <KeyboardAwareScrollView>
        <Content padder>
          <Card>
            <CardItem header bordered>
              {job.tags.map((tag, index) => {
                return (
                  <Button rounded success key={index} style={{ marginLeft: 5, height: 40 }}>
                    <Text style={{ fontSize: 14 }} numberOfLines={1}>{tag}</Text>
                  </Button>
                );
              })}
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Lương: </Text>
                <Text>{job.salary}</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Địa chỉ:</Text>
                <Text>{job.address}</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Mô tả:</Text>
                <Text>{job.description}</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              {userType == "employer" ? null : <Button primary style={{ width: 250, marginLeft: 35 }} onPress={() => {navigation.navigate("ApplyScreen", {job: job})}}>
                <Text style={{ marginLeft: 70 }}>Ứng Tuyển</Text>
              </Button>}
            </CardItem>
          </Card>
        </Content>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default DetailJobForm;
