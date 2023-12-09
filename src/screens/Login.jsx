import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyColors } from "../utils/MyColors";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../firebaseConfig";


const Login = () => {
  const nav = useNavigation();
  const [isVisible, setisVisible] = useState(true);
  const [logincradentials, setLogincradentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = logincradentials;

  const userLogin = ()=>{
    signInWithEmailAndPassword(authentication,email,password).then((val)=>{
     nav.replace('Home')
    }).catch((err)=>{
      Alert.alert(err.message)
    })
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: MyColors.secondary }}>
      <StatusBar />
      <ScrollView style={{ flex: 1, paddingTop: 30 }}>
        <Image
          style={{ alignSelf: "center" }}
          source={require("../../assets/mainIcon.png")}
        />
        <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
          <Text
            style={{ color: MyColors.third, fontSize: 25, fontWeight: "bold" }}
          >
            Login
          </Text>
          <Text
            style={{
              color: "grey",
              fontWeight: "300",
              fontSize: 15,
              marginTop: 10,
            }}
          >
            Enter Your Email and Password
          </Text>
          <Text
            style={{
              color: "grey",
              fontWeight: "500",
              fontSize: 15,
              marginTop: 20,
            }}
          >
            EMAIL
          </Text>
          <TextInput
            value={email}
            onChangeText={(val) => {
              setLogincradentials({ ...logincradentials, email: val });
            }}
            keyboardType="email-address"
            style={{
              borderBottomWidth: 1,
              borderColor: "grey",
              fontSize: 15,
              marginTop: 10,
            }}
          />
          <Text
            style={{
              color: "grey",
              fontWeight: "500",
              fontSize: 15,
              marginTop: 20,
            }}
          >
            PASSWORD
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderColor: "grey",
            }}
          >
            <TextInput
              value={password}
              onChangeText={(val) => {
                setLogincradentials({ ...logincradentials, password: val });
              }}
              maxLength={8}
              secureTextEntry={isVisible}
              keyboardType="ascii-capable"
              style={{
                fontSize: 15,
                marginTop: 10,
                flex: 0.9,
              }}
            />
            <Ionicons
              onPress={() => setisVisible(!isVisible)}
              name={isVisible == true ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="black"
            />
          </View>
          <Text
            numberOfLines={2}
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: "red",
              marginTop: 15,
              textAlign: "right",
            }}
          >
            Forgot Password?
          </Text>
          <TouchableOpacity
            onPress={userLogin}
            style={{
              backgroundColor: MyColors.primary,
              marginTop: 30,
              height: 60,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: MyColors.secondary, fontSize: 20 }}>
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
              gap: 5,
            }}
          >
            <Text style={{ fontSize: 15 }}>Don't Have an Account ?</Text>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Signup");
              }}
            >
              <Text style={{ fontSize: 16, color: MyColors.primary }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
