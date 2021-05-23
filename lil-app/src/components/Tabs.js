import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import theme from "../utils/theme";

const Item = ({ item, onPress, textColor }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.text, textColor]}>{item}</Text>
  </TouchableOpacity>
);

const Tabs = ({ data }) => {
  const [selectedId, setSelectedId] = useState(data[0]);

  const renderItem = ({ item }) => {
    const color =
      item === selectedId ? theme.colors.blue : theme.colors.passiveText;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item)}
        textColor={{ color }}
      />
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      extraData={selectedId}
      horizontal
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginHorizontal: 5,
  },
});

export default Tabs;
