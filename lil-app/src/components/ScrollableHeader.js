import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  Animated,
  Platform,
  TouchableOpacity,
} from "react-native";
import StickyParallaxHeader from "react-native-sticky-parallax-header";

import { constants, sizes, colors } from "./constants";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import BookCard from "./BookCard";
import theme from "../utils/theme";
const { event, ValueXY } = Animated;

export default class ScrollableHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerLayout: {
        height: 0,
      },
      contentHeight: {},
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
      </View>
    );
  };

  renderForeground = () => {
    const message = this.props.title;

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
      <View style={styles.foreground}>
        <Animated.View
          style={[styles.messageContainer, { opacity: titleOpacity }]}
        >
          <Text style={styles.message}>{message}</Text>
        </Animated.View>
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
          <BookCard
            style={{
              marginTop: 12,

              width: "100%",
              // backgroundColor: colors.white,

              paddingHorizontal: 20,
              paddingVertical: 16,
            }}
            {...tab.content}
          />
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
      <React.Fragment>
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
          parallaxHeight={sizes.homeScreenParallaxHeader / 2}
          scrollEvent={event(
            [{ nativeEvent: { contentOffset: { y: this.scrollY.y } } }],
            { useNativeDriver: false }
          )}
          headerSize={this.setHeaderSize}
          headerHeight={sizes.headerHeight}
          tabTextStyle={styles.tabText}
          tabTextActiveStyle={{ color: theme.colors.blue }}
          tabsContainerBackgroundColor={theme.colors.mainBg}
          tabsWrapperStyle={styles.tabsWrapper}
          tabsContainerStyle={{ marginTop: 20 }}
        >
          {this.renderContent(this.props.tabs.title)}
        </StickyParallaxHeader>
      </React.Fragment>
    );
  }
}
