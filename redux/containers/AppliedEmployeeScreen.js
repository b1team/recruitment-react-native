import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import {Card, CardItem, Button, Text, Body} from 'native-base' 
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Drawer from '../../components/Drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {fetchApplyEmployeeData} from '../actions/AppliedEmployee';

function GetStatusMapping(status) {
    var mapping = {
        pending: "Đang chờ",
        approved: "Thành công",
        rejected: "Thất bại"
    }
    return mapping[status]
}

function AppliedJobScreen({ navigation, dispatch, state, identities }) {
    console.log("TOKEN")
    console.log(token);
    const token = identities?.access_token
    const employee_id = identities?.employee_id
    useEffect(() => {
        dispatch(fetchApplyEmployeeData(employee_id, token))
      },[]);
    const data = state.data
    return (
        <View style={{ flex: 1 }}>
            <Drawer style={{ flex: 1 }} navigation={navigation} name={'Đã ứng tuyển'} />
            <KeyboardAwareScrollView>
                {data?.applied_job?.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('UpdateApplycreen', { job_id: item.job.id })}>
                            <Card pointerEvents='none' style={{ width: '100%' }}>
                                <CardItem header bordered>
                                    <Text style={{ fontSize: 20, marginRight: 5, width: '70%' }}>{item.job.title}</Text>
                                    <Button small style={{ height: 40}}>
                                        <Text numberOfLines={2} style={{ fontSize: 14, fontWeight: 'bold' }}>{GetStatusMapping(item.apply.status)}</Text>
                                    </Button>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Text numberOfLines={2}>
                                            {item?.job?.description}
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered>
                                    {item.job?.tags.map((tag, index) => {
                                        return (
                                            <Button rounded success key={index} style={{ marginLeft: 5, height: 40 }}>
                                                <Text numberOfLines={1} style={{ fontSize: 14 }}>{tag}</Text>
                                            </Button>
                                        );
                                    })}
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    );
                })}
            </KeyboardAwareScrollView>
        </View>
    );
}


function mapStateToProps(state) {
    return {
      state: state.ApplyEmployeeReducer,
      identities: state.authReducer.identities
    };
  }


export default connect(mapStateToProps)(AppliedJobScreen) 