import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import theme from "../utils/theme";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryList from "../components/CategoryList";
import RowTopicList from "../components/RowTopicList";
import RowList from "../components/RowList";
import RowAuthorList from "../components/RowAuthorList";

import cover1 from "../../assets/covers/cover1.jpg";
import cover2 from "../../assets/covers/cover2.jpg";
import cover3 from "../../assets/covers/cover3.jpg";
import authorPic from "../../assets/authors/jamesmcbride.jpg";

import jk from "../../assets/authors/JK.png";
const SearchScreen = () => {
  const [focus, setFocus] = useState(false);
  return (
    <SafeAreaView style={theme.styles.mainContainer}>
      <ScrollView keyboardShouldPersistTaps="handled">
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
        <SearchBar onFocusChange={setFocus} />
        {focus ? (
          <View>
            <RowTopicList
              style={{ container: { marginBottom: 20 } }}
              name="Topics (4)"
              data={[
                {
                  header: "Crime",
                  bookCount: 17,
                  ratingCount: "3.2 (1452)",
                  authorId: 1,
                  coverPic: cover1,
                },
                {
                  header: "Crime1",
                  bookCount: 17,
                  ratingCount: "3.2 (1452)",
                  authorId: 1,
                  coverPic: cover1,
                },
                {
                  header: "Crime2",
                  bookCount: 17,
                  ratingCount: "3.2 (1452)",
                  authorId: 1,
                  coverPic: cover1,
                },
              ]}
            />
            <RowList
              name="Books (5)"
              style={{
                text: { fontSize: 16, color: theme.colors.mainPassive },
                container: { marginBottom: 20 },
              }}
              data={[
                {
                  header: "Deacon King Kong 1",
                  pageCount: "500",
                  authorName: "James McBride",
                  authorId: "1",
                  authorPic: authorPic,
                  storyId: "1",
                  coverPic: cover2,
                },
                {
                  header: "Deacon King Kong 2",
                  pageCount: "522",
                  authorName: "James",
                  authorId: "1",
                  authorPic: authorPic,
                  storyId: "1",
                  coverPic: cover1,
                },
                {
                  header: "Deacon King Kong 3",
                  pageCount: "100",
                  authorName: "McBride",
                  authorId: "1",
                  authorPic: authorPic,
                  storyId: "1",
                  coverPic: cover3,
                },
                {
                  header: "Deacon King Kong 11",
                  pageCount: "500",
                  authorName: "James McBride",
                  authorId: "1",
                  authorPic: authorPic,
                  storyId: "1",
                  coverPic: cover2,
                },
                {
                  header: "Deacon King Kong 22",
                  pageCount: "522",
                  authorName: "James",
                  authorId: "1",
                  authorPic: authorPic,
                  storyId: "1",
                  coverPic: cover1,
                },
              ]}
            />
            <RowAuthorList
              name="Authors (3)"
              data={[
                {
                  header: "J.K. Rowling1",
                  bookCount: 86,
                  color: theme.colors.activeRed,
                  pic: jk,
                },
                {
                  header: "J.K. Rowling2",
                  bookCount: 86,
                  color: theme.colors.activeRed,
                  pic: jk,
                },
                {
                  header: "J.K. Rowling3",
                  bookCount: 86,
                  color: theme.colors.activeRed,
                  pic: jk,
                },
              ]}
            />
          </View>
        ) : (
          <View>
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
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
