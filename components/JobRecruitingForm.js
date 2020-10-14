import React, {useState, useEffect} from 'react';
import { View, SafeAreaView } from 'react-native';
import { Card, CardItem, Body, Text, Button, Item } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Drawer from './Drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import JobCard from './JobCard';
import Applies from './AppliesForm';
import axios from 'axios';

function AppliesScreen({ route, navigation }) {
    return (
        <Applies applies={route.params.applied} navigation={navigation}/>
    );
}


function JobRecruitingScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJ0dW5nbnRAZ21haWwuY29tIiwidXNlcl90eXBlIjoiZW1wbG95ZXIiLCJuYW1lIjoidHVuZ250IiwidXBkYXRlZCI6IjIwMjAtMTAtMTJUMTY6MTM6MjIuNjk4MDk1IiwiZW1wbG95ZXJfaWQiOjIsImVtcGxveWVlX2lkIjpudWxsLCJleHAiOjE2MDMyNTAxOTMsImlhdCI6MTYwMjY0NTM5M30.KQPsN5UA-cCPr-6vAwL9zYgYmyoj6PTi1er0dusL5tU"
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    var employer_id = 2
    useEffect(() => {
        axios.get(`http://recruitment.api.pythonistavn.com/api/v1/employers/${employer_id}/applies`,
        config)
        .then(response => setData(response.data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);
    if (isLoading) {
        return <View><Text>Loading.............</Text></View>
    }
    return (
        <View style={{ flex: 1 }}>
            <Drawer style={{ flex: 1 }} navigation={navigation} name={'Đang tuyển'} />
            <KeyboardAwareScrollView>
                {data.applied.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('Applies', { applied: item})}>
                            <JobCard job={item.job} />
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

