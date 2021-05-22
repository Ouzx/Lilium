import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import theme from "../utils/theme";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryList from "../components/CategoryList";
import MiniTopic from "../components/MiniTopic";
import AuthorCard from "../components/AuthorCard";
import cover1 from "../../assets/covers/cover1.jpg";
import jk from "../../assets/authors/JK.png";
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
        <SearchBar />

        <AuthorCard
          header="J.K. Rowling"
          bookCount={86}
          color={theme.colors.activeRed}
          pic={jk}
          style={{ marginHorizontal: 30, marginVertical: 10 }}
        />
        {/* <MiniTopic
          header="Crime"
          ratingCount="4.9 (1659)"
          bookCount={314}
          topicId="1"
          coverPic={cover1}
        /> */}

        {/* <CategoryList
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
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
