import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from "axios";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(false);

  const handleRegister = () => {
    const user = {
      name,
      email,
      password,
    };

    axios
      .post("http://192.168.0.103:3000/register", user)
      .then((resp) => {
        console.log(resp);
        Alert.alert(
          "Registration successfull",
          "You have been registered successfully",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]
        );
        setEmail("");
        setName("");
        setPassword("");
      })
      .catch((error) => {
        if (error.response) {
          // Server responded with error (like 400, 409 etc.)
          console.log("Error Response:", error.response.data);
          Alert.alert(
            "Registration Failed",
            error.response.data.message || "Something went wrong"
          );
        } else if (error.request) {
          // Request made but no response
          console.log("No Response:", error.request);
          Alert.alert("Server Error", "No response from server");
        } else {
          // Something else
          console.log("Error Message:", error.message);
          Alert.alert("Error", error.message);
        }
      });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }}
    >
      <View style={{ height: 200, backgroundColor: "pink", width: "100%" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Image
            style={{ width: 150, height: 80, resizeMode: "contain" }}
            source={{
              uri: "https://cdn4.iconfinder.com/data/icons/modern-dating-crayons-vol-2/256/Match-512.png",
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Match Mate
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 25,
              color: "#F9629F",
            }}
          >
            Signup to your Account
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQgolgB2ETvIdDrDE3qprcjCANJPb_6TCYYyyDao2lF0NfR0kXk5DEl6zow8_-w0Lag-I&usqp=CAU",
            }}
            style={{ width: 100, height: 100, resizeMode: "cover" }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#FFC0CB",
            paddingVertical: 5,
            borderRadius: 5,
            marginTop: 15,
            paddingHorizontal: 10,
          }}
        >
          <MaterialIcons name="person" size={24} color="black" />
          <TextInput
            style={{ color: "#000", marginVertical: 5, width: 300 }}
            value={name}
            onChangeText={(e) => setName(e)}
            placeholder="Enter your name"
            placeholderTextColor={"#7F8CAA"}
          />
        </View>

        <View style={{ marginTop: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FFC0CB",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 20,
              paddingHorizontal: 10,
            }}
          >
            <MaterialIcons name="email" size={24} color="black" />
            <TextInput
              style={{ color: "#000", marginVertical: 5, width: 300 }}
              value={email}
              onChangeText={(e) => setEmail(e)}
              placeholder="Enter your email"
              placeholderTextColor={"#7F8CAA"}
            />
          </View>

          <View style={{ marginTop: 5 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#FFC0CB",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 20,
                paddingHorizontal: 10,
              }}
            >
              <AntDesign
                onPress={() => setSecure((prev) => !prev)}
                name={secure ? "eye" : "eyeo"}
                size={24}
                color="black"
              />
              <TextInput
                value={password}
                onChangeText={(e) => setPassword(e)}
                style={{ color: "#000", marginVertical: 5, width: 300 }}
                placeholder="Enter your password"
                secureTextEntry={!secure}
                placeholderTextColor={"#7F8CAA"}
              />
            </View>
          </View>

          <View style={{ marginTop: 50 }} />

          <TouchableOpacity
            onPress={handleRegister}
            style={{
              width: 200,
              backgroundColor: "#FFB8E0",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
              elevation: 6,
              borderWidth: 0.8,
              borderColor: "pink",
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
            >
              Register
            </Text>
          </TouchableOpacity>

          <Pressable
            onPress={() => router.replace("/login")}
            style={{ marginTop: 18 }}
          >
            <Text
              style={{ textAlign: "center", color: "#7F8CAA", fontSize: 17 }}
            >
              Already have an account? Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
