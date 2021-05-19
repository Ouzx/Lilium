import React from "react";
import { StyleSheet, Text, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import theme from "../utils/theme";

const SearchScreen = () => {
  return (
    <SafeAreaView style={theme.styles.mainContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.barBg}
      />
      <Text style={{ marginTop: 10, color: "white" }}>Search Screen</Text>
    </SafeAreaView>
  );
};

export default SearchScreen;
