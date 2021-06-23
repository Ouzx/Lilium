import React from "react";
import { View, Text, SectionList } from "react-native";
import theme from "../utils/theme";

const RowSectionList = ({ RenderItem, data, style, numColumns }) => {
  const _renderItem = ({ section, index }) => {
    if (index % numColumns !== 0) return null;

    const items = [];

    for (let i = index; i < index + numColumns; i++) {
      if (i >= section.data.length) {
        break;
      }

      items.push(
        <RenderItem {...section.data[i]} style={style.renderItemStyle} />
      );
    }
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {items}
      </View>
    );
  };

  const headerItem = (name) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        paddingTop: 10,
      }}
    >
      <Text
        style={[
          { fontSize: 16, color: theme.colors.mainPassive },
          style && style.text,
        ]}
      >
        {name}
      </Text>
    </View>
  );

  return (
    <View style={style && style.container}>
      <SectionList
        sections={data}
        keyExtractor={(item) => item.key + item.name + Math.random()}
        renderItem={_renderItem}
        renderSectionHeader={({ section: { title } }) => headerItem(title)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </View>
  );
};

export default RowSectionList;
