import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Card, CardItem, Body, Text, Button, Right } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Drawer from './Drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

var fake_data = [
    {
        jobs:{
            title: 'Fullstack Devs',
            desciption: 'The customer is of the biggest Singapore global technology',
            tags: ['Python', 'ReactJS', 'VueJS']
        },
        apply: {
            status:'Thành công'
        }
    },
    {
        jobs:{
            title: 'Python Developer',
            desciption: 'Nghiên cứu yêu cầu nghiệp vụ và thiết kế của dự án',
            tags: ['Python', 'Database', 'Business Analyst']
        },
        apply: {
            status:'Thất bại'
        }
    },
    {
        jobs:{
            title: 'DATA ENGINEER (BIG DATA) (Python, Java) ',
            desciption: 'Building and optimizing ‘big data’ data pipelines',
            tags: ['Python', 'Java', 'Scala ']
        },
        apply: {
            status:'Đang chờ'
        }
    },
    {
        jobs:{
            title: 'Senior Android Developers (Kotlin, Java)',
            desciption: 'Decide which technologies are going to be used and define the overall architecture',
            tags: ['Android', 'Java', 'Kotlin ']
        },
        apply: {
            status:'Đang chờ'
        }
    },
    {
        jobs:{
            title: 'Sr. iOS Developers (Objective C, Swift) ',
            desciption: 'Decide which technologies are going to be used and define the overall architecture.',
            tags: ['Swift', 'Objective C', 'iOS']
        },
        apply: {
            status:'Thành công'
        }
    },
    {
        jobs:{
            title: 'Junior Project Manager ',
            desciption: 'We are a growing company and are looking for a full time Project Manager ',
            tags: ['Project Manager', 'Agile', 'English']
        },
        apply: {
            status:'Thất bại'
        }
    },

]
      

function DetailJobScreen() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is detail job!</Text>
      </SafeAreaView>
    );
  }

function AppliedJobScreen({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <Drawer style={{ flex: 1 }} navigation={navigation} name={'Đã ứng tuyển'} />
            <KeyboardAwareScrollView>
                {fake_data.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}  onPress={() => navigation.navigate('DetailJob')}>
                            <Card pointerEvents='none'>
                                <CardItem header bordered>
                                    <Text style={{fontSize: 20, marginRight: 5}}>{item.jobs.title}
                                    <Button small primary style={{height:40, width:100}}>
                                            <Text style={{fontSize:14, fontWeight:'bold'}}>{item.apply.status}</Text>
                                        </Button>
                                    </Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Text>
                                            {item.jobs.desciption}
                                        </Text>
                                    </Body>
                                </CardItem>
                                    <CardItem footer bordered>
                                        {item.jobs.tags.map((tag, index) => {
                                            return (
                                                <Button rounded success key={index} style={{marginLeft:5, height:40}}>
                                                    <Text style={{fontSize:14}}>{tag}</Text>
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
function Applied() {
    return (
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen name="AppliedJob" component={AppliedJobScreen} />
          <RootStack.Screen name="DetailJob" component={DetailJobScreen} />
        </RootStack.Navigator>
    );
  }
  
  export default Applied;
  
