import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { Text, Item, Input, Icon } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Drawer from "./Drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import JobCard from "./JobCard";

var fake_data = {
  jobs: [
    {
      title: "Fullstack Devs",
      desciption: "The customer is of the biggest Singapore global technology",
      tags: ["Python", "ReactJS", "VueJS"],
    },
    {
      title: "Python Developer",
      desciption: "Nghiên cứu yêu cầu nghiệp vụ và thiết kế của dự án",
      tags: ["Python", "Database", "Business Analyst"],
    },
    {
      title: "DATA ENGINEER (BIG DATA) (Python, Java) ",
      desciption: "Building and optimizing ‘big data’ data pipelines",
      tags: ["Python", "Java", "Scala "],
    },
    {
      title: "Senior Android Developers (Kotlin, Java)",
      desciption:
        "Decide which technologies are going to be used and define the overall architecture",
      tags: ["Android", "Java", "Kotlin "],
    },
    {
      title: "Sr. iOS Developers (Objective C, Swift) ",
      desciption:
        "Decide which technologies are going to be used and define the overall architecture.",
      tags: ["Swift", "Objective C", "iOS"],
    },
    {
      title: "Junior Project Manager ",
      desciption:
        "We are a growing company and are looking for a full time Project Manager ",
      tags: ["Project Manager", "Agile", "English"],
    },
  ],
};

function DetailJobScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ fontSize: 30 }}>This is detail job!</Text>
    </SafeAreaView>
  );
}

function SearchBox(props) {
  function search(searchQuery) {
    // Call api voi search query
    props.externalStates.setJobs(fake_data.jobs);
  }
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <View searchBar rounded>
      <Item>
        <Input placeholder="Search" />
        <Icon name="ios-search" onPress={() => search(searchQuery)} />
      </Item>
    </View>
  );
}

function ViewJob(props) {
  return (
    <KeyboardAwareScrollView>
      {props.externalStates.jobs.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => props.navigation.navigate("DetailJob")}
          >
            <JobCard job={item} />
          </TouchableOpacity>
        );
      })}
    </KeyboardAwareScrollView>
  );
}

function SearchScreen({ navigation }) {
  const [jobs, setJobs] = useState([]);
  var states = {
    jobs: jobs,
    setJobs: setJobs,
  };
  return (
    <View style={{ flex: 1 }}>
      <Drawer style={{ flex: 1 }} navigation={navigation} name={"Search"} />
      <SearchBox externalStates={states} />
      <ViewJob externalStates={states} navigation={navigation} />
    </View>
  );
}

const RootStack = createStackNavigator();
function Jobs() {
  return (
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Search" component={SearchScreen} />
      <RootStack.Screen name="DetailJob" component={DetailJobScreen} />
    </RootStack.Navigator>
  );
}

export default Jobs;
