import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Alert,
} from "react-native";
import db from "../config";

export default class BookDonateScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  userSignUp = (username, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .then((response) => {
        return Alert.alert("User Added Successfully");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };
  userLogin = (username, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, passsword)
      .then(() => {
        return Alert.alert("Successfull Login");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };
  render() {
    return (
      <View style={{backgroundColor:"cyan"}}>
        <Text
          style={{
            color: "grey",
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 55,
            marginTop:400,
          }}
        >
          USERNAME
        </Text>
        
        <View style={{ alignItems: "center" }}>
          <TextInput
            style={StyleSheet.loginBox}
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                username: text,
              });
            }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={[styles.button, { marginBottom: 10 }]}
            onPress={() => {
              this.userLogin(this.state.username, this.state.password);
            }}
          >
            <Text
              style={{ color: "#ff5722", fontSize: 18, fontWeight: "bold" }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userSignUp(this.state.username, this.state.password);
            }}
          >
            <Text
              style={{ color: "#ff5722", fontSize: 18, fontWeight: "bold" }}
            >
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#897",
  },
  loginBox: {
    width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    marginTop: 10,
    paddingLeft: 10,
    borderColor: "#ff3",
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "#436",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 50,
  },
});
