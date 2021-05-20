import React from "react";
import { Text, StatusBar, StyleSheet, FlatList } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import theme from "../utils/theme";

import BookCard from "../components/BookCard";

const HomeScreen = () => {
  const DATA = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <SafeAreaView style={theme.styles.mainContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.barBg}
      />
      <FlatList
        data={DATA}
        renderItem={(props) => <BookCard />}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
