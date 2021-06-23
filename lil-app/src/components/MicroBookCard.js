import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import theme from "../utils/theme";

import PageCount from "./PageCount";
import RiliMini from "./RiliMini";
import DownloadButton from "./DownloadButton";

import { useNavigation } from "@react-navigation/native";


const MicroBookCard = ({ header, pageCount, storyId, style }) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        { position: "relative" },
        style,
        { backgroundColor: theme.colors.barBg },
        styles.card,
      ]}
    >
      <TouchableOpacity
       onPress={() => navigation.navigate("Book")}
      >
        <View style={{ flexDirection: "row" }}>
          <RiliMini style={{ margin: 5, marginRight: 25 }} id={storyId} />
          <View style={{ flex: 1 }}>
            <View>
              <Text style={styles.header}>{header}</Text>
              <PageCount pageCount={pageCount} style={{ marginVertical: 3 }} />
            </View>
          </View>
          <DownloadButton
            style={{
              marginRight: 10,
              marginTop: 0,
              alignItems: "center",
            }}
            text="10 mb"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    color: theme.colors.activeText,
  },
  description: {
    fontSize: 11,
    height: 80,
    color: theme.colors.activeText,
    // paddingRight: 50,
    width: "80%",
  },

  card: {
    padding: 10,
    height: 64,
    borderBottomLeftRadius: theme.radius.small,
    borderTopLeftRadius: theme.radius.small,
    borderTopRightRadius: theme.radius.small,
    position: "relative",
  },
});

export default MicroBookCard;
