import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import theme from "../utils/theme";

import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        let stroke = {};
        if (isFocused) stroke = { color: theme.colors.activeRed };
        else stroke = { color: "black" };

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={label}
            onPress={onPress}
            style={{
              flex: 1,
              height: 56,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {label === "Home" && (
              <Foundation name="home" size={24} {...stroke} />
            )}
            {label === "Search" && (
              <AntDesign name="search1" size={24} {...stroke} />
            )}
            {label === "Library" && (
              <MaterialCommunityIcons name="library" size={24} {...stroke} />
            )}
            <Text>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
