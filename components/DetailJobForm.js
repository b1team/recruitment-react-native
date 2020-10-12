import React from "react";
import { View, SafeAreaView } from "react-native";
import {
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Content
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function DetailJobForm(props) {
  var detail = props.detail[0];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card transparent>
        <CardItem>
          <Body>
            <Text>{detail.title}</Text>
          </Body>
        </CardItem>
      </Card>
      <KeyboardAwareScrollView>
        <Content padder>
          <Card>
            <CardItem header bordered>
            {detail.tags.map((tag, index) => {
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
                <Text>{detail.salary}</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Địa chỉ:</Text>
                <Text>{detail.address}</Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Mô tả:</Text>
                <Text>{detail.desciption}</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary style={{ width: 250, marginLeft: 35 }}>
                <Text style={{ marginLeft: 70 }}>Ứng Tuyển</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default DetailJobForm;
