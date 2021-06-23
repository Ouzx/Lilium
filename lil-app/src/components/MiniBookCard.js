import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import theme from "../utils/theme";

import PageCount from "./PageCount";
import MicroAuthor from "./MicroAuthor";
import RiliMini from "./RiliMini";

import { useNavigation } from "@react-navigation/native";
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
const navigation = useNavigation();

  return (
    <View
      style={[
        {
          height: 234,
          width: 147,
          position: "relative",
        },
        style,
      ]}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Book")}
      >
        <Image source={coverPic} style={styles.card} />
        <View style={{ paddingLeft: 5 }}>
          <Text style={styles.header}>{header}</Text>
          <PageCount pageCount={pageCount} />
          <MicroAuthor name={authorName} pic={authorPic} id={authorId} />
        </View>
      </TouchableOpacity>

      <RiliMini
        style={{ left: "75%", top: "43%", position: "absolute" }}
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
    marginBottom: 8,
  },
  card: {
    resizeMode: "cover",
    height: 136,
    width: 147,
    marginBottom: 10,
    borderBottomLeftRadius: theme.radius.small,
    borderTopLeftRadius: theme.radius.small,
    borderTopRightRadius: theme.radius.small,
  },
});

export default MiniBookCard;
