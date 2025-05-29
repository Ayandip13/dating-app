import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const Login = () => {
  const [secure, setSecure] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

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
            Login to your Account
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
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#FFC0CB",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
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
          <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Keep me logged in</Text>
            <Text
              style={{
                color: "#007FFF",
                fontWeight: "500",
                textDecorationLine: "underline",
              }}
            >
              Forgot Password
            </Text>
          </View>

          <View style={{ marginTop: 50 }} />

          <TouchableOpacity
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
              Login
            </Text>
          </TouchableOpacity>

          <Pressable
            onPress={() => router.replace("/register")}
            style={{ marginTop: 18 }}
          >
            <Text
              style={{ textAlign: "center", color: "#7F8CAA", fontSize: 17 }}
            >
              Don't have an account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
