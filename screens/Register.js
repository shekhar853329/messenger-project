import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  handleRegister = () => {
    console.log("yes");
    const user = {
      name: name,
      email: email,
      password: password,
      image: image,
    };
    axios
      .post("http://localhost:8000/register", user)
      .then((reponse) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
        setImage("");
      })
      .catch((err) => {
        console.log("Registration Failed", err);
      });
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.view1}>
          <Text style={styles.text1}>Register</Text>
          <Text style={styles.text2}>Register an account</Text>
        </View>
        <View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "grey",
                marginTop: 30,
              }}
            >
              Email
            </Text>
            <TextInput
              placeholder="Enter the email"
              placeholderTextColor={"black"}
              style={{
                borderBottomColor: "grey",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "grey",
                marginTop: 30,
              }}
            >
              Name
            </Text>
            <TextInput
              placeholder="Enter the name"
              placeholderTextColor={"black"}
              style={{
                borderBottomColor: "grey",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              value={name}
              onChangeText={(value) => setName(value)}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "grey",
                marginTop: 30,
              }}
            >
              Password
            </Text>
            <TextInput
              placeholder="Enter the Password"
              placeholderTextColor={"black"}
              style={{
                borderBottomColor: "grey",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              value={password}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "grey",
                marginTop: 30,
              }}
            >
              Image
            </Text>
            <TextInput
              placeholder="Enter the Image"
              placeholderTextColor={"black"}
              style={{
                borderBottomColor: "grey",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
              value={image}
              onChangeText={(value) => setImage(value)}
            />
          </View>

          <Pressable
            style={{
              width: 200,
              backgroundColor: "#4A55A2",
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
              borderRadius: 6,
            }}
            onPress={handleRegister}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Register
            </Text>
          </Pressable>
          <Pressable
            style={{ marginTop: 15 }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ textAlign: "center", color: "grey", fontSize: 16 }}>
              Already have an account. Login
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
  },
  view1: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: "#4A55A2",
    fontSize: 17,
    marginTop: 15,
  },
  text2: {
    color: "#4A55A2",
    fontSize: 17,
  },
});
