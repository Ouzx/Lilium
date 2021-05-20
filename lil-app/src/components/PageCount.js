import React from "react";
import { Text, View } from "react-native";
import theme from "../utils/theme";

import Card from "./icons/Cards";

const PageCount = ({ pageCount }) => {
  return (
    <View style={theme.styles.horizontalCenter}>
      <Card style={{ paddingTop: 18, marginRight: 3 }} />
      <Text style={theme.styles.infoText}>{pageCount} pages</Text>
    </View>
  );
};

export default PageCount;
