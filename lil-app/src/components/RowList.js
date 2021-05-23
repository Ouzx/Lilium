import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import theme from "../utils/theme";

const RowList = ({
  RenderItem,
  name,
  data,
  style,
  Seperator,
  isHorizontal,
  numColumns,
}) => {
  const renderItem = ({ item }) => (
    <RenderItem {...item} style={style && style.renderItemStyle} />
  );
  return (
    <View style={style && style.container}>
      {name && (
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
          {Seperator && <Seperator />}
        </View>
      )}
      <View style={style && style.content}>
        <FlatList
          key={isHorizontal ? "h" : "v"}
          numColumns={numColumns && !isHorizontal && numColumns}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={isHorizontal}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default RowList;
