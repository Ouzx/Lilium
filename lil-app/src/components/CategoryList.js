import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import theme from "../utils/theme";

import Genre from "./Genre";
import { AntDesign } from "@expo/vector-icons";

const RowList = ({ name, data, style }) => {
  const renderItem = ({ item }) => (
    <Genre name={item.name} colors={item.colors} />
  );

  return (
    <View>
      <Text style={styles.text}>{name}</Text>
      <View style={{ alignContent: "center", justifyContent: "center" }}>
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            scrollEnabled={false}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "flex-start",
    // flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 16,
  },
  text: {
    color: theme.colors.passiveText,
    fontSize: 16,

    paddingLeft: theme.numbers.padding,
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default RowList;
