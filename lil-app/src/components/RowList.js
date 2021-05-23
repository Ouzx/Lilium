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
}) => {
  const renderItem = ({ item }) => (
    <RenderItem {...item} style={style.renderItemStyle} />
  );

  return (
    <View style={[{}, style.container]}>
      {name && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            paddingTop: 10,
            paddingLeft: theme.numbers.padding,
          }}
        >
          <Text
            style={[
              { fontSize: 16, color: theme.colors.mainPassive },
              style.text,
            ]}
          >
            {name}
          </Text>
          <Seperator />
        </View>
      )}

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={isHorizontal}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.header}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default RowList;
