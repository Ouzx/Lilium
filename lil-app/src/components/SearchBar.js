import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import theme from "../utils/theme";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [isFocused, setFocus] = useState(false);

  // useEffect(() => {
  //   Keyboard.addListener("keyboardDidShow", onFocus);
  //   Keyboard.addListener("keyboardDidHide", onDeFocus);

  //   // cleanup function
  //   return () => {
  //     Keyboard.removeListener("keyboardDidShow", onFocus);
  //     Keyboard.removeListener("keyboardDidHide", onDeFocus);
  //   };
  // });

  // const onFocus = () => {
  //   setFocus(true);
  // };
  // const onDeFocus = () => {
  //   setFocus(false);
  // };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Books, Topics, Authors"
        placeholderTextColor={theme.colors.passiveText}
        value={value}
        onChangeText={setValue}
        autoCorrect={false}
        // onFocus={onFocus}
      />
      <View
        style={{
          justifyContent: "center",
          marginRight: 10,
        }}
      >
        {value != "" ? (
          <TouchableOpacity onPress={() => setValue("")}>
            <MaterialCommunityIcons
              name="window-close"
              size={24}
              color={theme.colors.passiveText}
            />
          </TouchableOpacity>
        ) : (
          <AntDesign
            name="search1"
            size={24}
            color={theme.colors.passiveText}
          />
        )}
      </View>
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
    flexDirection: "row",
  },
  textInput: {
    color: "white",
    padding: 16,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
});

export default SearchBar;
