import React from "react";
import { Text, View } from "react-native";
import theme from "../utils/theme";

import { Feather } from "@expo/vector-icons";

const BookCount = ({ bookCount, style }) => {
  return (
    <View style={[theme.styles.horizontalCenter, style]}>
      <Feather
        name="book"
        size={15}
        color={theme.colors.passiveText}
        style={{ marginRight: 3 }}
      />
      <Text style={theme.styles.infoText}>Books {bookCount}</Text>
    </View>
  );
};

export default BookCount;
