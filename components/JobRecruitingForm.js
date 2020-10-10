import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Card, CardItem, Body, Text, Button, Item } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Drawer from './Drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import JobCard from './JobCard';
import Applies from './AppliesForm';


var fake_data = {
    applied: [
        {
            job: {
                title: 'Fullstack Devs',
                desciption: 'The customer is of the iggest Singapore global technology',
                tags: ['Python', 'ReactJS', 'VueJS']
            },
            applies: [
                {
                    status: "pending",
                    employee_id: 30,
                    description: "Decide which technologies are going to be used and define the overall architecture",
                    cv: "link o dau day"
                },
                {
                    status: "approved",
                    employee_id: 29,
                    description: "Decide which technologies are going to be used and define the overall architecture",
                    cv: "link cx o dau day"
                },
                {
                    status: "rejected",
                    employee_id: 28,
                    description: "Decide which technologies are going to be used and define the overall architecture",
                    cv: "link o dau day"
                }
            ]
        },
        {
            job: {
                title: 'Python Developer',
                desciption: 'Nghiên cứu yêu cầu nghiệp vụ và thiết kế của dự án',
                tags: ['Python', 'Database', 'Business Analyst']
            },
            applies: [
                {
                    status: "approved",
                    employee_id: 29,
                    description: "Building and optimizing ‘big data’ data pipelines",
                    cv: "link cx o dau day"
                },
                {
                    status: "rejected",
                    employee_id: 28,
                    description: "Building and optimizing ‘big data’ data pipelines",
                    cv: "link o dau day"
                }
            ]
        }
    ],
}

function AppliesScreen(){
    return(
        <Applies applies={fake_data.applied}/>
    );
}


function JobRecruitingScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Drawer style={{ flex: 1 }} navigation={navigation} name={'Đang tuyển'} />
            <KeyboardAwareScrollView>
                {fake_data.applied.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('Applies')}>
                            <JobCard job={item.job}/>
                        </TouchableOpacity>
                    );
                })}
            </KeyboardAwareScrollView>
        </View>
    );
}

const RootStack = createStackNavigator();
function App() {
    return (
        <RootStack.Navigator mode="modal" headerMode="none">
            <RootStack.Screen name="JobRecruiting" component={JobRecruitingScreen} />
            <RootStack.Screen name="Applies" component={AppliesScreen} />
        </RootStack.Navigator>
    );
}

export default App;

