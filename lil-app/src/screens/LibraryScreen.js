import React, { useState } from "react";
import { StyleSheet, Text, StatusBar, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import theme from "../utils/theme";

import ScrollableHeader from "../components/ScrollableHeader";
import Header from "../components/Header";
import BookCount from "../components/BookCount";
import Tabs from "../components/Tabs";
import BookCard from "../components/BookCard";
import RowList from "../components/RowList";

import authorPic from "../../assets/authors/jamesmcbride.jpg";
import cover1 from "../../assets/covers/cover1.jpg";
import cover2 from "../../assets/covers/cover2.jpg";
import cover3 from "../../assets/covers/cover3.jpg";
import cover3Blur from "../../assets/covers/cover3Blur.png";
import back1 from "../../assets/backs/back1.png";

const LibraryScreen = () => {
  const tabs = ["Continue", "Read it Later", "Readed", "Saved Cards"];

  const data = [
    <BookCard
      {...{
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
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
    <BookCard
      {...{
        id: "1as",
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
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
    <BookCard
      {...{
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
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
    <BookCard
      {...{
        id: "1fff",
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
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
    <BookCard
      {...{
        id: "1ii",
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
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
    <BookCard
      {...{
        id: "1ais",
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
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
    <BookCard
      {...{
        id: "i1i2",
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
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
    <BookCard
      {...{
        id: "1ffif",
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
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
  ];

  return (
    <SafeAreaView style={theme.styles.mainContainer}>
      <ScrollableHeader
        tabs={tabs.map((tab, id) => ({
          title: tab,
          content: [data[id], data[0], data[2], data[3]],
        }))}
        title="Your Library"
        backImage={back1}
        headerContent={<Header />}
        headerBool={true}
        foreground={
          <View>
            <BookCount bookCount={16} style={{ marginLeft: 10 }} />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default LibraryScreen;
