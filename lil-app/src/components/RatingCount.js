import React from "react";
import { Text } from "react-native";
import theme from "../utils/theme";

import { Feather } from "@expo/vector-icons";

const RatingCount = ({ ratingCount }) => {
  return (
    <>
      <Feather
        name="star"
        size={15}
        color={theme.colors.passiveText}
        style={{ marginLeft: 15, marginRight: 3 }}
      />
      <Text style={theme.styles.infoText}>{ratingCount}</Text>
    </>
  );
};

export default RatingCount;
