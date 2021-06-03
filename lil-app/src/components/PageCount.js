import React from "react";
import { Text, View } from "react-native";
import theme from "../utils/theme";

import Card from "./icons/Cards";

const PageCount = ({ pageCount, style }) => {
  return (
    <View style={[theme.styles.horizontalCenter, style]}>
      <Card style={{ paddingTop: 18, marginRight: 3 }} />
      <Text style={theme.styles.infoText}>{pageCount} pages</Text>
    </View>
  );
};

export default PageCount;
