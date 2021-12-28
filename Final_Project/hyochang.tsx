import React, {useState} from "react";
import {View, Text, Alert, Image, Modal, StyleSheet, Pressable, ImageBackground} from "react-native";
import { Colors } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";

const HC = () => {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  const [modalVisible6, setModalVisible6] = useState(false);
    
  return  (
    <ImageBackground source={require('./images/map2.png')} style={{width:'100%', height :'100%'}}>
      <View style = {{flex:1, justifyContent : "flex-start", alignItems:"flex-start"}}>
        <View>
          <Icon name="location-pin" size={50} color="#ff0000" style={styles.location1} onPress={() => setModalVisible1(true)}/>
          <Modal animationType="slide" transparent={true} visible={modalVisible1} onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible1(!modalVisible1);}}>
          <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Bench Information</Text>
                <Image style={styles.tinyLogo} source={require('./images/bench1.jpg')}/>
                <Text style={styles.modalCText}>Coordinate : 37.5464 126.9631</Text>
                <Text style={styles.modalText}>Capacity : 4</Text>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible1(!modalVisible1)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <Icon name="location-pin" size={50} color="#ff0000" style={styles.location2} onPress={() => setModalVisible2(true)}/>
          <Modal animationType="slide" transparent={true} visible={modalVisible2} onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible2(!modalVisible2);}}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Bench Information</Text>
                <Image style={styles.tinyLogo} source={require('./images/bench2.jpg')}/>
                <Text style={styles.modalCText}>Coordinate : 37.5466 126.9626</Text>
                <Text style={styles.modalText}>Capacity : 4</Text>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible2(!modalVisible2)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <Icon name="location-pin" size={50} color="#ff0000" style={styles.location3} onPress={() => setModalVisible3(true)}/>
          <Modal animationType="slide" transparent={true} visible={modalVisible3} onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible3(!modalVisible3);}}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Bench Information</Text>
                <Image style={styles.tinyLogo} source={require('./images/bench3.jpg')}/>
                <Text style={styles.modalCText}>Coordinate : 37.5466 126.9624</Text>
                <Text style={styles.modalText}>Capacity : 6</Text>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible3(!modalVisible3)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <Icon name="location-pin" size={50} color="#ff0000" style={styles.location4} onPress={() => setModalVisible4(true)}/>
          <Modal animationType="slide" transparent={true} visible={modalVisible4} onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible4(!modalVisible4);}}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Bench Information</Text>
                <Image style={styles.tinyLogo} source={require('./images/bench4.jpg')}/>
                <Text style={styles.modalCText}>Coordinate : 37.5466 126.9621</Text>
                <Text style={styles.modalText}>Capacity : 6</Text>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible4(!modalVisible4)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <Icon name="location-pin" size={50} color="#ff0000" style={styles.location5} onPress={() => setModalVisible5(true)}/>
          <Modal animationType="slide" transparent={true} visible={modalVisible5} onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible5(!modalVisible5);}}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Bench Information</Text>
                <Image style={styles.tinyLogo} source={require('./images/bench5.jpg')}/>
                <Text style={styles.modalCText}>Coordinate : 37.5461 126.9627</Text>
                <Text style={styles.modalText}>Capacity : 8</Text>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible5(!modalVisible5)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <Icon name="location-pin" size={50} color="#ff0000" style={styles.location6} onPress={() => setModalVisible6(true)}/>
          <Modal animationType="slide" transparent={true} visible={modalVisible6} onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible6(!modalVisible6);}}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Bench Information</Text>
                <Image style={styles.tinyLogo} source={require('./images/bench6.jpg')}/>
                <Text style={styles.modalCText}>Coordinate : 37.5457 126.9621</Text>
                <Text style={styles.modalText}>Capacity : 8</Text>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible6(!modalVisible6)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

        </View>
      </View>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  centeredView: {flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22},
  modalView: {margin: 20, backgroundColor: 'white', borderRadius: 20, padding: 35, alignItems: "center", shadowColor: "#000", 
    shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5},
  button: {borderRadius: 20, padding: 10, elevation: 2},
  buttonClose: {backgroundColor: Colors.lightGreen500},
  textStyle: {color: "white", fontWeight: "bold", textAlign: "center"},
  modalTitle: {color: "black", fontWeight: "bold", textAlign: "center", marginBottom: 15},
  modalCText: {textAlign: "center"},
  modalText: {marginBottom: 15,textAlign: "center"},
  tinyLogo: {width: 200, height: 200, marginBottom: 15,},
  location1 : {position:"absolute", top:30, left:245},
  location2 : {position:"absolute", top:0, left:166},
  location3 : {position:"absolute", top:0, left:98},
  location4 : {position:"absolute", top:230, left:65},
  location5 : {position:"absolute", top:80, left:190},
  location6 : {position:"absolute", top:160, left:90}
});

export default HC;