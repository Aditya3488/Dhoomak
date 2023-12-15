import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Dropbox from "../components/Dropbox";
import { MyColors } from "../utils/MyColors";

const Details = ({route}) => {
    const {name, pieces,price,img} = route.params.main
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, gap: 20}}>
      <View>
        <Image
        resizeMode='contain'
          style={{
            height: 200,
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}
          source={{
            uri: img
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
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Text>
          <MaterialIcons name="favorite-border" size={25} color="red" />
        </View>
        <Text style={{ fontSize: 15, color: "grey", marginTop: 5 }}>
          {pieces}, Price
        </Text>
        <Text style={{ fontSize: 25, marginTop: 5, fontWeight: "bold" }}>
        ₹{price}
        </Text>
        <Dropbox />
        <View
        >
          <TouchableOpacity
            style={{
              backgroundColor: MyColors.primary,
              height: 70,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 17,
                color: MyColors.secondary,
                fontWeight: "bold",
              }}
            >
              Add to Basket
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Details;
