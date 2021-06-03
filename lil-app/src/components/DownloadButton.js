import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import theme from "../utils/theme";
import { AntDesign } from "@expo/vector-icons";

const DownloadButton = ({ text, style }) => {
  return (
    <TouchableOpacity style={[style]} onPress={() => console.log(text)}>
      <View
        style={{
          width: 32,
          height: 32,
          backgroundColor: theme.colors.passiveBg,
          borderRadius: theme.radius.full,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign name="download" size={15} color="white" />
      </View>
      <Text style={theme.styles.infoText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default DownloadButton;
