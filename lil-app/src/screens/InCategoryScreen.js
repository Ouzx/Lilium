import React, { useState } from "react";
import { StyleSheet, Text, StatusBar, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import theme from "../utils/theme";

import HWT from "../components/HWT";
import BookCount from "../components/BookCount";
import Tabs from "../components/Tabs";
import RowList from "../components/RowList";
import BookCard from "../components/BookCard";
import RatingCount from "../components/RatingCount";
import AuthorCount from "../components/AuthorCount";
import Button from "../components/Button";

import authorPic from "../../assets/authors/jamesmcbride.jpg";
import cover1 from "../../assets/covers/cover1.jpg";
import cover2 from "../../assets/covers/cover2.jpg";
import cover3 from "../../assets/covers/cover3.jpg";
import cover3Blur from "../../assets/covers/cover3Blur.png";

const InCategoryScreen = () => {
  const tabs = ["Popular", "Latest", "Authors", "Your Books"];
  // selectedIndex will only effect the source of data but components will stay same.
  const [selectedId, setId] = useState(tabs[0]);
  const data = [
    {
      id: "1",
      header: "Deacon King Kong 1",
      description:
        "A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn.",
      ratingCount: "4.3 (1250)",
      pageCount: "500",
      authorName: "James McBride",
      authorId: "1",
      authorPic: authorPic,
      storyId: "1",
      coverPic: cover2,
    },
    {
      id: "12",
      header: "Deacon King Kong 1",
      description:
        "A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn.",
      ratingCount: "4.3 (1250)",
      pageCount: "500",
      authorName: "James McBride",
      authorId: "1",
      authorPic: authorPic,
      storyId: "1",
      coverPic: cover2,
    },
    {
      id: "123",
      header: "Deacon King Kong 1",
      description:
        "A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn.",
      ratingCount: "4.3 (1250)",
      pageCount: "500",
      authorName: "James McBride",
      authorId: "1",
      authorPic: authorPic,
      storyId: "1",
      coverPic: cover2,
    },
  ];
  const onChange = (id) => {
    setId(id);
  };

  return (
    <SafeAreaView style={theme.styles.mainContainer}>
      <HWT text="Positive psychology" />
      <View
        style={{
          marginLeft: 30,
          marginTop: 30,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <AuthorCount authorCount="1.224" />
        <BookCount bookCount="1.286" style={{ marginHorizontal: 20 }} />
        <RatingCount ratingCount="4.9 (11926)" />
      </View>
      <View
        style={{
          marginLeft: 30,
          marginTop: 30,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Button
          text="Subscribe"
          style={{
            text: {
              width: 72,
              height: 27,
              fontSize: 16,
              color: theme.colors.activeText,
            },
            button: {
              width: 155,
              height: 51,
              backgroundColor: theme.colors.blue,
              marginRight: 20,
            },
          }}
        />
        <Text style={{ fontSize: 14, color: "white" }}>+4.7k followers</Text>
      </View>
      <Tabs
        data={tabs}
        style={[{ marginLeft: 30, marginTop: 20 }]}
        onChange={onChange}
      />
      <RowList
        RenderItem={BookCard}
        isHorizontal={false}
        style={{
          container: { flex: 1 },
          renderItemStyle: {
            marginHorizontal: theme.numbers.padding,
            marginTop: theme.numbers.padding - 10,
            marginBottom: 10,
          },
        }}
        data={data}
      />
    </SafeAreaView>
  );
};

export default InCategoryScreen;
