import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import SafeAreaView from "react-native-safe-area-view";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text>HomeScreen</Text>
      <View size={20} bg="blue" mt={20} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
