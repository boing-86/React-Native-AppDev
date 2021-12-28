import React, {useCallback, useState} from "react";
import { View, StyleSheet, TouchableOpacity, Text, TextInput} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction} from "./store";
import type {AppState} from "./store"
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native-paper";

const Login = ()=>{
    const [uname, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState <string>("");
    const loggedIn  = useSelector<AppState, boolean>((state)=>state.loggedIn);
    const username = useSelector<AppState, string>((state)=>state.name);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const goHome = useCallback(()=>{navigation.navigate("Home")}, []);

    const doLogin = useCallback(()=>{
        dispatch(loginAction(uname, email, pass));
        navigation.navigate("Setting");
    },[uname]);

    const doLogout = useCallback(()=>{
        dispatch(logoutAction());
        navigation.navigate("Setting");
    },[]);

    if(loggedIn){
        return(
            <View style = {styles.view}>
                <Text style = {styles.text}>Hello {username}!</Text>
                <Text style = {styles.text}>The recommended Walking zone is</Text>
                <Text style = {styles.text}>Hyochang Park!!!</Text>
                <TouchableOpacity style = {styles.button} onPress = {goHome}>
                <Text style = {styles.text}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress = {doLogout}>
                <Text style = {styles.text}>Logout</Text>
            </TouchableOpacity>
            </View>
        );
    }
    else{
        return(
        <View style = {styles.view}>
            <View style = {styles.textView}>
                <Text style = {styles.text}>Username</Text>
                <TextInput value = {uname} onChangeText = {setName} style = {styles.textInput}></TextInput>
                <Text style = {styles.text}>Email</Text>
                <TextInput value = {email} onChangeText = {setEmail} style = {styles.textInput}></TextInput>
                <Text style = {styles.text}>password</Text>
                <TextInput value = {pass} onChangeText = {setPass} style = {styles.textInput} secureTextEntry={true}></TextInput>
                <TouchableOpacity style = {styles.button} onPress={doLogin}>
                    <Text style = {styles.text}>Enter</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    view:{flex : 1, backgroundColor : "white", justifyContent : "center", alignItems : "center"},
    text : {fontSize : 20, color : "black", margin : 10},
    textView :{width : 300, height : 50, margin : 10, justifyContent : "center", alignItems : "center"},
    textInput : {width : 300, height : 50, fontSize : 20, color : "black", margin : 10, borderWidth : 1, borderRadius : 5, backgroundColor : "white"},
    button : {borderWidth : 1, borderRadius : 5, borderColor : Colors.lightGreen800, elevation: 2, width : 300, height : 50, backgroundColor : Colors.lightGreen500, justifyContent : "center", alignItems : "center", margin : 10}
})

export default Login;