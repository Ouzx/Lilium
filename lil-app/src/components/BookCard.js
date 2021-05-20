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
import Card from "./icons/Cards";
import { Feather } from "@expo/vector-icons";

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
        <>
          <Card style={{ paddingTop: 18, marginRight: 3 }} />
          <Text style={styles.infoText}>495 pages</Text>
        </>
        <>
          <Feather
            name="star"
            size={15}
            color={theme.colors.passiveText}
            style={{ marginLeft: 15, marginRight: 3 }}
          />
          <Text style={styles.infoText}>4.5 (1535)</Text>
        </>
      </View>
      <View style={styles.infoSection}>
        <Image source={authorPic} style={styles.authorPic} />
        <Text style={styles.authorText}>James McBride</Text>
      </View>
      <View style={styles.riliBack}>
        <Image source={readIcon} style={styles.rili} />
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>NEW</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  badgeText: {
    fontSize: 16,
    color: theme.colors.activeText,
    fontWeight: "bold",
  },
  badge: {
    position: "absolute",
    width: 64,
    height: 28,
    left: 32,
    top: -14,
    backgroundColor: theme.colors.activeRed,
    borderRadius: theme.radius.medium,
    alignItems: "center",
    justifyContent: "center",
  },
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
    fontSize: 22,
    color: theme.colors.activeText,
  },
  description: {
    fontSize: 12,
    height: 40,
    color: theme.colors.activeText,
    paddingRight: 50,
  },
  infoSection: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    color: theme.colors.passiveText,
    fontSize: 13,
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
