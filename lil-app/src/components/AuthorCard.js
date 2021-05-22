import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import theme from "../utils/theme";

const AuthorCard = ({ header, bookCount, color, authorId, pic, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.card, { backgroundColor: color }]}>
        <Image source={pic} style={styles.image} />
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.text1}>{header}</Text>
          <Text style={styles.text2}>Books: {bookCount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 154,
    justifyContent: "flex-end",
  },
  card: {
    flexDirection: "row",
    height: 99,
    borderBottomLeftRadius: theme.radius.medium,
    borderTopLeftRadius: theme.radius.medium,
    borderTopRightRadius: theme.radius.medium,
    padding: 20,
  },
  text1: {
    color: theme.colors.activeText,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  text2: {
    color: theme.colors.activeText,
    fontSize: 13,
  },
  image: {
    resizeMode: "cover",
    top: -75,
    height: 154,
    zIndex: 10,
    marginRight: 30,
  },
});

export default AuthorCard;
