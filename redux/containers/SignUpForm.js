import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Body, Item, Input, Button, Text } from 'native-base';
import MainLogo from '../../components/Logo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signup } from '../actions/signup';
import Loader from '../../components/LoaderScreen';

const styles = StyleSheet.create({
    username: {
        width: 350,
        marginTop: 10,
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
        justifyContent: 'center',
        alignSelf: "center"
    },
});


function signupButtonHandler(dispatch, email, password, name, phone_number) {
    if (email && password) {
        dispatch(signup(email, password, name, phone_number))
    }
}


function SignUpForm({ navigation, state, dispatch }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    return (
        <View style={{ flex: 1 }}>
            {state?.signupRequesting ? <Loader /> : null}
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <Body>
                    <MainLogo width={130} height={130} />
                    <View style={styles.formAlign}>
                        <Item style={styles.email}>
                            <Input placeholder='Email' style={styles.input} value={email} onChangeText={(e) => setEmail(e)} />
                        </Item>
                        <Item style={styles.password}>
                            <Input placeholder='Mật khẩu' secureTextEntry={true} style={styles.input} value={password} onChangeText={(p) => setPassword(p)} />
                        </Item>
                        <Item style={styles.username}>
                            <Input placeholder='Tên người dùng' Icon style={styles.input} value={name} onChangeText={(n) => setName(n)} />
                        </Item>
                        <Item style={styles.mobileNumber}>
                            <Input placeholder='Số điện thoại' Icon style={styles.input} value={phone_number} onChangeText={(p) => setPhoneNumber(p)} />
                        </Item>

                    </View>
                    <Button primary style={styles.button} onPress={() => { signupButtonHandler(dispatch, email, password, name, phone_number) }}>
                        <Text style={{ fontSize: 16 }}>Đăng ký</Text>
                    </Button>
                    <Text style={{ marginTop: 15 }}>Đã có tài khoản?
                        <Text style={{ color: 'blue' }} onPress={() => navigation.navigate("LoginForm")}> Đăng nhập</Text>
                    </Text>
                    {state?.error ? <Text style={{ color: "red" }}>{state?.errorMessage}</Text> : null}
                    {state?.signupDone ? <Text style={{ color: "green" }}>Đăng ký thành công</Text> : null}
                </Body>
            </KeyboardAwareScrollView>
        </View>
    );
}

function mapStateToProps(s) {
    return {
        state: s.signupReducer
    }
}


export default connect(mapStateToProps)(SignUpForm);
