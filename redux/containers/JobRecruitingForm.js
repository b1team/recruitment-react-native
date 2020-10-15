import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Applies from './AppliesForm';
import { connect } from 'react-redux';
import JobRecruitingScreen from './JobRecruitingScreen';

function AppliesScreen({ route, navigation, dispatch }) {
    return (
        <Applies job_id={route.params.job_id} navigation={navigation} dispatch={dispatch} />
    );
}

const RootStack = createStackNavigator();
function JobRecruitingStack() {
    return (
        <RootStack.Navigator mode="modal" headerMode="none">
            <RootStack.Screen name="JobRecruiting" component={JobRecruitingScreen} />
            <RootStack.Screen name="Applies" component={AppliesScreen} />
        </RootStack.Navigator>
    );
}
function mapStateToProps(state) {
    return {
        state: state,
    };
}


export default connect(mapStateToProps)(JobRecruitingStack);

