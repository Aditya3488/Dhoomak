import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyColors } from "../utils/MyColors";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { authentication, database } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import uuid from "react-native-uuid";

const Signup = () => {
  const [isVisible, setisVisible] = useState(true);
  const [usercradentials, setUsercradentials] = useState({
    name: "",
    email: "",
    Password: "",
  });
  const { name, email, password } = usercradentials;

  const nav = useNavigation();

  // const uid = authentication.currentUser.uid/
  const uid = uuid.v4();

  const userAccount = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(() => {
        nav.navigate("Login");
        setDoc(doc(database, "users", uid), {
          username: name,
          email: email,
          id: authentication.currentUser.uid,
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("That email address is invalid!");
        }

        Alert.alert(error);
      });
  };

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
            Sign Up
          </Text>
          <Text
            style={{
              color: "grey",
              fontWeight: "300",
              fontSize: 15,
              marginTop: 10,
            }}
          >
            Enter Your Credentials to Continue
          </Text>
          <Text
            style={{
              color: "grey",
              fontWeight: "500",
              fontSize: 15,
              marginTop: 50,
            }}
          >
            USERNAME
          </Text>
          <TextInput
            value={name}
            onChangeText={(val) => {
              setUsercradentials({ ...usercradentials, name: val });
            }}
            keyboardType="name-phone-pad"
            maxLength={15}
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
            EMAIL
          </Text>
          <TextInput
            value={email}
            onChangeText={(val) => {
              setUsercradentials({ ...usercradentials, email: val });
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
                setUsercradentials({ ...usercradentials, password: val });
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
              width: "95%",
              fontSize: 12,
              fontWeight: 300,
              color: "grey",
              marginTop: 15,
              letterSpacing: 0.7,
              lineHeight: 20,
            }}
          >
            By continuing you agree to our Terms of service and private policy
          </Text>
          <TouchableOpacity
            onPress={userAccount}
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
              Sign Up
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
            <Text style={{ fontSize: 15 }}>Already Have an Account ?</Text>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Login");
              }}
            >
              <Text style={{ fontSize: 16, color: MyColors.primary }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
