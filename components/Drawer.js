import React from 'react';
import { Header, Left, Button, Icon, Title, Body, Container, Right } from 'native-base';


function Drawer(props) {
    return (
        <Header>
            <Left>
                <Button transparent onPress={() => props.navigation.openDrawer()}>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>
                    {props.name}
                </Title>
            </Body>
            <Right>
                {props.right ? props.right(props.rightProps) : null}
            </Right>
        </Header>
    );
}
export default Drawer;