import React from "react";
import { Text } from "react-native";
import theme from "../utils/theme";

import Card from "./icons/Cards";

const PageCount = ({ pageCount }) => {
  return (
    <>
      <Card style={{ paddingTop: 18, marginRight: 3 }} />
      <Text style={theme.styles.infoText}>{pageCount} pages</Text>
    </>
  );
};

export default PageCount;
