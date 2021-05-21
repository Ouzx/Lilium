import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import theme from "../utils/theme";

import CategoryList from "../components/CategoryList";
import Header from "../components/Header";

const SearchScreen = () => {
  return (
    <SafeAreaView style={theme.styles.mainContainer}>
      <ScrollView>
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

        <CategoryList
          name="The genres you read the most"
          data={[
            {
              name: "News and Politics",
              colors: ["#CCCDAE", "#44203B"],
            },
            {
              name: "Sci-fi",
              colors: ["#CDD424", "#BD1493"],
            },
            {
              name: "Magazine",
              colors: ["#6C22E3", "#44203B"],
            },
            {
              name: "Fantasy",
              colors: ["#FF07F5", "#C5F114"],
            },
          ]}
        />
        <CategoryList
          name="Categories"
          data={[
            {
              name: "News and Politics",
              colors: ["#CCCDAE", "#44203B"],
            },
            {
              name: "Sci-fi",
              colors: ["#CDD424", "#BD1493"],
            },
            {
              name: "Magazine",
              colors: ["#6C22E3", "#44203B"],
            },
            {
              name: "Fantasy",
              colors: ["#FF07F5", "#C5F114"],
            },
            {
              name: "News and Politics1",
              colors: ["#CCCDAE", "#44203B"],
            },
            {
              name: "Sci-fi1",
              colors: ["#CDD424", "#BD1493"],
            },
            {
              name: "Magazine1",
              colors: ["#6C22E3", "#44203B"],
            },
            {
              name: "Fantasy",
              colors: ["#FF07F5", "#C5F114"],
            },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
