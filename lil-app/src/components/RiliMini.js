import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import theme from "../utils/theme";

import readIcon from "../../assets/icons/read.png";

import { useNavigation } from "@react-navigation/native";

const RiliMini = ({ navigate, style, id }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.riliBack, style]}
      onPress={() => navigation.navigate("Read")}
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
