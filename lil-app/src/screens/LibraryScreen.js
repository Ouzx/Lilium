import React, { useState } from "react";
import { StyleSheet, Text, StatusBar, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import theme from "../utils/theme";

import HWT from "../components/HWT";
import BookCount from "../components/BookCount";
import Tabs from "../components/Tabs";
import BookCard from "../components/BookCard";
import RowList from "../components/RowList";

import authorPic from "../../assets/authors/jamesmcbride.jpg";
import cover1 from "../../assets/covers/cover1.jpg";
import cover2 from "../../assets/covers/cover2.jpg";
import cover3 from "../../assets/covers/cover3.jpg";
import cover3Blur from "../../assets/covers/cover3Blur.png";

const LibraryScreen = () => {
  const tabs = ["Continue", "Read it Later", "Readed", "Saved Cards"];
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
      <HWT text="Your Library" />
      <BookCount bookCount={16} style={{ marginLeft: 30, marginTop: 30 }} />
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

export default LibraryScreen;
