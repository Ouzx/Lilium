import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import theme from "../utils/theme";

const MicroAuthor = ({ name, pic }) => {
  return (
    <View style={theme.styles.horizontalCenter}>
      <Image source={pic} style={styles.authorPic} />
      <Text style={styles.authorText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
export default MicroAuthor;
