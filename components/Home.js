import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Card, CardItem, Body, Text, Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Drawer from './Drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

var fake_data = {
    jobs: [
        {
            title: 'Fullstack Devs',
            desciption: 'The customer is of the biggest Singapore global technology',
            tags: ['Python', 'ReactJS', 'VueJS']
        },
        {
            title: 'Python Developer',
            desciption: 'Nghiên cứu yêu cầu nghiệp vụ và thiết kế của dự án',
            tags: ['Python', 'Database', 'Business Analyst']
        },
        {
            title: 'DATA ENGINEER (BIG DATA) (Python, Java) ',
            desciption: 'Building and optimizing ‘big data’ data pipelines',
            tags: ['Python', 'Java', 'Scala ']
        },
        {
            title: 'Senior Android Developers (Kotlin, Java)',
            desciption: 'Decide which technologies are going to be used and define the overall architecture',
            tags: ['Android', 'Java', 'Kotlin ']
        },
        {
            title: 'Sr. iOS Developers (Objective C, Swift) ',
            desciption: 'Decide which technologies are going to be used and define the overall architecture.',
            tags: ['Swift', 'Objective C', 'iOS']
        },
        {
            title: 'Junior Project Manager ',
            desciption: 'We are a growing company and are looking for a full time Project Manager ',
            tags: ['Project Manager', 'Agile', 'English']
        }
    ],
}

function DetailJobScreen() {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>This is detail job!</Text>
        </SafeAreaView>
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
                            <Card pointerEvents='none'>
                                <CardItem header bordered>
                                    <Text style={{ fontSize: 20 }}>{item.title}</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Text>
                                            {item.desciption}
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer bordered>
                                    {item.tags.map((tag, index) => {
                                        return (
                                            <Button rounded success key={index} style={{ marginLeft: 5, height: 40 }}>
                                                <Text style={{ fontSize: 14 }}>{tag}</Text>
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

