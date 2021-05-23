import React from "react";
import { StyleSheet, Text, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import HWT from "../components/HWT";
import theme from "../utils/theme";

const LibraryScreen = () => {
  return (
    <SafeAreaView style={theme.styles.mainContainer}>
      <HWT text="Your Library" />
    </SafeAreaView>
  );
};

export default LibraryScreen;
