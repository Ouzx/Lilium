import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import theme from "../utils/theme";

const Genre = ({ name, id, colors, style }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.square, style]}
      onPress={() => navigation.navigate("Category")}
    >
      <LinearGradient
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 1.0, y: 1.0 }}
        colors={colors}
        style={styles.innerSquare}
      />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    borderBottomLeftRadius: theme.radius.small,
    borderTopLeftRadius: theme.radius.small,
    borderTopRightRadius: theme.radius.small,
    backgroundColor: theme.colors.passiveBg,
    height: 122,
    padding: 16,
  },
  innerSquare: {
    width: 24,
    height: 24,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: {
    paddingTop: 20,
    fontSize: 16,
    width: 120,
    color: theme.colors.activeText,
    lineHeight: 25,
    fontWeight: "600",
  },
});
export default Genre;
