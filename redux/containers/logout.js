import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Form, Label, Item, Input, Button, Text } from 'native-base';
import TextAvatar from 'react-native-text-avatar';
import Drawer from './Drawer';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { get_user_type_mapping } from "../Utils"
import { createStackNavigator } from '@react-navigation/stack';
import UpgradeSelectForm from './UpgradeSelector';
import LoginForm from './LoginForm';


var api_data = {
    user: {
        user_id: 1,
        email: "it.vuonglv@gmail.com",
        name: "Tu tung",
        user_type: "viewer",
        // user_type: "employee",
        phone_number: "0347197799"
    }
}

var isSignedIn = true


function get_avatar_text(name) {
    name = name.toUpperCase()
    if (name == "") {
        return "N a N"
    }
    return name.replace(/([a-z]+) .* ([a-z]+)/i, "$1 $2");
}


const styles = StyleSheet.create({
    avatar: {
        marginBottom: 10,
        textAlign: "center",
        justifyContent: "center"
    },
    formAlign: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 350,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 12,
    },
    button: {
        width: 200,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

function Avatar(props) {
    return (
        <View style={styles.avatar, {alignSelf: "center"}}>

            <TextAvatar
                backgroundColor={'black'}
                textColor={'white'}
                size={128}
                type={'circle'} // optional
            >{props.name}</TextAvatar>
        </View>
    );
}

function TextInput(props) {
    const [name, setName] = React.useState(props.user.name)
    const [phoneNumber, setPhoneNumber] = React.useState(props.user.phone_number)
    const [disabled, setDisabled] = React.useState(true)
    React.useEffect(() => {
        setDisabled(name == props.user.name && phoneNumber == props.user.phone_number)
    }, [phoneNumber, name])
    var user_type = get_user_type_mapping(props.user.user_type)
    return (
        <View>
            <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input value={props.user.email} disabled />
                </Item>
                <Item>
                    <Label>Bạn là:</Label>
                    <Input value={user_type} disabled />
                    <Button></Button>
                </Item>
                <Item floatingLabel>
                    <Label>Họ Và Tên</Label>
                    <Input value={name} onChangeText={(value) => setName(value)} />
                </Item>
                <Item floatingLabel>
                    <Label>Số điện thoại</Label>
                    <Input value={phoneNumber} keyboardType="number-pad" onChangeText={(value) => setPhoneNumber(value)} />
                </Item>
                <Button style={styles.button, {alignSelf: "center", marginTop: 10}} onPress={() => { Alert.alert("Update") }} disabled={disabled}>
                    <Text>Cập nhật thông tin</Text>
                </Button>
            </Form>
        </View>
    );
};


function UpgradeButton(props) {
    if (props.current_user_type != "viewer") {
        return null;
    }
    return (
        <Button transparent onPress={() => { props.navigation.navigate("UpgradeSelectForm") }}><Text>Nâng cấp</Text></Button>
    );
}


function Profile({ navigation }) {
    if(!isSignedIn){
        return <LoginForm navigation={navigation} />
    }
    return (
        <View style={{ flex: 1 }}>
            <Drawer navigation={navigation} right={UpgradeButton} name="Người dùng" rightProps={{ current_user_type: api_data.user.user_type, navigation: navigation }} />
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <Avatar name={get_avatar_text(api_data.user.name)}></Avatar>
                <TextInput user={api_data.user} />
            </KeyboardAwareScrollView>
        </View>
    );
};

const ProfileStack = createStackNavigator();

function LogoutScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: "Người dùng",
                    headerShown: false
                }}
            />
            <ProfileStack.Screen name="UpgradeSelectForm" component={UpgradeSelectForm} options={{title: "Nâng cấp tài khoản"}}/>
        </ProfileStack.Navigator>
    );
}

export default LogoutScreen;