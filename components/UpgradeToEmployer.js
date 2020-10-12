import React from 'react';
import { View } from 'react-native';
import { Text, Container, Header, Content, Form, Item, Label, Input } from 'native-base';


function UpgradeToEmployerForm({ }) {
    return (
        <Container>
          <Header />
          <Content>
            <Form>
              <Item fixedLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item fixedLabel last>
                <Label>Password</Label>
                <Input />
              </Item>
            </Form>
          </Content>
        </Container>
      );
};

export default UpgradeToEmployerForm;