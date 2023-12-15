import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { fruits } from "../utils/Date";
import { Entypo } from "@expo/vector-icons";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { MyColors } from "../utils/MyColors";
import { useNavigation } from "@react-navigation/native";

const ProductCarousel = ({data}) => {
  const nav = useNavigation()
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
          onPress={()=>{
            nav.navigate('Details',{
              main:item
            })
          }}
          activeOpacity={0.7}
            style={{
              borderWidth: 2,
              borderColor: "#e3e3e3",
              height: responsiveHeight(28),
              width: responsiveWidth(45),
              marginRight: 15,
              borderRadius: 15,
            }}
          >
            <Image
              style={{ height: 100,width:100,alignSelf:'center', resizeMode: "contain" }}
              source={{ uri: item.img }}
            />
            <View style={{ paddingHorizontal: 10, gap: 3 }}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "200" }}>
                {item.pieces},Price
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems:'center',
                  marginTop:6
                }}
              >
                <Text style={{fontSize:20,fontWeight:'bold'}}>₹ {item.price}</Text>
                <Entypo
                  name="squared-plus"
                  size={33}
                  color={MyColors.primary}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductCarousel;
