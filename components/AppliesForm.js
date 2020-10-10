import React, { Component } from "react";
import { Card, CardItem, Text, Body, View, Right, Button } from "native-base";
import { SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Applies(props) {
  var applies_data = props.applies;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView>
      {applies_data.map((item, index) => {
        return (
          <View key={index}>
            {item.applies.map((applies, index) => {
              return (
                <Card key={index}>
                  <CardItem header bordered>
                    <Text>{applies.status}</Text>
                  </CardItem>
                  <CardItem bordered>
                    <Body>
                      <Text>
                        {applies.description}
                      </Text>
                      <Button primary>
                        <Text>
                          Xem CV
                        </Text>
                      </Button>
                    </Body>
                  </CardItem>
                  <CardItem footer bordered>
                  <Button danger><Text>Denial</Text></Button>
                  <Right>
                  <Button success><Text>Accept</Text></Button>
                  </Right>
                  </CardItem>
                </Card>
              );
            })}
          </View>
        );
      })}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
