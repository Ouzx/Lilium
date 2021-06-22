import React, { Component } from "react";
import Swiper from "react-native-deck-swiper";
import { Button, StyleSheet, Text, View, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import theme from "../utils/theme";

import { Pause, Pen, SaveCard } from "../components/icons";

import { Ionicons } from "@expo/vector-icons";

export default class ReadScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          topic: "SAĞ KALAN ÇOCUK",
          content:
            "Privet Drive dört numarada oturan Mr. ve Mrs. Dursley, son derece normal olduklarını söylemekten gurur duyarlardı, sağolun efendim. Garip ya da gizemli işlere bulaşacak son kişilerdi, böyle saçmalıklara kafa yormazlardı çünkü.",
        },
        {
          topic: "",
          content:
            "Mr. Dursley matkap yapan Grunnings adlı bir şirketin \
yöneticisiydi. İri yarı, kalıplı bir adamdı, boynu yok \
gibiydi, ama koskoca bir bıyığı vardı. Mrs. Dursley \
zayıftı, şarışındı, olağanın iki katı uzunluğunda bir \
boynu vardı; bu da bahçe çitlerinin üstünden kafasını \
uzatıp komşuları gözetlemekte pek işine yarıyordu. \
Dudley adında küçük bir oğulları vardı Dursleyler'in, \
kendilerine bakılırsa dünyada ondan kusursuz bir çocuk \
bulunamazdı.    ",
        },
        {
          topic: "",
          content:
            "Dursley'ler istedikleri her şeye sahiptiler, ama bir gizleri \
vardı, biri kalkıp da bunu anlayacak diye ödleri kopardı. \
Potter'ların ortaya çıkarılmasına katlanabileceklerini hiç \
sanmıyorlardı. Mrs. Potter, Mrs. Dursley'nin kardeşiydi, \
ama birkaç yıldır görüşmemişlerdi; aslına bakılırsa, Mrs. \
Dursley hiç kardeşi yokmuş gibi davranıyordu, çünkü \
kardeşi de, onun beşpara etmez kocası da Dursley'lere \
hiç mi hiç benzemiyorlardı. Potter'lar sokakta boy \
gösterirse, komşuların ne diyeceğini düşünmek bile tüylerini ürpertiyordu. Potter'ların küçük bir oğulları olduğunu biliyorlardı, ama hiç görmemişlerdi onu. Bu oğlan da Potter'ları yanlarına yaklaştırmamak için bir başka geçerli nedendi; Dudley'nin öyle bir çocukla içli dışlı olmasını istemiyorlardı.",
        },
        {
          topic: "",
          content:
            "Mr. ve Mrs. Dursley, öykümüzün başladığı o kasvetli, \
kurşuni salı sabahı uyandıklarında, yakında bütün ülkeyi \
saracak garip, gizemli şeylerin habercisi olabilecek \
hiçbir şey yoktu bulutlu gökte. Mr. Dursley, işe giderken \
taktığı en tatsız kravatı seçerken bir şarkı mırıldanıyor, \
Mrs. Dursley de çığlıklar atan Dudley'yi yüksek \
iskemlesine oturtmak için boğuşurken keyifli keyifli \
dedikodu ediyordu. \
",
        },
        {
          topic: "",
          content:
            "Hiçbiri, kahverengi bir baykuşun pencerenin önünden \
kanat çırparak geçtiğini fark etmedi. \
Sekiz buçukta, Mr. Dursley çantasını aldı, Mrs. \
Dursley'nin yanağını öyle bir gagaladı, Dudley'ye de bir \
hoşçakal öpücüğü vermeye çabaladı, ama ıskaladı, \
Dudley bir bunalım geçirmekteydi çünkü, mamasını \
duvara fırlatıyordu. Evden ayrılırken, \
\"Küçük yumurcak,\
\" \
diye kıkırdadı Mr. Dursley. Arabasına bindi, dört \
numaranın bahçesinden geri geri çıktı. \
",
        },
        {
          topic: "",
          content:
            "Garip bir şeyin ilk belirtisini fark etti, sokağın köşesinde \
haritaya bakan bir kediyi. Mr. Dursley, bir an ne \
gördüğünü kavrayamadı. Sonra, bakmak için başını \
arkaya çevirdi. Privet Drive'ın köşesinde bir tekir kedi \
duruyordu, ama görünürlerde harita filan yoktu. Zaten \
olacak iş miydi bu? Bir ışık oyunuydu olsa olsa. \
Kirpiklerini kırpıştırdı Mr. Dursley, gözlerini kediye dikti. \
Kedi de ona dikti gözlerini. Mr. Dursley köşeyi dönüp \
yolda ilerlerken boyuna kediye baktı dikiz aynasından. \
Şimdi de Privet Drive yazılı tabelayı okuyordu- hayır, \
tabelaya bakıyordu; kediler ne harita inceleyebilir, ne de \
tabela okuyabilirlerdi. Hafifçe silkindi Mr. Dursley, kediyi \
kafasından çıkardı. Kente doğru ilerlerken o gün almayı \
umduğu büyük bir matkap siparişinden başka bir şey \
düşünmemeye koyuldu.",
        },
        {
          topic: "",
          content:
            "Ama kente girerken kafasındaki matkapların yerini \
başka bir şey alıverdi. Sabahın olağan trafik \
sıkışıklığında beklerken, çevrede garip giyimli bir sürü \
insan fark etti. Pelerinli insanlar. Mr. Dursley, gençlerin \
sırtında görülen o tuhaf elbiseleri giyenlerden hiç \
hoşlanmazdı. Bu da saçma sapan yeni modalardan \
biriydi herhalde. Direksiyona vurmaya başladı \
parmaklarıyla, gözleri bu manyakların az ötede \
oluşturduğu bir topluluğa takıldı. Heyecanlı heyecanlı bir \
şeyler fısıldaşıyorlardı. Mr. Dursley, bazılarının hiç de \
genç olmadığını görünce küplere bindi; işte şu adam \
kendisinden çok daha yaşlıydı, üstelik zümrüt yeşili bir \
pelerin atmıştı omuzlarına. Cesarete bak! Derken \
kafasına dank etti Mr. Dursley'nin, bu olsa olsa uyduruk \
bir gösteriydi- bir şey için para topluyorlardı... evet, \
mutlaka öyleydi. Trafik açıldı, Mr. Dursley birkaç dakika \
sonra Grunnings otoparkındaydı, aklında matkaplar \
vardı sadece",
        },
        {
          topic: "",
          content:
            "Mr. Dursley dokuzuncu kattaki odasında sırtını \
pencereye vererek otururdu hep. Öyle yapmasa, o \
sabah aklını matkaplara vermesi biraz güç olacaktı. \
Baykuşların güpegündüz süzülerek geçtiğini görmedi, \
ama aşağıda, sokaktaki insanlar gördüler bunu, ağızları \
açık, birbiri ardı sıra tepelerinde süzülen baykuşlara \
baktılar, onları parmaklarıyla gösterdiler. Çoğu geceleyin \
bile baykuş görmemişti. Ama Mr. Dursley, son derece \
olağan, baykuşsuz bir sabah geçirdi. Beş ayrı kişiye \
bağırdı. Önemli birkaç telefon görüşmesi yaptı, biraz \
daha bağırdı. Öğle yemeğine kadar keyfi yerine \
gelmişti, bacaklarını çalıştırmak, sokağın karşısına \
yürüyüp fırından bir çörek almak istedi. \
",
        },
      ],
      swipedAllCards: false,
      swipeDirection: "",
      cardIndex: 0,
      currentIndex: 0,
    };
  }

  interpolateCards = (index) => {
    const zed = index % 4;
    switch (zed) {
      case 0:
        return "#070D15";
      case 1:
        return "#293340";

      case 2:
        return "#516580";

      case 3:
        return "#8191A6";

      default:
        return "#070D15";
    }
  };

  renderCard = (card, index) => {
    const bg = this.interpolateCards(index);
    const { topic, content } = card;
    return (
      <View style={[styles.card, { backgroundColor: bg, padding: 20 }]}>
        <Text style={styles.text}>{topic}</Text>
        <Text style={{ fontSize: 13, color: "white", lineHeight: 20 }}>
          {content}
        </Text>
      </View>
    );
  };

  onSwiped = (props) => {
    console.log(props);
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#E2E2E2" }}>
        <StatusBar hidden={true} />
        <View>
          <View
            style={{
              top: 0,
              height: 70,
              // width: "100%",
              marginHorizontal: 20,
              borderBottomLeftRadius: theme.radius.medium,
              borderBottomRightRadius: theme.radius.medium,
              backgroundColor: theme.colors.barBg,
              padding: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="arrow-back" size={27} color="white" />
            <Text
              style={{
                fontSize: 18,
                width: "80%",
                color: "white",
                paddingHorizontal: 3,
                textAlign: "center",
              }}
            >
              {" "}
              HarryPotter and the Sorcerer's Stone
            </Text>
            <Ionicons name="md-settings-outline" size={27} color="white" />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Swiper
            ref={(swiper) => {
              this.swiper = swiper;
            }}
            onSwiped={(index) => {
              console.log(this.state.currentIndex);
              this.setState({ currentIndex: this.state.currentIndex + 1 });
            }}
            cards={this.state.cards}
            cardIndex={this.state.cardIndex}
            renderCard={this.renderCard}
            onSwipedAll={this.onSwipedAllCards}
            stackSize={4}
            stackSeparation={-20}
            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard
            backgroundColor={"#E2E2E2"}
            // containerStyle={{ borderColor: "red", borderWidth: 3, padding: 80 }}
          >
            {/* <Button onPress={() => this.swiper.swipeBack()} title="Swipe Back" /> */}
          </Swiper>
        </View>
        <View>
          <View
            style={{
              height: 20,
              width: "20%",
              alignSelf: "center",
              borderTopLeftRadius: theme.radius.medium,
              borderTopRightRadius: theme.radius.medium,
              backgroundColor: theme.colors.barBg,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 10 }}>
              {this.state.currentIndex + 1}/{this.state.cards.length}
            </Text>
          </View>
          <View
            style={{
              height: 70,
              // width: "100%",
              marginHorizontal: 20,
              borderTopLeftRadius: theme.radius.medium,
              borderTopRightRadius: theme.radius.medium,
              backgroundColor: theme.colors.barBg,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Pen />
              <Pause style={{ marginHorizontal: 20 }} />
              <SaveCard />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.radius.medium,
    height: "80%",
  },
  text: {
    left: "10%",
    marginBottom: 25,
    textAlign: "left",
    fontSize: 24,
    color: "white",
  },
});
