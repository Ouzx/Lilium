import React from "react";
import { TouchableOpacity, Text } from "react-native";
import theme from "../utils/theme";

const Button = ({ text, onClick, style }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        {
          borderRadius: 99,
          height: 51,
          justifyContent: "center",
          alignItems: "center",
        },
        style.button,
      ]}
    >
      <Text style={[style.text]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
