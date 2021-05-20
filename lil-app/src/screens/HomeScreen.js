import React from "react";
import { Text, StatusBar, StyleSheet, FlatList } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import theme from "../utils/theme";

import BookCard from "../components/BookCard";

import authorPic from "../../assets/authors/jamesmcbride.jpg";
import cover1 from "../../assets/covers/cover2.jpg";

const HomeScreen = () => {
  const DATA = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <SafeAreaView style={theme.styles.mainContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.barBg}
      />
      {/* <FlatList
        data={DATA}
        renderItem={(props) => <BookCard />}
        keyExtractor={(item) => item}
      /> */}
      <BookCard
        header="Deacon King Kong"
        description="A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn."
        pageCount="5200"
        ratingCount="4.3 (1250)"
        authorName="James McBride"
        authorId="1"
        authorPic={authorPic}
        storyId="1"
        coverPic={cover1}
        badgeText="OLD"
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
