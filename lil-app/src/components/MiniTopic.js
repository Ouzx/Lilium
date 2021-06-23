import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

import theme from "../utils/theme";

import BookCount from "./BookCount";
import RatingCount from "./RatingCount";

import { useNavigation } from "@react-navigation/native";

const MiniTopic = ({
  header,
  bookCount,
  ratingCount,
  topicId,
  coverPic,
  style,
 
}) => {
  const navigation = useNavigation();
  return (
    <View style={[style]}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Category")}

      >
        <ImageBackground
          source={coverPic}
          style={styles.card}
          imageStyle={styles.image}
        >
          <Text style={styles.header}>{header}</Text>
          <RatingCount ratingCount={ratingCount} style={{ paddingTop: 10 }} />
          <BookCount bookCount={bookCount} style={{ paddingTop: 10 }} />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    height: 32,
    color: theme.colors.activeText,
    marginBottom: 8,
    fontWeight: "600",
  },
  image: {
    borderBottomLeftRadius: theme.radius.small,
    borderTopLeftRadius: theme.radius.small,
    borderTopRightRadius: theme.radius.small,
  },
  card: {
    resizeMode: "cover",
    height: 136,
    width: 147,
    marginBottom: 10,
    borderBottomLeftRadius: theme.radius.small,
    borderTopLeftRadius: theme.radius.small,
    borderTopRightRadius: theme.radius.small,
    padding: 10,
  },
});

export default MiniTopic;
