import React from "react";
import { Text, View } from "react-native";
import theme from "../utils/theme";

import { Ionicons } from "@expo/vector-icons";

const BookCount = ({ authorCount, style }) => {
  return (
    <View style={[theme.styles.horizontalCenter, style]}>
      <Ionicons
        name="person-circle-outline"
        size={15}
        color={theme.colors.passiveText}
        style={{ marginRight: 3 }}
      />
      <Text style={theme.styles.infoText}>Authors: {authorCount}</Text>
    </View>
  );
};

export default BookCount;
