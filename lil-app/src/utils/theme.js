import { StyleSheet } from "react-native";

const radius = {
  small: 16,
  meduim: 24,
  full: 9999,
};

const colors = {
  activeRed: "#FF334B",
  mainPassive: "#A6A6A6",
  barBg: "#070D15",
  mainBg: "#09121C",
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.mainBg,
  },
});

export default {
  space,
  radii,
  colors,
  styles,
};
