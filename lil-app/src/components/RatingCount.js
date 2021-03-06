import React from "react";
import { Text, View } from "react-native";
import theme from "../utils/theme";

import { Feather } from "@expo/vector-icons";

const RatingCount = ({ ratingCount, style }) => {
  return (
    <View style={[theme.styles.horizontalCenter, style]}>
      <Feather
        name="star"
        size={15}
        color={theme.colors.passiveText}
        style={{ marginRight: 3 }}
      />
      <Text style={theme.styles.infoText}>{ratingCount}</Text>
    </View>
  );
};

export default RatingCount;
