import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Card, CardItem, Body, Text, Button, Item } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Drawer from '../../components/Drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from "react-redux";
import AppliedJobScreen from './AppliedEmployeeScreen';
import UpdateApplyForm from './UpdateApplyEmployee';


function UpdateApplycreen({ route, navigation, dispatch }) {
    return (
        <UpdateApplyForm job_id={route.params.job_id} navigation={navigation} dispatch={dispatch}/>
    );
}

const RootStack = createStackNavigator();
function AppliedStack() {
    return (
        <RootStack.Navigator mode="modal" headerMode="none">
            <RootStack.Screen name="AppliedJob" component={AppliedJobScreen} />
            <RootStack.Screen name="UpdateApplycreen" component={UpdateApplycreen}/>
        </RootStack.Navigator>
    );
}

function mapStateToProps(state) {
    return {
        state: state,
        identites: state.authReducer.identites
    };
}


export default connect(mapStateToProps)(AppliedStack);

