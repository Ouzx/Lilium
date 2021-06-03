import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  Animated,
  Platform,
  TouchableOpacity,
  ImageBackground,
  RefreshControl,
} from "react-native";
import StickyParallaxHeader from "react-native-sticky-parallax-header";

import { constants, sizes, colors } from "./constants";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import BookCard from "./BookCard";
import theme from "../utils/theme";
import { color } from "react-native-reanimated";
const { event, ValueXY } = Animated;

export default class ScrollableHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerLayout: {
        height: 0,
      },
      contentHeight: {},
      foreHeight: sizes.homeScreenParallaxHeader,
      refreshing: false,
    };
    this.scrollY = new ValueXY();
  }
  componentDidMount() {
    this.scrollY.y.addListener(({ value }) => (this._value = value));
  }

  componentWillUnmount() {
    this.scrollY.y.removeListener();
  }

  setHeaderSize = (headerLayout) => this.setState({ headerLayout });

  onRefresh = () => {
    const wait = (timeout) =>
      new Promise((resolve) => {
        setTimeout(resolve, timeout);
      });

    this.setState({ refreshing: true });

    wait(500).then(() => {
      this.setState({ refreshing: false });
    });
  };
  scrollPosition = (value) => {
    const { headerLayout } = this.state;

    return constants.scrollPosition(headerLayout.height, value);
  };

  renderHeader = () => {
    const [startTitleFade, finishTitleFade] = [
      this.scrollPosition(25),
      this.scrollPosition(45),
    ];

    const opacity = this.scrollY.y.interpolate({
      inputRange: [0, startTitleFade, finishTitleFade],
      outputRange: [0, 1, 1],
      extrapolate: "clamp",
    });
    return (
      <View
        style={{
          width: "100%",
          paddingHorizontal: 24,
          paddingTop: 55,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {this.props.headerBool ? (
          this.props.headerContent
        ) : (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => console.log("CLICKED")}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Animated.View style={[{ opacity }]}>
              <Text
                style={{
                  color: "white",
                  paddingLeft: 20,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {this.props.title}
              </Text>
            </Animated.View>
          </View>
        )}
      </View>
    );
  };

  renderForeground = () => {
    const message = this.props.title;

    const onLayout = (event) =>
      this.setState({ foreHeight: event.nativeEvent.layout.height });

    const [startTitleFade, finishTitleFade] = [
      this.scrollPosition(25),
      this.scrollPosition(45),
    ];

    const titleOpacity = this.scrollY.y.interpolate({
      inputRange: [0, startTitleFade, finishTitleFade],
      outputRange: [1, 1, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.foreground} onLayout={onLayout}>
        <Animated.View
          style={[styles.messageContainer, { opacity: titleOpacity }]}
        >
          <Text style={styles.message}>{message}</Text>
        </Animated.View>
        {this.props.foreground}
      </View>
    );
  };

  renderTabContents = (title) => {
    // const {
    //   navigation: { navigate },
    // } = this.props;

    return this.props.tabs.map(
      (tab) =>
        title === tab.title && (
          <View key={tab.content.id} style={{ width: "100%" }}>
            {tab.content}
          </View>
        )
    );
  };

  calcMargin = (title) => {
    const { contentHeight } = this.state;
    let marginBottom = 50;

    if (contentHeight[title]) {
      const padding = 24;
      const isBigContent = constants.deviceHeight - contentHeight[title] < 0;

      if (isBigContent) {
        return marginBottom;
      }

      marginBottom =
        constants.deviceHeight -
        padding * 2 -
        sizes.headerHeight -
        contentHeight[title];

      return marginBottom > 0 ? marginBottom : 0;
    }

    return marginBottom;
  };

  onLayoutContent = (e, title) => {
    const { contentHeight } = this.state;
    const contentHeightTmp = { ...contentHeight };
    contentHeightTmp[title] = e.nativeEvent.layout.height;

    this.setState({
      contentHeight: { ...contentHeightTmp },
    });
  };

  renderContent = (title) => {
    const marginBottom = Platform.select({
      ios: this.calcMargin(title),
      android: 0,
    });

    return (
      <View
        onLayout={(e) => this.onLayoutContent(e, title)}
        style={[styles.content, { marginBottom }]}
      >
        {this.renderTabContents(title)}
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        source={this.props.backImage}
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "absolute",
          flex: 1,
        }}
        resizeMode="cover"
      >
        <View style={[{ flex: 1, backgroundColor: theme.colors.bgImage }]}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.barBg}
            translucent
          />
          <StickyParallaxHeader
            foreground={this.renderForeground()}
            header={this.renderHeader()}
            tabs={this.props.tabs.map((tab) => ({
              title: tab.title,
              content: this.renderContent(tab.title),
            }))}
            deviceWidth={constants.deviceWidth}
            parallaxHeight={this.state.foreHeight}
            scrollEvent={event(
              [{ nativeEvent: { contentOffset: { y: this.scrollY.y } } }],
              { useNativeDriver: false }
            )}
            headerSize={this.setHeaderSize}
            headerHeight={sizes.headerHeight}
            tabTextStyle={styles.tabText}
            tabTextActiveStyle={{ color: theme.colors.blue }}
            tabsContainerBackgroundColor={theme.colors.bgImage}
            backgroundColor={theme.colors.bgImage}
            tabsWrapperStyle={styles.tabsWrapper}
            tabsContainerStyle={{
              // marginBottom: 30,
              backgroundColor: theme.colors.bgImage,
            }}
            refreshControl={
              <RefreshControl
                //  z Index is required on IOS, to refresh indicator be visible
                style={{ zIndex: 1 }}
                refreshing={this.state.refreshing}
                titleColor="white"
                tintColor="white"
                title="Refreshing"
                onRefresh={this.onRefresh}
              />
            }
          >
            {this.renderContent(this.props.tabs.title)}
          </StickyParallaxHeader>
        </View>
      </ImageBackground>
    );
  }
}
