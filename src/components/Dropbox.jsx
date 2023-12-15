import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "../utils/Date";
import { AntDesign } from "@expo/vector-icons";

const Dropbox = () => {
  const [myindex, setmyIndex] = useState();
  const [toggle, settoggle] = useState(false);
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={Dropdown}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                setmyIndex(index);
                settoggle(!toggle);
              }}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBlockColor: "#e3e3e3",
                borderBottomWidth: 2,
                marginBottom: 10,
                paddingVertical: 20,
              }}
            >
              <Text>{item.title}</Text>
              <AntDesign
                name={myindex == index && toggle ? "down" : "right"}
                size={24}
                color="black"
              />
              {/* <Text>{item.content}</Text> */}
            </TouchableOpacity>
            {myindex == index && toggle ? <Text>{item.content}</Text> : null}
          </View>
        )}
      />
    </View>
  );
};

export default Dropbox;
