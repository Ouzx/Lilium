import React from "react";
import { View, StyleSheet, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import Box from "../components/box";
import BoxCenter from "../components/box-center";

const HomeScreen = () => {
  return (
    <BoxCenter>
      <Text>HomeScreen</Text>
      <Box size={20} bg="blue" mt={20} />
    </BoxCenter>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
