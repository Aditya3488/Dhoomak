import { View, Text, Image } from "react-native";
import React from "react";

const HomeIcon = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{ width: 55, height: 55 }}
        source={require("../../assets/mainIcon.png")}
      />
    </View>
  );
};

export default HomeIcon;
