import React, {useState} from 'react';
import { View, TextInput } from 'react-native';
import { Item, Input, Button, Text, Form, Textarea, Icon, List } from 'native-base';
import Drawer from './Drawer';
import styles from '../Style/CrudJobStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


function Numberic() {
    return (
        <View style={styles.numberPad}>
            <TextInput
                placeholder="Nhập mức lương"
                style={styles.numberPadInput}
                keyboardType={'numeric'}
            />
        </View>
    );
}

function Description() {
    return (
        <Form>
            <Textarea rowSpan={5} bordered placeholder="Desciption" />
        </Form>
    );
}

function Buttons() {
    return (
        <View>
            <Button success style={styles.button}>
                <Text style={{ fontSize: 16 }}>Thêm</Text>
            </Button>
            <Button success style={styles.destroyButton}>
                <Text style={{ fontSize: 16 }}>Hủy</Text>
            </Button>
        </View>
    );
};

function AddJobForm({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Drawer navigation={navigation} name={"Thêm việc"} />
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <Item style={styles.textInput}>
                    <Input placeholder='Tên công việc' style={styles.input} />
                </Item>
                <Numberic />
                <Item style={styles.textInput}>
                    <Input placeholder='Địa chỉ' style={styles.input} />
                </Item>
                <Description />
                <Item style={styles.textInput}>
                    <Input placeholder='Gán thẻ' style={styles.input} />
                </Item>
                <Buttons />
            </KeyboardAwareScrollView>
        </View>
    );
}

export default AddJobForm;