import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Form, Label, Item, Input, Button, Text } from 'native-base';
import TextAvatar from 'react-native-text-avatar';
import { connect } from 'react-redux';
import Drawer from './Drawer';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { get_user_type_mapping } from "../Utils"
import { createStackNavigator } from '@react-navigation/stack';
import UpgradeSelectForm from './UpgradeSelector';
import LoginFlow from '../redux/containers/LoginForm';
import { logoutAction } from '../redux/actions/auth';



function get_avatar_text(name) {
    name = name.toUpperCase()
    if (name == "") {
        return "N a N"
    }
    return name.match(/\b(\w)/g).join("");
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
        <View style={styles.avatar, { alignSelf: "center" }}>

            <TextAvatar
                backgroundColor={'black'}
                textColor={'white'}
                size={128}
                type={'circle'} // optional
            >{props.name}</TextAvatar>
        </View>
    );
}

function UpgradeButton(props) {
    if (props.current_user_type != "viewer") {
        return null;
    }
    return (
        <Button transparent onPress={() => { props.navigation.navigate("UpgradeSelectForm") }}><Text>Nâng cấp</Text></Button>
    );
}


function Profile({ navigation, state, dispatch }) {
    const { identities } = state.authReducer
    const user = identities
    if (user?.access_token == null) {
        return <LoginFlow navigation={navigation} />
    }
    var user_type = get_user_type_mapping(user.user_type)
    return (
        <View style={{ flex: 1 }}>
            <Drawer navigation={navigation} right={UpgradeButton} name="Người dùng" rightProps={{ current_user_type: user.user_type, navigation: navigation }} />
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <Avatar name={get_avatar_text(user.name)}></Avatar>
                <View>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input value={user.email} disabled />
                        </Item>
                        <Item>
                            <Label>Bạn là:</Label>
                            <Input value={user_type} disabled />
                            <Button></Button>
                        </Item>
                        <Item floatingLabel>
                            <Label>Họ Và Tên</Label>
                            <Input disabled value={user.name} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Số điện thoại</Label>
                            <Input disabled value={user.phone_number} />
                        </Item>
                        <Button danger style={styles.button, { alignSelf: "center", marginTop: 10 }} onPress={() => { dispatch(logoutAction()) }} >
                            <Text>Đăng xuất</Text>
                        </Button>
                    </Form>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

const ProfileStack = createStackNavigator();

function ProfileScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Profile"
                component={connect(mapStateToProps)(Profile)}
                options={{
                    title: "Người dùng",
                    headerShown: false
                }}
            />
            <ProfileStack.Screen name="UpgradeSelectForm" component={UpgradeSelectForm} options={{ title: "Nâng cấp tài khoản" }} />
        </ProfileStack.Navigator>
    );
}

function mapStateToProps(state) {
    return {
        state: state,
    };
}

export default ProfileScreen;