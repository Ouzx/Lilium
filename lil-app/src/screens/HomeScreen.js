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
import { AntDesign } from "@expo/vector-icons";

import authorPic from "../../assets/authors/jamesmcbride.jpg";
import cover1 from "../../assets/covers/cover1.jpg";
import cover2 from "../../assets/covers/cover2.jpg";
import cover3 from "../../assets/covers/cover3.jpg";
import cover3Blur from "../../assets/covers/cover3Blur.png";

const HomeScreen = () => {
  const Seperator = () => (
    <AntDesign
      name="right"
      size={20}
      color="white"
      style={{ paddingTop: 5, paddingLeft: 5 }}
    />
  );

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
            style={{ marginTop: theme.numbers.padding }}
          />
        </ImageBackground>
        <View
          style={{
            paddingTop: theme.numbers.padding - 10,
          }}
        >
          <RowList
            name="Keep Reading"
            style={{
              renderItemStyle: { marginLeft: 10 },
              text: {
                fontSize: 24,
                color: theme.colors.activeText,
                paddingLeft: theme.numbers.padding,
              },
            }}
            RenderItem={MiniBookCard}
            Seperator={Seperator}
            isHorizontal={true}
            data={[
              {
                id: "11",
                header: "Deacon King Kong 1",
                pageCount: "500",
                authorName: "James McBride",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover2,
              },
              {
                id: "14",
                header: "Deacon King Kong 2",
                pageCount: "522",
                authorName: "James",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover1,
              },
              {
                id: "13",
                header: "Deacon King Kong 3",
                pageCount: "100",
                authorName: "McBride",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover3,
              },
              {
                id: "12",
                header: "Deacon King Kong 11",
                pageCount: "500",
                authorName: "James McBride",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover2,
              },
            ]}
          />
          <RowList
            name="NEW"
            style={{
              renderItemStyle: { marginLeft: 10 },
              text: {
                fontSize: 24,
                color: theme.colors.activeText,
                paddingLeft: theme.numbers.padding,
              },
            }}
            RenderItem={MiniBookCard}
            Seperator={Seperator}
            isHorizontal={true}
            data={[
              {
                id: "12",
                header: "Deacon King Kong 1",
                pageCount: "500",
                authorName: "James McBride",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover2,
              },
              {
                id: "13",
                header: "Deacon King Kong 2",
                pageCount: "522",
                authorName: "James",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover1,
              },
              {
                id: "14",
                header: "Deacon King Kong 3",
                pageCount: "100",
                authorName: "McBride",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover3,
              },
              {
                id: "51",
                header: "Deacon King Kong 11",
                pageCount: "500",
                authorName: "James McBride",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover2,
              },
            ]}
          />
          <RowList
            name="Popular"
            style={{
              renderItemStyle: { marginLeft: 10 },
              text: {
                fontSize: 24,
                color: theme.colors.activeText,
                paddingLeft: theme.numbers.padding,
              },
            }}
            RenderItem={MiniBookCard}
            Seperator={Seperator}
            isHorizontal={true}
            data={[
              {
                id: "12",
                header: "Deacon King Kong 1",
                pageCount: "500",
                authorName: "James McBride",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover2,
              },
              {
                id: "15",
                header: "Deacon King Kong 2",
                pageCount: "522",
                authorName: "James",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover1,
              },
              {
                id: "17",
                header: "Deacon King Kong 3",
                pageCount: "100",
                authorName: "McBride",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover3,
              },
              {
                id: "1a",
                header: "Deacon King Kong 11",
                pageCount: "500",
                authorName: "James McBride",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover2,
              },
            ]}
          />
          <RowList
            name="For you"
            style={{
              renderItemStyle: { marginLeft: 10 },
              text: {
                fontSize: 24,
                color: theme.colors.activeText,
                paddingLeft: theme.numbers.padding,
              },
            }}
            RenderItem={MiniBookCard}
            Seperator={Seperator}
            isHorizontal={true}
            data={[
              {
                id: "1a",
                header: "Deacon King Kong 1",
                pageCount: "500",
                authorName: "James McBride",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover2,
              },
              {
                id: "1b",
                header: "Deacon King Kong 2",
                pageCount: "522",
                authorName: "James",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover1,
              },
              {
                id: "1c",
                header: "Deacon King Kong 3",
                pageCount: "100",
                authorName: "McBride",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover3,
              },
              {
                id: "1d",
                header: "Deacon King Kong 11",
                pageCount: "500",
                authorName: "James McBride",
                authorId: "1",
                authorPic: authorPic,
                storyId: "1",
                coverPic: cover2,
              },
            ]}
          />
        </View>
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
