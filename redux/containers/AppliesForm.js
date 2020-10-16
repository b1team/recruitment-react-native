import React, { useEffect, useState } from "react";
import { Linking, Alert } from 'react-native';
import { Card, CardItem, Text, Body, Right, Button } from "native-base";
import { SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { rejectAction, approveAction } from "../actions/employerUpdateApply";
import { connect } from 'react-redux';
import {fetchAppliesData} from '../actions/GetJobsApplies';

function GetStatusMapping(status) {
    var mapping = {
        pending: "Đang chờ",
        approved: "Thành công",
        rejected: "Thất bại"
    }
    return mapping[status]
}

function Applies({ route, state, navigation, dispatch }) {
    //nhan vao job_id
    job_id = route.params.job_id
    const { identities } = state.authReducer
    const new_applies = state.ApplyReducer
    console.log(new_applies);
    const { applied } = state.dataAppliesReducer.data
    // const employer_id = identities.employer_id
    const employer_id = identities.employer_id
    const [applies, setApplies] = useState([])
    var token = identities.access_token
    useEffect(() => {
        for (a of applied){
            if(a.job.id == job_id){
                setApplies(a.applies)
            }
        }
        for (apply of applies){
            if(apply.id == new_applies.apply_id){
                setApplies([{...applies, status: new_applies.status}])
        }
    }
    dispatch(fetchAppliesData(identities))
    }, [new_applies])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAwareScrollView>
                {applies.map((apply, index) => {
                    return (
                        <Card key={index}>
                            <CardItem header bordered>
                                <Text>{GetStatusMapping(apply.status)}</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        {apply.description}
                                    </Text>
                                    <Button primary onPress={() => { Linking.openURL(`https://${apply.cv}`) }}>
                                        <Text>Xem CV</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <Button danger onPress={() => dispatch(rejectAction(apply.id, employer_id, token)) }>
                                    <Text>Từ chối</Text>
                                </Button>
                                <Right>
                                    <Button success onPress={() => dispatch(approveAction(apply.id, employer_id, token))}>
                                        <Text>Xác nhận</Text>
                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
                    );
                })}
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

function mapStateToProps(state) {
    return {
        state: state,
    };
}


export default connect(mapStateToProps)(Applies);
