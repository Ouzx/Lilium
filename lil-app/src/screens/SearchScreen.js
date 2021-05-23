import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import theme from "../utils/theme";

import HWT from "../components/HWT";
import SearchBar from "../components/SearchBar";
import RowList from "../components/RowList";
import RowSectionList from "../components/RowSectionList";

import Genre from "../components/Genre";
import MiniTopic from "../components/MiniTopic";
import MiniBookCard from "../components/MiniBookCard";
import AuthorCard from "../components/AuthorCard";

import cover1 from "../../assets/covers/cover1.jpg";
import cover2 from "../../assets/covers/cover2.jpg";
import cover3 from "../../assets/covers/cover3.jpg";
import authorPic from "../../assets/authors/jamesmcbride.jpg";

import jk from "../../assets/authors/JK.png";
function SearchScreen() {
  const [focus, setFocus] = useState(false);
  const DATA = [
    {
      title: "The genres you read the most",
      data: [
        {
          id: "x1",
          name: "News and Politics",
          colors: ["#CCCDAE", "#44203B"],
        },
        {
          id: "11x",
          name: "Sci-fi",
          colors: ["#CDD424", "#BD1493"],
        },
        {
          id: "12x",
          name: "Magazine",
          colors: ["#6C22E3", "#44203B"],
        },
        {
          id: "13x",
          name: "Fantasy",
          colors: ["#FF07F5", "#C5F114"],
        },
      ],
    },
    {
      title: "Categories",
      data: [
        {
          id: "1y",
          name: "News and Politics",
          colors: ["#CCCDAE", "#44203B"],
        },
        {
          id: "1gy",
          name: "Sci-fi",
          colors: ["#CDD424", "#BD1493"],
        },
        {
          id: "1yf",
          name: "Magazine",
          colors: ["#6C22E3", "#44203B"],
        },
        {
          id: "1ye",
          name: "Fantasy",
          colors: ["#FF07F5", "#C5F114"],
        },
        {
          id: "1yd",
          name: "News and Politics1",
          colors: ["#CCCDAE", "#44203B"],
        },
        {
          id: "1yc",
          name: "Sci-fi1",
          colors: ["#CDD424", "#BD1493"],
        },
        {
          id: "1by",
          name: "Magazine1",
          colors: ["#6C22E3", "#44203B"],
        },
        {
          id: "1ayy",
          name: "Fantasy",
          colors: ["#FF07F5", "#C5F114"],
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={theme.styles.mainContainer}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <HWT text="Browse" />
        <SearchBar onFocusChange={setFocus} />
        {focus ? (
          <View>
            <RowList
              name="Topics (4)"
              RenderItem={MiniTopic}
              style={{
                text: {
                  color: theme.colors.passiveText,
                  fontSize: 16,
                  paddingLeft: theme.numbers.padding,
                },
                container: { marginBottom: 20 },
                renderItemStyle: { marginLeft: 10, marginVertical: 10 },
              }}
              isHorizontal={true}
              data={[
                {
                  id: "asd",
                  header: "Crime",
                  bookCount: 17,
                  ratingCount: "3.2 (1452)",
                  authorId: 1,
                  coverPic: cover1,
                },
                {
                  id: "asda",
                  header: "Crime1",
                  bookCount: 17,
                  ratingCount: "3.2 (1452)",
                  authorId: 1,
                  coverPic: cover1,
                },
                {
                  id: "asddd",
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
                renderItemStyle: { marginLeft: 10 },
                text: {
                  color: theme.colors.passiveText,
                  fontSize: 16,
                  paddingLeft: theme.numbers.padding,
                },
              }}
              RenderItem={MiniBookCard}
              isHorizontal={true}
              data={[
                {
                  id: "asd",
                  header: "Deacon King Kong 1",
                  pageCount: "500",
                  authorName: "James McBride",
                  authorId: "1",
                  authorPic: authorPic,
                  storyId: "1",
                  coverPic: cover2,
                },
                {
                  id: "as123d",
                  header: "Deacon King Kong 2",
                  pageCount: "522",
                  authorName: "James",
                  authorId: "1",
                  authorPic: authorPic,
                  storyId: "1",
                  coverPic: cover1,
                },
                {
                  id: "as412d",
                  header: "Deacon King Kong 3",
                  pageCount: "100",
                  authorName: "McBride",
                  authorId: "1",
                  authorPic: authorPic,
                  storyId: "1",
                  coverPic: cover3,
                },
                {
                  id: "as333d",
                  header: "Deacon King Kong 11",
                  pageCount: "500",
                  authorName: "James McBride",
                  authorId: "1",
                  authorPic: authorPic,
                  storyId: "1",
                  coverPic: cover2,
                },
                {
                  id: "asd111",
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

            <RowList
              name="Authors (3)"
              RenderItem={AuthorCard}
              isHorizontal={true}
              style={{
                text: {
                  paddingLeft: theme.numbers.padding,
                  fontSize: 16,
                  color: theme.colors.mainPassive,
                },
                renderItemStyle: { marginLeft: 10, marginVertical: 10 },
              }}
              data={[
                {
                  id: "123",
                  header: "J.K. Rowling1",
                  bookCount: 86,
                  color: theme.colors.activeRed,
                  pic: jk,
                },
                {
                  id: "1233",
                  header: "J.K. Rowling2",
                  bookCount: 86,
                  color: theme.colors.activeRed,
                  pic: jk,
                },
                {
                  id: "1213",
                  header: "J.K. Rowling3",
                  bookCount: 86,
                  color: theme.colors.activeRed,
                  pic: jk,
                },
              ]}
            />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <RowSectionList
              numColumns={2}
              RenderItem={Genre}
              style={{
                renderItemStyle: { marginHorizontal: 12, marginBottom: 24 },
                text: {
                  color: theme.colors.passiveText,
                  fontSize: 16,

                  paddingLeft: theme.numbers.padding,
                  paddingTop: 16,
                  paddingBottom: 16,
                },
              }}
              data={DATA}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default SearchScreen;
