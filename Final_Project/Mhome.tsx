import { useNavigation} from "@react-navigation/native";
import {View, Alert, Modal, Pressable} from "react-native";
import React, { useCallback, useState} from "react";
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from "react-native";
import { Colors } from "react-native-paper";


export default function MHome(){
    const navigation = useNavigation();
    const goHome = useCallback(() => {
      navigation.navigate("Hyochang Park")
    }, []);
    const [modalVisible, setModalVisible] = useState(false);

    return (
    <SafeAreaView style = {styles.safe}>
      <TouchableOpacity style= {styles.bar_hc} onPress={goHome}>
        <Text>Hyochang Park</Text>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.bar_ga} onPress={() => setModalVisible(true)}>
        <Text>Mt.Gwanak</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>개발중입니다!</Text>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
  safe: {flex: 1},
  view: {flex:1, alignItems: "center", justifyContent: "space-between"},
  bar_hc:{width: "80%", padding: 10, paddingLeft: 20, justifyContent: "flex-start", backgroundColor : "#ffffff", position:"absolute", top : 30, left : 40, borderWidth: 2,borderRadius: 5, borderStyle: 'solid',borderColor : "#DDDDDD"},
  bar_ga:{width: "80%", padding: 10, paddingLeft: 20, justifyContent: "flex-start",backgroundColor : "#ffffff", position:"absolute", top : 100, left : 40, borderWidth: 2,borderRadius: 5, borderStyle: 'solid', borderColor : "#DDDDDD"},
  centeredView: {flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22},
  modalView: { margin: 20, backgroundColor: 'white', borderRadius: 20, padding: 35, alignItems: "center", shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},shadowOpacity: 0.25, shadowRadius: 4, elevation: 5},
  button: {borderRadius: 20, padding: 10, elevation: 2},
  buttonClose: {backgroundColor: Colors.lightGreen500},
  textStyle: {color: "white", fontWeight: "bold", textAlign: "center"},
  modalTitle: {color: "black", fontWeight: "bold", textAlign: "center", marginBottom: 15}
});