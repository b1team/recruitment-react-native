import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, Item, Input, Button, Text } from 'native-base';
import MainLogo from '../../components/Logo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
    username: {
        width: 350,
    },
    mobileNumber: {
        width: 350,
        marginTop: 10,
    },
    email: {
        width: 350,
        marginTop: 10,
    },
    password: {
        width: 350,
        marginTop: 10,
    },
    formAlign: {
        flex: 0.7,
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
        marginTop: 15,
        backgroundColor: '#0275d8',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function TextInput() {
    return (
        <View style={styles.formAlign}>
            <Item style={styles.username}>
                <Input placeholder='Tên người dùng' Icon style={styles.input} />
            </Item>
            <Item style={styles.mobileNumber}>
                <Input placeholder='Số điện thoại' Icon style={styles.input} />
            </Item>
            <Item style={styles.email}>
                <Input placeholder='Email' style={styles.input} />
            </Item>
            <Item style={styles.password}>
                <Input placeholder='Mật khẩu' secureTextEntry={true} style={styles.input} />
            </Item>
        </View>
    );
};



function SignUpButton() {
    return (
        <View>
            <Button success style={styles.button}>
                <Text style={{ fontSize: 16 }}>Đăng ký</Text>
            </Button>
        </View>
    );
};


function SignUpForm({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <Body>
                    <MainLogo width={130} height={130} />
                    <TextInput />
                    <SignUpButton />
                    <Text style={{ marginTop: 15 }}>Đã có tài khoản?
                    {/* TODO: link to login form */}
                        <Text style={{ color: 'blue' }} onPress={() => navigation.navigate("LoginForm")}> Đăng nhập</Text>
                    </Text>
                </Body>
            </KeyboardAwareScrollView>
        </View>
    );
}

export default SignUpForm;
