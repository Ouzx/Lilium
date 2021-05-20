import React from "react";
import {
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  ImageBackground,
  View,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import theme from "../utils/theme";

import BookCard from "../components/BookCard";
import Header from "../components/Header";
import MiniBookCard from "../components/MiniBookCard";

import authorPic from "../../assets/authors/jamesmcbride.jpg";
import cover1 from "../../assets/covers/cover1.jpg";
import cover2 from "../../assets/covers/cover2.jpg";
import cover3 from "../../assets/covers/cover3.jpg";
import cover3Blur from "../../assets/covers/cover3Blur.png";

const HomeScreen = () => {
  const recent = "Recent >";
  return (
    <SafeAreaView style={[theme.styles.mainContainer]}>
      <ImageBackground
        source={cover3Blur}
        style={styles.card}
        imageStyle={styles.image}
      >
        <Header />

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
      </ImageBackground>
      <Text
        style={{ fontSize: 30, color: "#fff", marginLeft: 30, marginTop: 30 }}
      >
        {recent}
      </Text>
      <View style={{ flexDirection: "row", padding: 30, paddingTop: 10 }}>
        <MiniBookCard
          header="Deacon King Kong"
          description="A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn."
          pageCount="5200"
          ratingCount="4.3 (1250)"
          authorName="James McBride"
          authorId="1"
          authorPic={authorPic}
          storyId="1"
          coverPic={cover2}
          badgeText="POPULAR"
        />
        <MiniBookCard
          header="Deacon King Kong"
          description="A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn."
          pageCount="5200"
          ratingCount="4.3 (1250)"
          authorName="James McBride"
          authorId="1"
          authorPic={authorPic}
          storyId="1"
          coverPic={cover3}
          badgeText="POPULAR"
        />
        <MiniBookCard
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    borderBottomLeftRadius: 60,
  },
  card: {
    resizeMode: "cover",
    top: 0,
    padding: 30,
    paddingBottom: 50,
    borderBottomLeftRadius: 60,
  },
});

export default HomeScreen;

/*
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
*/
