import React from 'react';
import { Header, Left, Button, Icon } from 'native-base';


function Drawer(props) {
    return (
        <Header>
            <Left>
                <Button transparent onPress={() => props.navigation.openDrawer()}>
                    <Icon name='menu' />
                </Button>
            </Left>
        </Header>
    );
}
export default Drawer;