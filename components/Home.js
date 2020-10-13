import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Drawer from './Drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import JobCard from './JobCard';
import DetailJobForm from './DetailJobForm';
import ApplyForm from './EmployeeApplyForm';
import axios from 'axios';

function DetailJobScreen({ route, navigation }) {
    return (
        <DetailJobForm detail={route.params.job} navigation={navigation}/>
    );
}

function ApplyScreen({ route, navigation }) {
    return (
        <ApplyForm job={route.params.job} navigation={navigation}/>
    );
}

function HomeScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('API_URL')
          .then(response => setData(response.data))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    if(isLoading){
        return <View><Text>Loading.............</Text></View>
    }
    return (
        <View style={{ flex: 1 }}>
            <Drawer style={{ flex: 1 }} navigation={navigation} name={'Công Việc'} />
            <KeyboardAwareScrollView>
                {data.jobs.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('DetailJob', { job: item })}>
                            <JobCard job={item} />
                        </TouchableOpacity>
                    );
                })}
            </KeyboardAwareScrollView>
        </View>
    );
}

const RootStack = createStackNavigator();
function Jobs() {
    return (
        <RootStack.Navigator mode="modal" headerMode="none">
            <RootStack.Screen name="Jobs" component={HomeScreen} />
            <RootStack.Screen name="DetailJob" component={DetailJobScreen} />
            <RootStack.Screen name="ApplyScreen" component={ApplyScreen} />
        </RootStack.Navigator>
    );
}

export default Jobs;

