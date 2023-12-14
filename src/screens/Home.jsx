import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeIcon from "../components/HomeIcon";
import { StatusBar } from "expo-status-bar";
import HomeSearch from "../components/HomeSearch";
import HomeBanner from "../components/HomeBanner";
import ProductTitles from "../components/ProductTitles";
import ProductCarousel from "../components/ProductCarousel";
import { fruits, vegetables } from "../utils/Date";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 20, paddingTop: 10 }}
      >
        <View style={{ gap: 20, paddingBottom: 20 }}>
          <StatusBar />
          <HomeIcon />
          <HomeSearch />
          <HomeBanner />
          <ProductTitles titles="Exculsive Offers" />
          <ProductCarousel data={fruits} />
          <ProductTitles titles="Exculsive Offers" />
          <ProductCarousel data={vegetables} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
