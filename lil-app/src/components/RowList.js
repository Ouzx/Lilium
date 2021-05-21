import React from "react";
import { Text, StyleSheet, ScrollView, View, FlatList } from "react-native";
import theme from "../utils/theme";

import MiniBookCard from "./MiniBookCard";
import { AntDesign } from "@expo/vector-icons";

const RowList = ({ name, data, style }) => {
  const renderItem = ({ item }) => (
    <MiniBookCard
      header={item.header}
      pageCount={item.pageCount}
      authorName={item.authorName}
      authorId={item.authorId}
      authorPic={item.authorPic}
      storyId={item.storyId}
      coverPic={item.coverPic}
      style={{ marginLeft: 10 }}
    />
  );

  return (
    <View style={style}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
          paddingTop: theme.numbers.padding,
          paddingLeft: theme.numbers.padding,
        }}
      >
        <Text style={{ fontSize: 24, color: theme.colors.activeText }}>
          {name}
        </Text>
        <AntDesign
          name="right"
          size={20}
          color="white"
          style={{ paddingTop: 5, paddingLeft: 5 }}
        />
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.header}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default RowList;
