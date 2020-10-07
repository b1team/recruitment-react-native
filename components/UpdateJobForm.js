import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Item, Input, Button, Text, Form, Textarea} from 'native-base';
import Drawer from './Drawer';
import styles from '../Style/CrudJobStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


var fake_data = {
    title: 'python dev',
    salary: 2000,
    address: 'hanoi',
    description: 'lm moi thu',
    tag: ['python', 'mongodb']
}


function Buttons() {
    return (
        <View>
            <Button success style={styles.button}>
                <Text style={{ fontSize: 16 }}>Sửa thông tin</Text>
            </Button>
            <Button success style={styles.destroyButton}>
                <Text style={{ fontSize: 16 }}>Hủy</Text>
            </Button>
        </View>
    );s
};

function UpdateJobForm({ navigation }) {
    const [job_title, changeJobTitle] = useState(fake_data.title);
    const [job_salary, changeJobSalary] = useState(fake_data.salary);
    const [job_address, changeJobAddress] = useState(fake_data.address);
    const [job_description, changeJD] = useState(fake_data.description);
    const [job_tags, changeJobTag] = useState(fake_data.tag);

    return (
        <View style={{ flex: 1 }}>
            <Drawer navigation={navigation} name={"Sửa công việc"} />
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <Item style={styles.textInput}>
                    <Input placeholder='Tên công việc' style={styles.input} value={job_title} onChangeText={new_title => changeJobTitle(new_title)} />
                </Item>
                <View style={styles.numberPad}>
                    <TextInput
                        placeholder="Nhập mức lương"
                        style={styles.numberPadInput}
                        keyboardType="number-pad"
                        value={String(job_salary)} onChangeText={new_salary=> changeJobSalary(Number(new_salary))}
                    />
                </View>
                <Item style={styles.textInput}>
                    <Input placeholder='Địa chỉ' style={styles.input} value={job_address} onChangeText={new_address => changeJobAddress(new_address)}/>
                </Item>
                <Form>
                    <Textarea rowSpan={5} bordered placeholder="Desciption" value={job_description} onChangeText={new_JD => changeJD(new_JD)}/>
                </Form>
                <Item style={styles.textInput}>
                    <Input placeholder='Gán thẻ' style={styles.input} value={job_tags.join()} onChangeText={new_tag => changeJobTag(new_tag.split(','))}/>
                </Item>
                <Buttons />
            </KeyboardAwareScrollView>
        </View>
    );
}

export default UpdateJobForm;