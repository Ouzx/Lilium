import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import theme from "../utils/theme";
import ScrollableHeader from "../components/ScrollableHeader";

import HWT from "../components/HWT";
import BookCount from "../components/BookCount";
import AuthorCount from "../components/AuthorCount";
import RatingCount from "../components/RatingCount";
import Button from "../components/Button";
import Tabs from "../components/Tabs";
import BookCard from "../components/BookCard";
import RowList from "../components/RowList";

import back1 from "../../assets/backs/back1.png";
import authorPic from "../../assets/authors/jamesmcbride.jpg";
import cover1 from "../../assets/covers/cover1.jpg";
import cover2 from "../../assets/covers/cover2.jpg";
import cover3 from "../../assets/covers/cover3.jpg";
import cover3Blur from "../../assets/covers/cover3Blur.png";

const InCategoryScreen = () => {
  const tabs = ["Continue", "Read it Later", "Readed", "Saved Cards"];
  // selectedIndex will only effect the source of data but components will stay same.
  const [selectedId, setId] = useState(tabs[0]);
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
  const onChange = (id) => {
    setId(id);
  };

  return (
    <SafeAreaView style={[theme.styles.mainContainer]}>
      <ScrollableHeader
        tabs={tabs.map((tab, id) => ({
          title: tab,
          content: [data[id]],
        }))}
        title="Positive psychology"
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
              <AuthorCount authorCount="1.224" />
              <BookCount bookCount="1.286" style={{ marginHorizontal: 20 }} />
              <RatingCount ratingCount="4.9 (11926)" />
            </View>

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
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default InCategoryScreen;
