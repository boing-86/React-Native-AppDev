import React, {useCallback} from "react";
import {Text, } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import type {RouteProp, ParamListBase} from "@react-navigation/native";
import MHome from "./Mhome";
import Login from "./Login";
import HC from "./hyochang";
import { Colors } from "react-native-paper";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

type TabBarIconProps = {
  focused: boolean, 
  color: string, 
  size: number
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Choose a Path" component={MHome} />
      <HomeStack.Screen name="Hyochang Park" component={HC} />
    </HomeStack.Navigator>
  );
} 

const icons: Record<string, string[]> = {
  Home: ["home-circle", "home-circle-outline"],
  Setting: ["book", "book-outline"],
};

const MainNavigator = () => {
  const screenOptions = useCallback(({route}: {route: RouteProp<ParamListBase, string>})=>{
    return {
      tabBarIcon: ({focused, color, size}:TabBarIconProps) => {
        const {name} = route;
        const focusedSize = focused? size+6 : size;
        const focusedColor = focused? Colors.lightGreen500 : color;
        const [icon, iconOutline] = icons[name];
        const iconName = focused ? icon : iconOutline;
        return (<Icon name = {iconName} size = {focusedSize} color = {focusedColor}/>);
      }
    }
  },[]);

  return (
    <Tab.Navigator screenOptions = {screenOptions}>
      <Tab.Screen name = "Home" component = {HomeStackScreen} options={({route})=>({
        tabBarLabel : ({focused})=>(
        <Text style={focused ? {color:Colors.lightGreen500, fontSize:13} : {color:"#8e8e8e", fontSize:13}}>HOME</Text>
      )})}/>
      <Tab.Screen name = "Setting" component = {Login} options={({route})=>({
        tabBarLabel : ({focused})=>(
        <Text style={focused ? {color:Colors.lightGreen500, fontSize:13} : {color:"#8e8e8e", fontSize:13}}>SETTING</Text>
      )})}/>
    </Tab.Navigator>
  );
}

export default MainNavigator;