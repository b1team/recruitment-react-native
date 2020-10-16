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


function applyButtonHandler(user_type, job, navigation) {
  if (user_type == "viewer") {
    Alert.alert("Hãy trở thành Người tìm việc để thực hiện hành động này")
  }
  else {
    navigation.navigate("ApplyScreen", { job: job })
  }
}


function DetailJobForm({ detail, identities, navigation }) {
  var job = detail
  console.log("IDEN: " + JSON.stringify(identities))
  const user_type = identities.user_type ? identities.user_type : "viewer"
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
              {user_type == "employer" ? null : <Button primary style={{ width: 250, marginLeft: 35 }} onPress={() => applyButtonHandler(user_type, job, navigation) }>
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
