import React from "react";
import { StyleSheet, Text, StatusBar, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import theme from "../utils/theme";

import Genre from "../components/Genre";
import Header from "../components/Header";

const SearchScreen = () => {
  return (
    <SafeAreaView style={theme.styles.mainContainer}>
      <View
        style={{
          paddingLeft: theme.numbers.padding,
          paddingTop: theme.numbers.padding,
        }}
      >
        <Header />
        <Text
          style={{
            marginTop: 35,
            color: "white",
            fontSize: 48,
            fontWeight: "bold",
          }}
        >
          Browse
        </Text>
      </View>

      <Text style={styles.text}>The genres you read the most</Text>

      <View style={{ alignContent: "center", justifyContent: "center" }}>
        <View
          style={{
            alignItems: "flex-start",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 16,
          }}
        >
          <Genre name="News and Politics" colors={["#CCCDAE", "#44203B"]} />
          <Genre name="Sci-fi" colors={["#CDD424", "#BD1493"]} />
          <Genre name="Magazine" colors={["#6C22E3", "#44203B"]} />
          <Genre name="Fantasy" colors={["#FF07F5", "#C5F114"]} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.passiveText,
    fontSize: 16,

    paddingLeft: theme.numbers.padding,
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default SearchScreen;
