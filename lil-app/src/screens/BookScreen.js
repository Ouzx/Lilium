import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import theme from "../utils/theme";

import ScrollableHeader from "../components/ScrollableHeader";
import Header from "../components/Header";
import BookCount from "../components/BookCount";
import Tabs from "../components/Tabs";
import MicroBookCard from "../components/MicroBookCard";
import RowList from "../components/RowList";

import authorPic from "../../assets/authors/jamesmcbride.jpg";
import authorPic2 from "../../assets/authors/JK.jpg";
import Button from "../components/Button";
import cover1 from "../../assets/covers/cover1.jpg";
import cover2 from "../../assets/covers/cover2.jpg";
import cover3 from "../../assets/covers/cover3.jpg";
import cover3Blur from "../../assets/covers/cover3Blur.png";
import back1 from "../../assets/backs/back1.png";
import RiliBig from "../components/RiliBig";
import { constants, sizes, colors } from "../components/constants";
import { AntDesign } from "@expo/vector-icons";
import { Slider } from "react-native-elements";
import Cards from "../components/icons/Cards";
import { Fontisto } from "@expo/vector-icons";
import DownloadButton from "../components/DownloadButton";
const BookScreen = () => {
  const tabs = ["Chapters"];
  const [value, setValue] = useState(0);
  const [like, setlike] = useState(1029);
  const [dislike, setdislike] = useState(26);
  const maxVal = 500;
  const data = [
    <MicroBookCard
      {...{
        id: "1",
        header: "Deacon King Kong 1",
        description:
          "A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn.",
        ratingCount: "4.3 (1250)",
        pageCount: "500",
        authorName: "James McBride",
        authorId: "1",
        authorPic: authorPic,
        storyId: "1",
        coverPic: cover2,
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
    <MicroBookCard
      {...{
        id: "1as",
        header: "Deacon King Kong 1",
        description:
          "A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn.",
        ratingCount: "4.3 (1250)",
        pageCount: "500",
        authorName: "James McBride",
        authorId: "1",
        authorPic: authorPic,
        storyId: "1",
        coverPic: cover2,
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
    <MicroBookCard
      {...{
        id: "12",
        header: "Deacon King Kong 1",
        description:
          "A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn.",
        ratingCount: "4.3 (1250)",
        pageCount: "500",
        authorName: "James McBride",
        authorId: "1",
        authorPic: authorPic,
        storyId: "1",
        coverPic: cover2,
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
    <MicroBookCard
      {...{
        id: "1fff",
        header: "Deacon King Kong 1",
        description:
          "A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn.",
        ratingCount: "4.3 (1250)",
        pageCount: "500",
        authorName: "James McBride",
        authorId: "1",
        authorPic: authorPic,
        storyId: "1",
        coverPic: cover2,
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
    <MicroBookCard
      {...{
        id: "1ii",
        header: "Deacon King Kong 1",
        description:
          "A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn.",
        ratingCount: "4.3 (1250)",
        pageCount: "500",
        authorName: "James McBride",
        authorId: "1",
        authorPic: authorPic,
        storyId: "1",
        coverPic: cover2,
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
    <MicroBookCard
      {...{
        id: "1ais",
        header: "Deacon King Kong 1",
        description:
          "A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn.",
        ratingCount: "4.3 (1250)",
        pageCount: "500",
        authorName: "James McBride",
        authorId: "1",
        authorPic: authorPic,
        storyId: "1",
        coverPic: cover2,
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
    <MicroBookCard
      {...{
        id: "i1i2",
        header: "Deacon King Kong 1",
        description:
          "A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn.",
        ratingCount: "4.3 (1250)",
        pageCount: "500",
        authorName: "James McBride",
        authorId: "1",
        authorPic: authorPic,
        storyId: "1",
        coverPic: cover2,
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
    <MicroBookCard
      {...{
        id: "1ffif",
        header: "Deacon King Kong 1",
        description:
          "A mystery story, a crime novel, an urban farce, a sociological portrait of late-1960s Brooklyn.",
        ratingCount: "4.3 (1250)",
        pageCount: "500",
        authorName: "James McBride",
        authorId: "1",
        authorPic: authorPic,
        storyId: "1",
        coverPic: cover2,
      }}
      style={{
        marginTop: 12,
        width: "100%",
        padding: 10,
      }}
    />,
  ];

  return (
    <SafeAreaView style={theme.styles.mainContainer}>
      <ScrollableHeader
        tabs={tabs.map((tab, id) => ({
          title: tab,
          content: [data[id], data[0], data[2], data[3]],
        }))}
        title="Harry Potter and the Philosopher's Stone"
        noBg={true}
        messageStyle={{
          fontSize: 24,
          textAlign: "center",
        }}
        fore={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.bgImage,
          padding: 0,
          paddingTop: 30,
        }}
        foreground={
          <View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 30,
              }}
            >
              <Text style={theme.styles.infoText}>J.K. ROWLING</Text>
              <RiliBig style={{ marginTop: 30 }} />
            </View>
            <View
              style={{
                backgroundColor: theme.colors.mainBg,
                width: "100%",
                flexDirection: "row",
                borderTopLeftRadius: theme.radius.medium,
                borderTopRightRadius: theme.radius.medium,
              }}
            >
              <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: "stretch",
                    justifyContent: "center",
                    marginVertical: 50,
                  }}
                >
                  <Slider
                    value={value}
                    onValueChange={setValue}
                    maximumValue={maxVal}
                    minimumValue={0}
                    step={1}
                    trackStyle={{
                      height: 3,
                      backgroundColor: theme.colors.blue,
                      color: "yellow",
                    }}
                    thumbStyle={{
                      height: 17,
                      width: 17,
                      backgroundColor: theme.colors.blue,
                    }}
                    minimumTrackTintColor={theme.colors.blue}
                    maximumTrackTintColor="white"
                  />
                  <View
                    style={{
                      marginTop: 10,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Cards
                        width={16}
                        height={16}
                        style={{ paddingTop: 18, marginRight: 3 }}
                      />
                      <Text style={[theme.styles.infoText]}>
                        {value} / {maxVal}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: -10,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#1C252E",
                        width: 31,
                        height: 31,
                        borderRadius: theme.radius.full,
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 10,
                      }}
                    >
                      <AntDesign name="dislike2" size={16} color="#898F97" />
                    </TouchableOpacity>
                    <Text style={theme.styles.infoText}>5</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View
                      style={{
                        alignSelf: "flex-end",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text style={theme.styles.activeText}>37.501</Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#12251D",
                          width: 31,
                          height: 31,
                          borderRadius: theme.radius.full,
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: 10,
                        }}
                      >
                        <AntDesign name="like2" size={16} color="#459221" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    borderWidth: 1,
                    borderColor: "rgba(137, 143, 151, 0.5)",
                    borderRadius: theme.radius.full,
                    marginTop: 20,
                  }}
                />
                <View
                  style={{
                    marginTop: 20,
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <DownloadButton
                    text="50 mb"
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    textStyle={{ marginLeft: 20 }}
                  />
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                      <AntDesign
                        name="sharealt"
                        size={20}
                        color="white"
                        style={{ marginHorizontal: 10 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Fontisto name="favorite" size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>

                <Text
                  style={[
                    theme.styles.infoText,
                    { marginVertical: 20, lineHeight: 20 },
                  ]}
                >
                  Harry Potter and the Philosopher's Stone is a fantasy novel
                  written by British author J. K. Rowling. The first novel in
                  the Harry Potter series and Rowling's debut novel, it follows
                  Harry Potter ...
                </Text>
              </View>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default BookScreen;
