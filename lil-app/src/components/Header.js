import React from "react";
import { Text, StatusBar, StyleSheet, View, Image } from "react-native";
import theme from "../utils/theme";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.barBg}
      />
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <Image
          source={logo}
          style={{ width: 45, height: 45, resizeMode: "cover" }}
        />
        <Text style={theme.styles.activeText}>lilium</Text>
      </View>
    </View>
  );
};

export default Header;
