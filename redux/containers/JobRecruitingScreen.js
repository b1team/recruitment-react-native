import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Drawer from '../../components/Drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import JobCard from '../../components/JobCard';
import {fetchAppliesData} from '../actions/GetJobsApplies';

function JobRecruitingScreen({navigation, dispatch, state}) {
    var token = "TOKEN"
    useEffect(() => {
        dispatch(fetchAppliesData(token))
      },[]);
    const data = state.data
    return (
        <View style={{ flex: 1 }}>
            <Drawer style={{ flex: 1 }} navigation={navigation} name={'Đang tuyển'} />
            <KeyboardAwareScrollView>
                {data?.applied?.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('Applies', { job_id: item.job.id })}>
                            <JobCard job={item.job} />
                        </TouchableOpacity>
                    );
                })}
            </KeyboardAwareScrollView>
        </View>
    );
}

function mapStateToProps(state) {
    return {
      state: state.dataAppliesReducer,
    };
  }


export default connect(mapStateToProps)(JobRecruitingScreen)