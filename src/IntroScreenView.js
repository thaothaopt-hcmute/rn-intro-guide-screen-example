import * as React from "react";
import {
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Icon } from "native-base";
import Swiper from "react-native-swiper";
import styles from "./styles";

function IntroScreenView(props) {
  const { onIndexChanged, indexSlide, onPressSkip, sliders } = props;
  const buttonNextPre = (icon) => {
    return (
      <View style={styles.iconWrapper}>
        <Icon type="AntDesign" name={icon} style={styles.iconNextPre} />
      </View>
    );
  };

  const sliderItem = (item) => {
    const { image, title, content } = item || {};
    return (
      <ImageBackground
        style={styles.imgBg}
        source={{
          uri: image,
        }}
      >
        <TouchableOpacity
          style={styles.buttonSkipWrapper}
          onPress={onPressSkip}
        >
          <Text style={{ color: "#fff" }}>Skip>></Text>
        </TouchableOpacity>
        <View style={styles.contentWrapper}>
          <Text style={styles.titleText}>{title}</Text>
          <Text numberOfLines={3} style={styles.contentText}>
            {content}
          </Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Swiper
        showsButtons={true}
        // autoplay
        loop={false}
        onIndexChanged={onIndexChanged}
        activeDotColor={"#fbb589"}
        nextButton={buttonNextPre("arrowright")}
        prevButton={buttonNextPre("arrowleft")}
      >
        {Array.isArray(sliders) &&
          sliders.length > 0 &&
          sliders.map((item, index) => {
            return <View style={styles.slide1}>{sliderItem(item)}</View>;
          })}
      </Swiper>
    </View>
  );
}

export default IntroScreenView;
