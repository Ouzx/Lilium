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
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          console.log(header);
        }}
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
              <RatingCount ratingCount={ratingCount} />
            </View>
            <MicroAuthor name={authorName} pic={authorPic} id={authorId} />
          </View>

          <RiliBig
            style={{ left: "95%", top: 110, position: "absolute" }}
            id={storyId}
          />
        </ImageBackground>
      </TouchableOpacity>
      {badgeText && <Badge text={badgeText} />}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 24,
    color: theme.colors.activeText,
  },
  description: {
    fontSize: 11,
    height: 80,
    color: theme.colors.activeText,
    paddingRight: 50,
  },

  image: {
    borderBottomLeftRadius: theme.radius.medium,
    borderTopLeftRadius: theme.radius.medium,
    borderTopRightRadius: theme.radius.medium,
  },
  card: {
    resizeMode: "cover",
    marginTop: 20,
    height: 180,
    marginHorizontal: 30,
    padding: 30,
    borderBottomLeftRadius: theme.radius.medium,
    borderTopLeftRadius: theme.radius.medium,
    borderTopRightRadius: theme.radius.medium,
    position: "relative",
  },
});

export default BookCard;
