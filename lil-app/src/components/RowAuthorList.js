import React from "react";
import { Text, View, FlatList } from "react-native";
import theme from "../utils/theme";

import AuthorCard from "./AuthorCard";

const RowList = ({ name, data, style }) => {
  const renderItem = ({ item }) => (
    <AuthorCard
      header={item.header}
      bookCount={item.bookCount}
      color={item.color}
      authorId={item.authorId}
      pic={item.pic}
      style={{ marginLeft: 30, marginVertical: 10 }}
    />
  );

  return (
    <View style={style}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
          paddingTop: 10,
          paddingLeft: theme.numbers.padding,
        }}
      >
        <Text style={{ fontSize: 16, color: theme.colors.mainPassive }}>
          {name}
        </Text>
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

export default RowList;
