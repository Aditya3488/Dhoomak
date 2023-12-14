import { View, Text,TextInput } from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { EvilIcons } from '@expo/vector-icons';

const HomeSearch = () => {
  return (
    <View
      style={{
        backgroundColor: "#e4e4e4",
        height: responsiveHeight(6.4),
        borderRadius: 15,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        gap:5
      }}
    >
      <EvilIcons name="search" size={24} color="black" />
      <TextInput style={{flex:1}} placeholder="Search Products" />
    </View>
  );
};

export default HomeSearch;
