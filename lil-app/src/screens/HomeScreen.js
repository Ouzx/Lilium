import React from "react";
import {
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  ImageBackground,
  View,
  ScrollView,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import theme from "../utils/theme";

import BookCard from "../components/BookCard";
import Header from "../components/Header";
import MiniBookCard from "../components/MiniBookCard";
import RowList from "../components/RowList";

import authorPic from "../../assets/authors/jamesmcbride.jpg";
import cover1 from "../../assets/covers/cover1.jpg";
import cover2 from "../../assets/covers/cover2.jpg";
import cover3 from "../../assets/covers/cover3.jpg";
import cover3Blur from "../../assets/covers/cover3Blur.png";

const HomeScreen = () => {
  const recent = "Recent >";
  return (
    <SafeAreaView style={[theme.styles.mainContainer]}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

        <RowList
          name="Keep Reading"
          style={{}}
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
            {
              header: "Deacon King Kong 33",
              pageCount: "100",
              authorName: "McBride",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover3,
            },
            {
              header: "Deacon King Kong 12",
              pageCount: "500",
              authorName: "James McBride",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover2,
            },
            {
              header: "Deacon King Kong 21",
              pageCount: "522",
              authorName: "James",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover1,
            },
            {
              header: "Deacon King Kong 32",
              pageCount: "100",
              authorName: "McBride",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover3,
            },
          ]}
        />
        <RowList
          name="Popular"
          style={{}}
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
            {
              header: "Deacon King Kong 33",
              pageCount: "100",
              authorName: "McBride",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover3,
            },
            {
              header: "Deacon King Kong 12",
              pageCount: "500",
              authorName: "James McBride",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover2,
            },
            {
              header: "Deacon King Kong 21",
              pageCount: "522",
              authorName: "James",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover1,
            },
            {
              header: "Deacon King Kong 32",
              pageCount: "100",
              authorName: "McBride",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover3,
            },
          ]}
        />
        <RowList
          name="Legend"
          style={{}}
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
            {
              header: "Deacon King Kong 33",
              pageCount: "100",
              authorName: "McBride",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover3,
            },
            {
              header: "Deacon King Kong 12",
              pageCount: "500",
              authorName: "James McBride",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover2,
            },
            {
              header: "Deacon King Kong 21",
              pageCount: "522",
              authorName: "James",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover1,
            },
            {
              header: "Deacon King Kong 32",
              pageCount: "100",
              authorName: "McBride",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover3,
            },
          ]}
        />
        <RowList
          name="NEW"
          style={{}}
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
            {
              header: "Deacon King Kong 33",
              pageCount: "100",
              authorName: "McBride",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover3,
            },
            {
              header: "Deacon King Kong 12",
              pageCount: "500",
              authorName: "James McBride",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover2,
            },
            {
              header: "Deacon King Kong 21",
              pageCount: "522",
              authorName: "James",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover1,
            },
            {
              header: "Deacon King Kong 32",
              pageCount: "100",
              authorName: "McBride",
              authorId: "1",
              authorPic: authorPic,
              storyId: "1",
              coverPic: cover3,
            },
          ]}
        />
      </ScrollView>
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
 <Text
        style={{ fontSize: 30, color: "#fff", marginLeft: 30, marginTop: 30 }}
      >
        {recent}
      </Text>
      <View style={{ flexDirection: "row", padding: 30, paddingTop: 10 }}>
        <MiniBookCard
          header="Deacon King Kong asdasd asdasd"
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
*/

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
