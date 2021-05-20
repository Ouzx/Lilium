import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../utils/theme";

const Badge = ({ text, backColor, foreColor }) => {
  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: backColor ? backColor : theme.colors.activeRed },
      ]}
    >
      <Text
        style={[
          styles.badgeText,
          { color: foreColor ? foreColor : theme.colors.activeText },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  badgeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  badge: {
    position: "absolute",
    width: 64,
    height: 28,
    left: 64,
    top: 5,

    borderRadius: theme.radius.medium,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Badge;
