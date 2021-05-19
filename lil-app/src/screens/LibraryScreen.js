import React from "react";
import { StyleSheet, Text, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import theme from "../utils/theme";

const LibraryScreen = () => {
  return (
    <SafeAreaView style={theme.styles.mainContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.barBg}
      />
      <Text style={{ marginTop: 10, color: "white" }}>Library Screen</Text>
    </SafeAreaView>
  );
};

export default LibraryScreen;
