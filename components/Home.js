import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Card, CardItem, Body, Text, Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Drawer from './Drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import JobCard from './JobCard';
import DetailJobForm from './DetailJobForm';

var fake_data = {
    jobs: [
        {
            title: 'Fullstack Devs',
            salary: 2000,
            address: 'ha noi',
            desciption: 'Chance to work in the professional environment of the biggest company. Join a project to build mobile applications for pilots who have to bring a ton of paper documents into the airplane to prepare for a flight, and build apps to help pilots easily verify all information related to Airplane, Weather and Charting of stations of the flight. You’ll be working alongside other engineers and developers, collaborating on the various layers of the infrastructure for our client’s application.',
            tags: ['Python', 'ReactJS', 'VueJS']
        },
        {
            title: 'Python Developer',
            salary: 1000,
            address: 'ha noi',
            desciption: 'Nghiên cứu yêu cầu nghiệp vụ và thiết kế của dự án',
            tags: ['Python', 'Database', 'Business Analyst']
        },
        {
            title: 'DATA ENGINEER (BIG DATA) (Python, Java) ',
            salary: 2000,
            address: 'ho chi minh',
            desciption: 'Building and optimizing ‘big data’ data pipelines',
            tags: ['Python', 'Java', 'Scala ']
        },
        {
            title: 'Senior Android Developers (Kotlin, Java)',
            salary: 3000,
            address: 'ha noi',
            desciption: 'Decide which technologies are going to be used and define the overall architecture',
            tags: ['Android', 'Java', 'Kotlin ']
        },
        {
            title: 'Sr. iOS Developers (Objective C, Swift) ',
            salary: 2000,
            address: 'Da nang',
            desciption: 'Decide which technologies are going to be used and define the overall architecture.',
            tags: ['Swift', 'Objective C', 'iOS']
        },
        {
            title: 'Junior Project Manager ',
            salary: 1200,
            address: 'ho chi minh',
            desciption: 'We are a growing company and are looking for a full time Project Manager ',
            tags: ['Project Manager', 'Agile', 'English']
        }
    ],
}

function DetailJobScreen() {
    return (
        <DetailJobForm detail={fake_data.jobs}/>
    );
}

function HomeScreen({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <Drawer style={{ flex: 1 }} navigation={navigation} name={'Công Việc'} />
            <KeyboardAwareScrollView>
                {fake_data.jobs.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('DetailJob')}>
                            <JobCard job={item}/>
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
        </RootStack.Navigator>
    );
}

export default Jobs;

