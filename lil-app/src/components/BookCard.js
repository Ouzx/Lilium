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

import cover1 from "../../assets/covers/cover1.jpg";
import readIcon from "../../assets/icons/read.png";
import authorPic from "../../assets/authors/jamesmcbride.jpg";

const BookCard = () => {
  return (
    <ImageBackground
      source={cover1}
      style={styles.card}
      imageStyle={styles.image}
    >
      <Text style={styles.header}>Deacon King Kong</Text>
      <Text style={styles.description}>
        A mystery story, a crime novel, an urban farce, a sociological portrait
        of late-1960s Brooklyn.
      </Text>
      <View style={styles.infoSection}>
        <PageCount pageCount="11" />
        <RatingCount ratingCount="4.3 (1535)" />
      </View>
      <View style={styles.infoSection}>
        <Image source={authorPic} style={styles.authorPic} />
        <Text style={styles.authorText}>James McBride</Text>
      </View>
      <View style={styles.riliBack}>
        <Image source={readIcon} style={styles.rili} />
      </View>
      <Badge text="NEW" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  riliBack: {
    backgroundColor: theme.colors.activeRed,
    width: 51,
    height: 51,
    left: 230,
    top: 110,
    position: "absolute",
    borderRadius: theme.radius.full,
  },
  rili: {
    position: "absolute",
    left: "23%",
    top: "20%",
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
    color: theme.colors.activeText,
  },
  description: {
    fontSize: 9,
    height: 40,
    color: theme.colors.activeText,
    paddingRight: 50,
  },
  infoSection: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
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
  authorPic: {
    borderRadius: theme.radius.full,
    resizeMode: "cover",
    width: 16,
    height: 16,
    marginRight: 5,
  },
  authorText: {
    fontSize: 13,
    color: theme.colors.activeText,
  },
});

export default BookCard;
