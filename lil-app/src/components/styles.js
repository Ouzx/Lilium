import { StyleSheet } from "react-native";
import { constants } from "./constants";
import theme from "../utils/theme";
const styles = StyleSheet.create({
  headerWrapper: {
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: Platform.select({ ios: ifIphoneX(50, 40), android: 55 }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 24,
    width: 142,
  },
  foreground: {
    padding: 24,
    // flex: 1,
  },
  profilePic: {
    width: constants.responsiveWidth(18),
    height: constants.responsiveWidth(18),
    borderRadius: constants.responsiveWidth(4.5),
  },
  messageContainer: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  message: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 24,
  },
  tabText: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: theme.colors.passiveText,
  },
  tabTextContainerStyle: {
    backgroundColor: "transparent",
  },
  tabsWrapper: {
    paddingVertical: 12,
  },
});

export default styles;
