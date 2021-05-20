import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../utils/theme";

const Badge = ({ text, style, foreColor }) => {
  return (
    <View style={[styles.badge, style]}>
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
    padding: 10,
    height: 28,
    borderRadius: theme.radius.medium,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Badge;
