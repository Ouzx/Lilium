import React from "react";
import {
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  ImageBackground,
  View,
  ScrollView,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import theme from "../utils/theme";

import BookCard from "../components/BookCard";
import Header from "../components/Header";
import MiniBookCard from "../components/MiniBookCard";
import RowList from "../components/RowList";
import { AntDesign } from "@expo/vector-icons";

import cover1 from "../../assets/covers/cover1.jpg";
import cover3Blur from "../../assets/covers/cover3Blur.png";

import * as media from "../../assets/covers/newz";

const HomeScreen = () => {
  const Seperator = () => (
    <AntDesign
      name="right"
      size={20}
      color="white"
      style={{ paddingTop: 5, paddingLeft: 5 }}
    />
  );

  return (
    <SafeAreaView style={[theme.styles.mainContainer]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={cover3Blur}
          style={styles.card}
          imageStyle={styles.image}
        >
          <Header />

          <BookCard
            header="Hayvanlardan Tanrılara - Sapiens"
            description="Başlangıçtan bugüne insanın tarihsel yolculuğunu ele alan eser..."
            pageCount="412"
            ratingCount="4.3 (1250)"
            authorName="Yuval Noah Harari"
            authorId="1"
            authorPic={media.author1}
            storyId="1"
            coverPic={cover1}
            badgeText="POPÜLER"
            style={{ marginTop: theme.numbers.padding }}
          />
        </ImageBackground>
        <View
          style={{
            paddingTop: theme.numbers.padding - 10,
          }}
        >
          <RowList
            name="Okumaya Devam Et"
            style={{
              renderItemStyle: { marginLeft: 10 },
              text: {
                fontSize: 24,
                color: theme.colors.activeText,
                paddingLeft: theme.numbers.padding,
              },
            }}
            RenderItem={MiniBookCard}
            Seperator={Seperator}
            isHorizontal={true}
            data={[
              {
                key: "11",
                header: "Harry Potter 1",
                pageCount: "621",
                authorName: "J.K. Rowling",
                authorId: "1",
                authorPic: media.author2,
                storyId: "1",
                coverPic: media.harrypotter1,
              },
              {
                key: "1x1",
                header: "Alacakaranlık",
                pageCount: "1254",
                authorName: "Stephenie Meyer",
                authorId: "1",
                authorPic: media.author1,
                storyId: "1",
                coverPic: media.alacakaranlık,
              },
            ]}
          />
          <RowList
            name="Yeni"
            style={{
              renderItemStyle: { marginLeft: 10 },
              text: {
                fontSize: 24,
                color: theme.colors.activeText,
                paddingLeft: theme.numbers.padding,
              },
            }}
            RenderItem={MiniBookCard}
            Seperator={Seperator}
            isHorizontal={true}
            data={[
              {
                key: "12",
                header: "Canlı Devre",
                pageCount: "854",
                authorName: "David Eagleman",
                authorId: "1",
                authorPic: media.author1,
                storyId: "1",
                coverPic: media.canlıdevre,
              },
              {
                key: "13",
                header: "Kayıp Tanrılar Ülkesi",
                pageCount: "513",
                authorName: "Ahmet Ümit",
                authorId: "1",
                authorPic: media.author2,
                storyId: "1",
                coverPic: media.kayıptanrılar,
              },
              {
                key: "14",
                header: "Balıkçı ve Oğlu",
                pageCount: "300",
                authorName: "Zülfü Livaneli",
                authorId: "1",
                authorPic: media.author1,
                storyId: "1",
                coverPic: media.Balıkçı,
              },
              {
                key: "51",
                header: "Hav",
                pageCount: "150",
                authorName: "Jan Morris",
                authorId: "1",
                authorPic: media.author2,
                storyId: "1",
                coverPic: media.hav,
              },
            ]}
          />
          <RowList
            name="Popüler"
            style={{
              renderItemStyle: { marginLeft: 10 },
              text: {
                fontSize: 24,
                color: theme.colors.activeText,
                paddingLeft: theme.numbers.padding,
              },
            }}
            RenderItem={MiniBookCard}
            Seperator={Seperator}
            isHorizontal={true}
            data={[
              {
                key: "12",
                header: "Veba Geceleri",
                pageCount: "475",
                authorName: "Orhan Pamuk",
                authorId: "1",
                authorPic: media.author1,
                storyId: "1",
                coverPic: media.vebageceleri,
              },
              {
                key: "15",
                header: "1984",
                pageCount: "962",
                authorName: "George Orwell",
                authorId: "1",
                authorPic: media.author2,
                storyId: "1",
                coverPic: media.x1984,
              },
              {
                key: "17",
                header: "Körlük",
                pageCount: "1000",
                authorName: "Jose Saramago",
                authorId: "1",
                authorPic: media.author1,
                storyId: "1",
                coverPic: media.körlük,
              },
              {
                key: "1a",
                header: "Simyacı",
                pageCount: "635",
                authorName: "Paulo Coelho",
                authorId: "1",
                authorPic: media.author2,
                storyId: "1",
                coverPic: media.simyacı,
              },
            ]}
          />
          <RowList
            name="Sana Özel"
            style={{
              renderItemStyle: { marginLeft: 10 },
              text: {
                fontSize: 24,
                color: theme.colors.activeText,
                paddingLeft: theme.numbers.padding,
              },
            }}
            RenderItem={MiniBookCard}
            Seperator={Seperator}
            isHorizontal={true}
            data={[
              {
                key: "1a",
                header: "Bir İdam Mahkumunun Son Günü",
                pageCount: "329",
                authorName: "Victor Hugo",
                authorId: "1",
                authorPic: media.author1,
                storyId: "1",
                coverPic: media.biridammahkumu,
              },
              {
                key: "1b",
                header: "Otomatik Portakal",
                pageCount: "522",
                authorName: "Antohny Burgress",
                authorId: "1",
                authorPic: media.author2,
                storyId: "1",
                coverPic: media.otomatikportakal,
              },
              {
                key: "1c",
                header: "Satranç",
                pageCount: "100",
                authorName: "Stefan Zweg",
                authorId: "1",
                authorPic: media.author1,
                storyId: "1",
                coverPic: media.satranç,
              },
            ]}
          />
          <RowList
            name="Klasikler"
            style={{
              renderItemStyle: { marginLeft: 10 },
              text: {
                fontSize: 24,
                color: theme.colors.activeText,
                paddingLeft: theme.numbers.padding,
              },
            }}
            RenderItem={MiniBookCard}
            Seperator={Seperator}
            isHorizontal={true}
            data={[
              {
                key: "12",
                header: "İnsan Ne İle Yaşar",
                pageCount: "475",
                authorName: "Tolstoy",
                authorId: "1",
                authorPic: media.author1,
                storyId: "1",
                coverPic: media.insanneileyaşar,
              },
              {
                key: "15",
                header: "Suç ve Ceza",
                pageCount: "962",
                authorName: "Dostoyevski",
                authorId: "1",
                authorPic: media.author2,
                storyId: "1",
                coverPic: media.sucveceza,
              },
              {
                key: "17",
                header: "Romeo ve Juliet",
                pageCount: "1000",
                authorName: "William Shakespeare",
                authorId: "1",
                authorPic: media.author1,
                storyId: "1",
                coverPic: media.romeojuliet,
              },
              {
                key: "1a",
                header: "Oliwer Twist",
                pageCount: "635",
                authorName: "Charles Dickens",
                authorId: "1",
                authorPic: media.author2,
                storyId: "1",
                coverPic: media.OliwerTwist,
              },
            ]}
          />
          <RowList
            name="Araştırma Tarihi"
            style={{
              renderItemStyle: { marginLeft: 10 },
              text: {
                fontSize: 24,
                color: theme.colors.activeText,
                paddingLeft: theme.numbers.padding,
              },
            }}
            RenderItem={MiniBookCard}
            Seperator={Seperator}
            isHorizontal={true}
            data={[
              {
                key: "12",
                header: "Nutuk",
                pageCount: "320",
                authorName: "Mustafa Kemal ATATÜRK",
                authorId: "1",
                authorPic: media.author1,
                storyId: "1",
                coverPic: media.nutuk,
              },
              {
                key: "15",
                header: "Yakın Tarihin Gerçekleri",
                pageCount: "682",
                authorName: "İlber Ortaylı",
                authorId: "1",
                authorPic: media.author1,
                storyId: "1",
                coverPic: media.yakıntarihingerçekleri,
              },
              {
                key: "17",
                header: "Kavgam",
                pageCount: "726",
                authorName: "Adolf Hitler",
                authorId: "1",
                authorPic: media.author1,
                storyId: "1",
                coverPic: media.kavgam,
              },
            ]}
          />
          <RowList
            name="Bilim"
            style={{
              renderItemStyle: { marginLeft: 10 },
              text: {
                fontSize: 24,
                color: theme.colors.activeText,
                paddingLeft: theme.numbers.padding,
              },
            }}
            RenderItem={MiniBookCard}
            Seperator={Seperator}
            isHorizontal={true}
            data={[
              {
                key: "12",
                header: "Incognito",
                pageCount: "365",
                authorName: "David Eagleman",
                authorId: "1",
                authorPic: media.author2,
                storyId: "1",
                coverPic: media.incognito,
              },
              {
                key: "15",
                header: "Türlerin Kökeni",
                pageCount: "632",
                authorName: "Charles Darwin",
                authorId: "1",
                authorPic: media.author2,
                storyId: "1",
                coverPic: media.türlerinkökeni,
              },
              {
                key: "17",
                header: "Kozmos",
                pageCount: "888",
                authorName: "AnDrugon",
                authorId: "1",
                authorPic: media.author2,
                storyId: "1",
                coverPic: media.kozmos,
              },
            ]}
          />
          <RowList
            name="Sanat"
            style={{
              renderItemStyle: { marginLeft: 10 },
              text: {
                fontSize: 24,
                color: theme.colors.activeText,
                paddingLeft: theme.numbers.padding,
              },
            }}
            RenderItem={MiniBookCard}
            Seperator={Seperator}
            isHorizontal={true}
            data={[
              {
                key: "12",
                header: "Macbeth",
                pageCount: "666",
                authorName: "Shakespeare",
                authorId: "1",
                authorPic: media.author1,
                storyId: "1",
                coverPic: media.macbeth,
              },
              {
                key: "15",
                header: "Umberto Arte ile Sanat",
                pageCount: "753",
                authorName: "Umberto Arte",
                authorId: "1",
                authorPic: media.author2,
                storyId: "1",
                coverPic: media.umbertoarte,
              },
              {
                key: "17",
                header: "Görme Biçimleri",
                pageCount: "1021",
                authorName: "John Berger",
                authorId: "1",
                authorPic: media.author1,
                storyId: "1",
                coverPic: media.görmebiçimleri,
              },
              {
                key: "1a",
                header: "Uygarlığın Ayak İzleri",
                pageCount: "335",
                authorName: "Celil Sadık",
                authorId: "1",
                authorPic: media.author2,
                storyId: "1",
                coverPic: media.uygarlıgınayakizleri,
              },
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    borderBottomLeftRadius: 60,
  },
  card: {
    resizeMode: "cover",
    top: 0,
    padding: 30,
    paddingBottom: 50,
    borderBottomLeftRadius: 60,
  },
});

export default HomeScreen;
