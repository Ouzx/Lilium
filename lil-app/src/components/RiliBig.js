import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import theme from "../utils/theme";

import readIcon from "../../assets/icons/read.png";

import { useNavigation } from "@react-navigation/native";


const RiliBig = ({ style, id }) => {
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
    backgroundColor: theme.colors.activeRed,
    width: 51,
    height: 51,
    borderRadius: theme.radius.full,
    position: "relative",
  },
  rili: {
    position: "absolute",
    left: "23%",
    top: "20%",
  },
});
export default RiliBig;
