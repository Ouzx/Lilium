import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import theme from "../utils/theme";

import readIcon from "../../assets/icons/read.png";

const RiliMini = ({ onPress, style, id }) => {
  return (
    <TouchableOpacity
      style={[styles.riliBack, style]}
      onPress={() => {
        console.log("Story: " + id);
      }}
    >
      <Image source={readIcon} style={styles.rili} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  riliBack: {
    backgroundColor: theme.colors.blue,
    width: 32,
    height: 32,
    borderRadius: theme.radius.full,
  },
  rili: {
    width: 12,
    height: 18,
    position: "absolute",
    left: "34%",
    top: "25%",
  },
});
export default RiliMini;
