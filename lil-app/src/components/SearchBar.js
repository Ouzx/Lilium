import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import theme from "../utils/theme";

import { AntDesign } from "@expo/vector-icons";
const SearchBar = () => {
  const [textInputValue, setTextInputValue] = useState("");
  return (
    <View style={styles.container}>
      {textInputValue === "" && (
        <Text
          style={{
            color: theme.colors.passiveText,
            position: "absolute",
            padding: 16,
            fontSize: 14,
          }}
        >
          Books, Topics, Authors
        </Text>
      )}
      <TextInput
        style={styles.textInput}
        placeholder="Books, Topics, Authors"
        placeholderStyle={styles.placeholder}
        onChangeText={setTextInputValue}
        value={textInputValue}
        autoCorrect={false}
      />
      <AntDesign
        name="search1"
        size={24}
        color={theme.colors.passiveText}
        style={{ position: "absolute", left: "90%", top: "25%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#010304",
    borderRadius: theme.radius.small,
    height: 48,
    marginTop: 30,
    marginHorizontal: theme.numbers.padding,
    position: "relative",
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    padding: 16,
  },
  placeholder: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
});

export default SearchBar;
