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
function SearchScreen({navigation}) {
  const [focus, setFocus] = useState(false);
  const DATA = [
    {
      title: "The genres you read the most",
      data: [
        {
          key: "x1",
          name: "News and Politics",
          colors: ["#CCCDAE", "#44203B"],
        },
        {
          key: "11x",
          name: "Sci-fi",
          colors: ["#CDD424", "#BD1493"],
        },
        {
          key: "12x",
          name: "Magazine",
          colors: ["#6C22E3", "#44203B"],
        },
        {
          key: "13x",
          name: "Fantasy",
          colors: ["#FF07F5", "#C5F114"],
        },
      ],
    },
    {
      title: "Categories",
      data: [
        {
          key: "1y",
          name: "News and Politics",
          colors: ["#CCCDAE", "#44203B"],
        },
        {
          key: "1gy",
          name: "Sci-fi",
          colors: ["#CDD424", "#BD1493"],
        },
        {
          key: "1yvvf",
          name: "Magazine",
          colors: ["#6C22E3", "#44203B"],
        },
        {
          key: "1yevxc",
          name: "Fantasy",
          colors: ["#FF07F5", "#C5F114"],
        },
        {
          key: "1yvvcxxd",
          name: "News and Politics1",
          colors: ["#CCCDAE", "#44203B"],
        },
        {
          key: "1vxcvxcvxcvyc",
          name: "Sci-fi1",
          colors: ["#CDD424", "#BD1493"],
        },
        {
          key: "1bvxcvxcbnnvby",
          name: "Magazine1",
          colors: ["#6C22E3", "#44203B"],
        },
        {
          key: "1ayghjghjy",
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
              navigate={navigation.navigate}
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
                  key: "asdx",
                  header: "Crime",
                  bookCount: 17,
                  ratingCount: "3.2 (1452)",
                  authorId: 1,
                  coverPic: cover1,
                },
                {
                  key: "asdayy",
                  header: "Crime1",
                  bookCount: 17,
                  ratingCount: "3.2 (1452)",
                  authorId: 1,
                  coverPic: cover1,
                },
                {
                  key: "asddfghfgd",
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
              navigate={navigation.navigate}
              isHorizontal={true}
              data={[
                {
                  key: "asd",
                  header: "Deacon King Kong 1",
                  pageCount: "500",
                  authorName: "James McBride",
                  authorId: "1",
                  authorPic: authorPic,
                  storyId: "1",
                  coverPic: cover2,
                },
                {
                  key: "as123d",
                  header: "Deacon King Kong 2",
                  pageCount: "522",
                  authorName: "James",
                  authorId: "1",
                  authorPic: authorPic,
                  storyId: "1",
                  coverPic: cover1,
                },
                {
                  key: "as412d",
                  header: "Deacon King Kong 3",
                  pageCount: "100",
                  authorName: "McBride",
                  authorId: "1",
                  authorPic: authorPic,
                  storyId: "1",
                  coverPic: cover3,
                },
                {
                  key: "as333d",
                  header: "Deacon King Kong 11",
                  pageCount: "500",
                  authorName: "James McBride",
                  authorId: "1",
                  authorPic: authorPic,
                  storyId: "1",
                  coverPic: cover2,
                },
                {
                  key: "asd111",
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
                  key: "12mm3",
                  header: "J.K. Rowling1",
                  bookCount: 86,
                  color: theme.colors.activeRed,
                  pic: jk,
                },
                {
                  key: "12mmm33",
                  header: "J.K. Rowling2",
                  bookCount: 86,
                  color: theme.colors.activeRed,
                  pic: jk,
                },
                {
                  key: "12m13",
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
              navigate={navigation.navigate}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default SearchScreen;
