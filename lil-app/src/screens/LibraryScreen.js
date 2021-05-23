import React from "react";
import { StyleSheet, Text, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import theme from "../utils/theme";

import HWT from "../components/HWT";
import BookCount from "../components/BookCount";
import Tabs from "../components/Tabs";

const LibraryScreen = () => {
  return (
    <SafeAreaView style={theme.styles.mainContainer}>
      <HWT text="Your Library" />
      <BookCount bookCount={16} style={{ marginLeft: 30, marginTop: 30 }} />
      <Tabs data={["Continue", "Read it Later", "Readed", "Saved Cards"]} />
    </SafeAreaView>
  );
};

export default LibraryScreen;
