import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import theme from "../utils/theme";

import PageCount from "./PageCount";
import MicroAuthor from "./MicroAuthor";
import RiliMini from "./RiliMini";

const MiniBookCard = ({
  header,
  pageCount,
  authorName,
  authorId,
  authorPic,
  storyId,
  coverPic,
  style,
}) => {
  return (
    <View
      style={[
        {
          marginRight: 20,
          height: 136,
          width: 147,
        },
        style,
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          console.log(header);
        }}
      >
        <Image source={coverPic} style={styles.card} />

        <Text style={styles.header}>{header}</Text>

        <PageCount pageCount={pageCount} />
        <MicroAuthor name={authorName} pic={authorPic} id={authorId} />
      </TouchableOpacity>

      <RiliMini
        style={{ left: "80%", top: "125%", position: "absolute" }}
        id={storyId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    height: 32,
    color: theme.colors.activeText,
  },
  card: {
    resizeMode: "cover",
    height: 136,
    width: 147,
    borderBottomLeftRadius: theme.radius.medium,
    borderTopLeftRadius: theme.radius.medium,
    borderTopRightRadius: theme.radius.medium,
  },
});

export default MiniBookCard;
