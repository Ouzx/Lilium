import React from "react";
import { Text, View, FlatList } from "react-native";
import theme from "../utils/theme";

import MiniTopic from "../components/MiniTopic";

const RowTopicList = ({ name, data, style }) => {
  const renderItem = ({ item }) => (
    <MiniTopic
      header={item.header}
      bookCount={item.bookCount}
      ratingCount={item.ratingCount}
      authorId={item.authorId}
      coverPic={item.coverPic}
      style={{ marginLeft: 10, marginVertical: 10 }}
    />
  );

  return (
    <View style={style.container}>
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

export default RowTopicList;
