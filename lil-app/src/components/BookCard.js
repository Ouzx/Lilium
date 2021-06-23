import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

import theme from "../utils/theme";

import Badge from "./Badge";
import PageCount from "./PageCount";
import RatingCount from "./RatingCount";
import MicroAuthor from "./MicroAuthor";
import RiliBig from "./RiliBig";

import { useNavigation } from "@react-navigation/native";


const BookCard = ({
  header,
  description,
  pageCount,
  ratingCount,
  authorName,
  authorId,
  authorPic,
  storyId,
  coverPic,
  badgeText,
  badgeColor,
  style,
}) => {

  const navigation = useNavigation();
  return (
    <View style={[{ position: "relative" }, style]}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Book")}
      >
        <ImageBackground
          source={coverPic}
          style={styles.card}
          imageStyle={styles.image}
        >
          <Text style={styles.header}>{header}</Text>
          <Text style={styles.description}>{description}</Text>

          {/* PAGES / STARS / AUTHOR */}
          <View style={{ position: "absolute", top: 100, left: 30 }}>
            <View
              style={{ marginTop: 10, marginBottom: 10, flexDirection: "row" }}
            >
              <PageCount pageCount={pageCount} />
              <RatingCount
                ratingCount={ratingCount}
                style={{ marginLeft: 15 }}
              />
            </View>
            <MicroAuthor name={authorName} pic={authorPic} id={authorId} />
          </View>

          <RiliBig
            style={{ left: "95%", top: 110, position: "absolute" }}
            id={storyId}
           
          />
        </ImageBackground>
      </TouchableOpacity>
      {badgeText && (
        <Badge
          text={badgeText}
          style={{
            top: -14,
            left: 30,
            backgroundColor: badgeColor ? badgeColor : theme.colors.activeRed,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: theme.colors.activeText,
  },
  description: {
    fontSize: 11,
    height: 80,
    color: theme.colors.activeText,
    // paddingRight: 50,
    width: "80%",
  },

  image: {
    borderBottomLeftRadius: theme.radius.medium,
    borderTopLeftRadius: theme.radius.medium,
    borderTopRightRadius: theme.radius.medium,
  },
  card: {
    resizeMode: "cover",

    height: 180,

    padding: theme.numbers.padding,
    borderBottomLeftRadius: theme.radius.medium,
    borderTopLeftRadius: theme.radius.medium,
    borderTopRightRadius: theme.radius.medium,
    position: "relative",
  },
});

export default BookCard;
