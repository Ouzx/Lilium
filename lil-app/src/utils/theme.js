import { StyleSheet } from "react-native";

const numbers = {
  padding: 30,
};

const radius = {
  small: 16,
  medium: 24,
  full: 9999,
};

const colors = {
  activeRed: "#FF334B",
  mainPassive: "#A6A6A6",
  barBg: "#070D15",
  mainBg: "#09121C",
  passiveText: "#898F97",
  activeText: "#fff",
  purple: "#C600F9",
  blue: "#3369FF",
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.mainBg,
  },
  infoText: {
    color: colors.passiveText,
    fontSize: 13,
  },
  activeText: {
    color: colors.activeText,
    fontSize: 14,
  },
  horizontalCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default {
  radius,
  colors,
  styles,
  numbers,
};
