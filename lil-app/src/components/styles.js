import { StyleSheet } from "react-native";
import { constants } from "./constants";
import theme from "../utils/theme";
const styles = StyleSheet.create({
  homeScreenHeader: {
    backgroundColor: theme.colors.mainBg,
  },
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
    paddingHorizontal: 24,
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
    fontSize: constants.responsiveWidth(11),
    lineHeight: 48,
    letterSpacing: -1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 24,
    backgroundColor: theme.colors.mainBg,
  },
  contentText: {
    fontSize: 24,
    lineHeight: 28,
    color: "black",
    alignSelf: "flex-start",
    letterSpacing: -0.2,
    paddingTop: 40,
    paddingBottom: 20,
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
    borderRadius: 18,
  },
  tabsWrapper: {
    paddingVertical: 12,
  },
});

export default styles;
