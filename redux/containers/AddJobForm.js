import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Item, Input, Button, Text, Form, Textarea, Icon, List } from 'native-base';
import Drawer from '../../components/Drawer';
import styles from '../../Style/CrudJobStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import {addJob} from '../actions/addJob';
import Loader from '../../components/LoaderScreen';


function parseTags(tagsString) {
    return tagsString.trim().toLowerCase().replace(" ", "-").split(",")
}


function AddJobForm({ navigation, identities, addJobState, dispatch }) {
    const [jobTitle, setJobTitle] = React.useState("")
    const [salary, setSalary] = React.useState(0)
    const [address, setAddress] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [tags, setTags] = React.useState("")
    const jobData = {
        title: jobTitle,
        salary: salary,
        address: address,
        description: description,
        tags: parseTags(tags)
    }
    return (
        <View style={{ flex: 1 }}>
            {addJobState.addJobReqesting? <Loader/> : null}
            <Drawer navigation={navigation} name={"Thêm việc"} />
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <Item style={styles.textInput}>
                    <Input placeholder='Tên công việc' style={styles.input} value={jobTitle} onChangeText={(t) => setJobTitle(t)}/>
                </Item>
                <View style={styles.numberPad}>
                    <TextInput
                        placeholder="Nhập mức lương"
                        style={styles.numberPadInput}
                        keyboardType={'numeric'}
                        value={String(salary)}
                        onChangeText={(s) => setSalary(s)}
                    />
                </View>
                <Item style={styles.textInput}>
                    <Input placeholder='Địa chỉ' style={styles.input} value={address} onChangeText={(a) => setAddress(a)}/>
                </Item>
                <Form>
                    <Textarea rowSpan={5} bordered placeholder="Desciption" value={description} onChangeText={(d) => setDescription(d)}/>
                </Form>
                <Item style={styles.textInput}>
                    <Input placeholder='Gán thẻ' style={styles.input} value={tags} onChangeText={(t) => setTags(t)}/>
                </Item>
                <View>
                    <Button success style={styles.button} onPress={() => {dispatch(addJob(identities, jobData))}}>
                        <Text style={{ fontSize: 16 }}>Thêm</Text>
                    </Button>
                    <Button success style={styles.destroyButton} onPress={() => navigation.navigate("Home")}>
                        <Text style={{ fontSize: 16 }}>Hủy</Text>
                    </Button>
                </View>
                {addJobState?.addJobDone && !addJobState?.error ? <Text style={{margin: 10, textAlign: "center", color: "green"}}>Thêm công việc thành công</Text>: null}
                {addJobState?.error ? <Text style={{textAlign: "center", color: "red", margin: 10}}>{addJobState?.errorMessage}</Text>: null}
            </KeyboardAwareScrollView>
        </View>
    );
}

function mapStateToProps(state) {
    return {
        identities: state.authReducer.identities,
        addJobState: state.addJobReducer
    }
    
}

export default connect(mapStateToProps)(AddJobForm);