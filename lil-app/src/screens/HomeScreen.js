import React from "react";
import { Text, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import theme from "../utils/theme";

const HomeScreen = () => {
  return (
    <SafeAreaView style={theme.styles.mainContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.barBg}
      />
      <Text style={{ marginTop: 10, color: "white" }}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
