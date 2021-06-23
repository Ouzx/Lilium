import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import theme from "../utils/theme";

import { useNavigation } from "@react-navigation/native";


const MicroAuthor = ({name, pic, id }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Author")}
      style={theme.styles.horizontalCenter}
    >
      <Image source={pic} style={styles.authorPic} />
      <Text style={styles.authorText}>{name}</Text>
    </TouchableOpacity>
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
