import React from "react";
import { Text, StatusBar, StyleSheet, FlatList } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import theme from "../utils/theme";

import BookCard from "../components/BookCard";
import Header from "../components/Header";

import authorPic from "../../assets/authors/jamesmcbride.jpg";
import cover1 from "../../assets/covers/cover1.jpg";
import cover2 from "../../assets/covers/cover2.jpg";
import cover3 from "../../assets/covers/cover3.jpg";

const HomeScreen = () => {
  const DATA = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <SafeAreaView
      style={[
        theme.styles.mainContainer,
        { justifyContent: "space-between", padding: 30 },
      ]}
    >
      <Header />
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
        badgeText="POPULAR"
      />
      <BookCard
        header="Harry Potter"
        description="A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn."
        pageCount="5200"
        ratingCount="4.3 (1250)"
        authorName="James McBride"
        authorId="1"
        authorPic={authorPic}
        storyId="1"
        coverPic={cover2}
        badgeText="NEW"
        badgeColor={theme.colors.purple}
      />
      <BookCard
        header="Twilight"
        description="A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn."
        pageCount="5200"
        ratingCount="4.3 (1250)"
        authorName="James McBride"
        authorId="1"
        authorPic={authorPic}
        storyId="1"
        coverPic={cover3}
        badgeText="LEGEND"
        badgeColor={theme.colors.blue}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
