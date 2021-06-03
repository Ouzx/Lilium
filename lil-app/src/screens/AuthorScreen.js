import React, { useState } from "react";
import { StyleSheet, Text, StatusBar, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import theme from "../utils/theme";

import ScrollableHeader from "../components/ScrollableHeader";
import Header from "../components/Header";
import BookCount from "../components/BookCount";
import Tabs from "../components/Tabs";
import AuthorBookCard from "../components/AuthorBookCard";
import RowList from "../components/RowList";

import authorPic from "../../assets/authors/jamesmcbride.jpg";
import authorPic2 from "../../assets/authors/JK.jpg";
import Button from "../components/Button";
import cover1 from "../../assets/covers/cover1.jpg";
import cover2 from "../../assets/covers/cover2.jpg";
import cover3 from "../../assets/covers/cover3.jpg";
import cover3Blur from "../../assets/covers/cover3Blur.png";
import back1 from "../../assets/backs/back1.png";

const LibraryScreen = () => {
  const tabs = ["Recent", "Popular"];

  const data = [
    <AuthorBookCard
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
    <AuthorBookCard
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
    <AuthorBookCard
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
    <AuthorBookCard
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
    <AuthorBookCard
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
    <AuthorBookCard
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
    <AuthorBookCard
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
    <AuthorBookCard
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
        title="J.K. Rowling"
        backImage={back1}
        foreground={
          <View>
            <View
              style={{
                marginRight: 30,
                marginTop: 30,
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <BookCount bookCount="1.286" style={{ marginHorizontal: 10 }} />
            </View>
            <Text
              style={[theme.styles.infoText, { marginLeft: 10, marginTop: 10 }]}
            >
              J.K. Rowling, is a British author, philanthropist, film producer,
              television producer, and screenwriter.
            </Text>
            <View
              style={{
                // marginLeft: 30,
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
                    // width: 72,
                    // height: 27,
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
              <Text style={{ fontSize: 14, color: "white" }}>
                +4.7k followers
              </Text>
            </View>
          </View>
        }
        ppImage={authorPic2}
      />
    </SafeAreaView>
  );
};

export default LibraryScreen;
