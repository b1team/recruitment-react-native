import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/Home';
import { Icon } from 'native-base';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}


const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          title: 'Trang chủ',
          drawerIcon: () => (
            <Icon
              name="md-home"
            />
          ),
        }} />

        <Drawer.Screen name="Login" component={LoginForm} options={{
          title: 'Đăng nhập',
          drawerIcon: () => (
            <Icon
              name="ios-person"
            />
          ),
        }} />
        <Drawer.Screen name="Profile" component={Profile} options={{
          title: 'Profile',
          drawerIcon: () => (
            <Icon
              name="ios-person"
            />
          ),
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
