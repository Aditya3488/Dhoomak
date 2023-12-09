import { View, Text, Image } from "react-native";
import React,{useEffect} from "react";
import { MyColors } from "../utils/MyColors";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {

  const nav = useNavigation()

  useEffect(()=>{
    setTimeout(()=>{
      nav.replace('Signup')
    },2000)
  },[])

  return (
    <View
      style={{
        backgroundColor: MyColors.primary,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
        }}
      >
        <Image
          style={{ height: 75, width: 65 }}
          source={require("../../assets/mainIcon.png")}
        />
        <View>
          <Text style={{ fontSize: 45, color: MyColors.secondary }}>
            DHOOMAK
          </Text>
          <Text
            style={{
              fontSize: 17,
              letterSpacing: 6,
              textAlign: "center",
              color: MyColors.secondary,
              top: -8,
            }}
          >
            Online Groceries
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Splash;
