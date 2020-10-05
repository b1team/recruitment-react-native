import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, Item, Input, Button, Text } from 'native-base';
import MainLogo from './Logo'
import Drawer from './Drawer';

const styles = StyleSheet.create({
    email: {
        width: 350,
    },
    password: {
        width: 350,
        marginTop: 15,
    },
    formAlign: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 12,
    },
    button: {
        width: 200,
        marginTop: 8,
        backgroundColor: '#0275d8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    newbutton: {
        padding: 10
    }
});

function TextInput() {
    return (
        <View style={styles.formAlign}>
            <Item style={styles.email}>
                <Input placeholder='Email' Icon style={styles.input} />
            </Item>
            <Item style={styles.password}>
                <Input placeholder='Mật khẩu' secureTextEntry={true} style={styles.input} />
            </Item>
        </View>
    );
};

function LoginButton() {
    return (
        <View>
            <Button success style={styles.button}>
                <Text style={{ fontSize: 16 }}>Đăng nhập</Text>
            </Button>
        </View>
    );
};

function LoginForm({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Drawer navigation={navigation} />
            <Body>
                <MainLogo width={150} height={150} />
                <TextInput />
                <LoginButton />
                <Text style={{ marginTop: 15 }}>Chưa có tài khoản?
                {/* TODO: link to sign up form */}
                    <Text style={{ color: 'blue' }} onPress={() => alert("sign up form")}> Đăng ký</Text>
                </Text>
            </Body>
        </View>
    );
};

export default LoginForm;