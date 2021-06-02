import React from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
} from "react-native";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import cover1 from "../../assets/covers/cover1.jpg";
const windowHeight = Dimensions.get("window").height;
const { event, ValueXY } = Animated;
const scrollY = new ValueXY();
import theme from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";
const text = {
  biography: `The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price.
  The assassin droid IG-11 was also dispatched to terminate him. After working together to storm the encampment the infant was being held in, the Mandalorian and IG-11 found the Child. IG-11 then attempted to terminate the Child. The Mandalorian shot the droid before the he was able to assassinate the Child.
  Shortly after, the Mandalorian took the Child back to his ship. On the way they were attacked by a trio of Trandoshan bounty hunters, who attempted to kill the Child. After the Mandalorian defeated them, he and the Child camped out in the desert for the night. While the Mandalorian sat by the fire, the Child ate one of the creatures moving around nearby. He then approached the bounty hunter and attempted to use the Force to heal one of the Mandalorian's wounds. The Mandalorian stopped him and placed him back into his pod. The next day, the pair made it to the Razor Crest only to find it being scavenged by Jawas. The Mandalorian attacked their sandcrawler for the scavenged parts and attempted to climb it while the Child followed in his pod. However, the Mandalorian was knocked down to the ground`,
  powers: "Powers and Abilities",
  appearances: "Appearances",
};

const styles = StyleSheet.create({
  headerCotainer: {
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    width: 20,
    height: 20,
  },
  headerText: {
    color: "white",
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  titleStyle: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
    fontSize: 48,
    borderColor: "white",
    borderWidth: 3,
  },
  tabTextContainerStyle: {
    backgroundColor: "transparent",
  },
  tabTextContainerActiveStyle: {
    backgroundColor: "transparent",
  },
  tabTextStyle: {
    fontSize: 16,
    paddingHorizontal: 12,
    color: theme.colors.passiveText,
  },
  tabTextActiveStyle: {
    fontSize: 16,
    paddingHorizontal: 12,
    color: theme.colors.blue,
  },
  tabWrapperStyle: {
    paddingVertical: 10,
  },
  tabsContainerStyle: {
    paddingHorizontal: 10,
  },
  contentContiner: {
    height: windowHeight,
    padding: 10,
  },
  contentText: {
    fontSize: 16,
    color: "white",
  },
});

const ScrollableHeader = () => {
  const renderContent = (x) => (
    <View style={styles.contentContiner}>
      <Text style={styles.contentText}>{x}</Text>
    </View>
  );

  const renderHeader = () => {
    const opacity = scrollY.y.interpolate({
      inputRange: [0, 150, 200],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.headerCotainer}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => console.log("CLICKED")}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Animated.View style={[{ opacity }]}>
            <Text style={styles.headerText}>Baby Yoda</Text>
          </Animated.View>
        </View>
      </View>
    );
  };

  return (
    <StickyParallaxHeader
      headerType="TabbedHeader"
      // backgroundImage={cover1}
      backgroundColor={theme.colors.mainBg}
      header={renderHeader}
      title={"Baby Yoda"}
      titleStyle={styles.titleStyle}
      foregroundImage={cover1}
      tabs={[
        {
          title: "Biography",
          content: renderContent(text.biography),
        },
        {
          title: "Powers and Abilities",
          content: renderContent(text.powers),
        },
        {
          title: "Appearances",
          content: renderContent(text.appearances),
        },
      ]}
      tabTextContainerStyle={styles.tabTextContainerStyle}
      tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
      tabTextStyle={styles.tabTextStyle}
      tabTextActiveStyle={styles.tabTextActiveStyle}
      tabWrapperStyle={styles.tabWrapperStyle}
      tabsContainerStyle={styles.tabsContainerStyle}
      renderBody={() => (
        <View style={{ borderColor: "white", borderWidth: 30, flex: 1 }}></View>
      )}
      scrollEvent={event(
        [{ nativeEvent: { contentOffset: { y: scrollY.y } } }],
        { useNativeDriver: false }
      )}
    />
  );
};
export default ScrollableHeader;
