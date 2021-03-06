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

const Tabs = ({ data, style, onChange }) => {
  const [selectedId, setSelectedId] = useState(data[0]);

  const renderItem = ({ item }) => {
    const color =
      item === selectedId ? theme.colors.blue : theme.colors.passiveText;

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item);
          onChange(item);
        }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={style}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        extraData={selectedId}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default Tabs;
