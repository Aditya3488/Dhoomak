import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Dropbox from "../components/Dropbox";

const Details = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, gap: 20 }}>
      <View>
        <Image
          style={{
            height: 200,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}
          source={{
            uri: "https://img.freepik.com/free-photo/delicious-red-apples-studio_23-2150811013.jpg?size=626&ext=jpg&uid=R94678817&ga=GA1.1.470225386.1702588561&semt=sph",
          }}
        />
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            position: "absolute",
            width: "100%",
            paddingHorizontal: 15,
            alignItems: "center",
          }}
        >
          <Ionicons
            onPress={() => {
              nav.goBack();
            }}
            name="ios-chevron-back-sharp"
            size={28}
            color="black"
          />
          <Feather name="share" size={28} color="black" />
        </View>
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "600" }}>
            Natural Fresh Apple
          </Text>
          <MaterialIcons name="favorite-border" size={25} color="red" />
        </View>
        <Text style={{ fontSize: 15, color: "grey", marginTop: 5 }}>
          1Kg, Price
        </Text>
        <Text style={{ fontSize: 25, marginTop: 5,fontWeight:'bold' }}>
          $4.99
        </Text>
        <Dropbox />
      </View>
    </SafeAreaView>
  );
};
export default Details;
