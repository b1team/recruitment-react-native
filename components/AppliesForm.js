import React from "react";
import { Linking, Alert } from 'react-native';
import { Card, CardItem, Text, Body, Right, Button } from "native-base";
import { SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from 'axios';


function handleResponse(status, response, statusSetter){
  if(response.status != 200){
    return null
  }
  statusSetter(status)
  Alert.alert("Đăng kí đã được chuyển sang trạng thái " + status)
}


function ApplyStatus(applies, job, status, statusSetter) {

  var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJ0dW5nbnRAZ21haWwuY29tIiwidXNlcl90eXBlIjoiZW1wbG95ZXIiLCJuYW1lIjoidHVuZ250IiwidXBkYXRlZCI6IjIwMjAtMTAtMTJUMTY6MTM6MjIuNjk4MDk1IiwiZW1wbG95ZXJfaWQiOjIsImVtcGxveWVlX2lkIjpudWxsLCJleHAiOjE2MDMyNTAxOTMsImlhdCI6MTYwMjY0NTM5M30.KQPsN5UA-cCPr-6vAwL9zYgYmyoj6PTi1er0dusL5tU"
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const bodyParameters = {
    job_id: job.id,
    employee_id: applies.employee_id,
    status: status
  };
    try{
      axios.put(`http://recruitment.api.pythonistavn.com/api/v1/employers/${job.employer_id}/applies`,
      bodyParameters,
      config)
      .then(response =>  handleResponse(status, response, statusSetter))
    }
    catch(error){
      Alert.alert(error.response.data.detail)
    }
}

function GetStatusMapping(status) {
  var mapping = {
    pending: "Đang chờ",
    approved: "Thành công",
    rejected: "Thất bại"
  }
  return mapping[status]
}

function Applies(props) {
  const [status, setStatus] = React.useState("pending")
  var applies_data = props.applies;
  var navigation = props.navigatxion
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
        {applies_data.applies.map((applies, index) => {
          return (
            <Card key={index}>
              <CardItem header bordered>
                <Text>{GetStatusMapping(applies.status)}</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                    {applies.description}
                  </Text>
                  <Button primary onPress={() => { Linking.openURL(`https://${applies.cv}`) }}>
                    <Text>Xem CV</Text>
                  </Button>
                </Body>
              </CardItem>
              <CardItem footer bordered>
                <Button danger onPress={() => {ApplyStatus(applies, applies_data.job, "rejected", setStatus); navigation.navigate("JobRecruiting")}}>
                  <Text>Từ chối</Text>
                </Button>
                <Right>
                  <Button success onPress={() => { ApplyStatus(applies, applies_data.job, "approved", setStatus); navigation.navigate("JobRecruiting")}}>
                    <Text>Xác nhận</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
          );
        })}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default Applies;
