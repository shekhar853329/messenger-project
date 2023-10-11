import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.view1}>
          <Text style={styles.text1}>Login</Text>
          <Text style={styles.text2}>Login to your account</Text>
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
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </Pressable>
          <Pressable
            style={{ marginTop: 15 }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ textAlign: "center", color: "grey", fontSize: 16 }}>
              Don't have an account. Sign up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

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
