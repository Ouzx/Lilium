import React from "react";
import { Text, View } from "react-native";

import theme from "../utils/theme";

import Header from "./Header";
// header with text
const HWT = ({ text }) => {
  return (
    <View
      style={{
        paddingLeft: theme.numbers.padding,
        paddingTop: theme.numbers.padding,
      }}
    >
      <Header />
      <Text
        style={{
          marginTop: 35,
          color: "white",
          fontSize: 48,
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default HWT;
