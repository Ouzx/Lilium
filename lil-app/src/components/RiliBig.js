import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import theme from "../utils/theme";

import readIcon from "../../assets/icons/read.png";

const RiliBig = ({ onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.riliBack, style]} onPress={onPress}>
      <Image source={readIcon} style={styles.rili} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  riliBack: {
    backgroundColor: theme.colors.activeRed,
    width: 51,
    height: 51,
    borderRadius: theme.radius.full,
  },
  rili: {
    position: "absolute",
    left: "23%",
    top: "20%",
  },
});
export default RiliBig;
