import React, { useCallback, useEffect, useState } from "react";
import IntroScreenView from "./IntroScreenView";
import SplashScreen from "react-native-splash-screen";

export default function IntroScreenContainer() {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
    return () => {
      clearTimeout(timeOut);
    };
  });

  const sliders = [
    {
      id: 1,
      image:
        "https://raw.githubusercontent.com/Jacse/react-native-app-intro-slider/master/examples/assets/3.jpg",
      title: `Slide 1`,
      content:
        "Đây là nội dung giới thiệu, hướng dẫn của slide thứ nhất. Không nên để quá dài nên để maximu 3 dòng là tốt nhất, sẽ vừa đẹp, nếu dài hơn thì để chấm chấm, như vậy sẽ không đẹp",
    },
    {
      id: 2,
      image:
        "https://raw.githubusercontent.com/Jacse/react-native-app-intro-slider/master/examples/assets/2.jpg",
      title: `Slide 2`,
      content:
        "Đây là nội dung giới thiệu, hướng dẫn của slide thứ hai. Không nên để quá dài nên để maximu 3 dòng là tốt nhất, sẽ vừa đẹp, nếu dài hơn thì để chấm chấm, như vậy sẽ không đẹp",
    },
    {
      id: 3,
      image:
        "https://raw.githubusercontent.com/Jacse/react-native-app-intro-slider/master/examples/assets/1.jpg",
      title: `Slide 3`,
      content:
        "Đây là nội dung giới thiệu, hướng dẫn của slide thứ ba. Không nên để quá dài nên để maximu 3 dòng là tốt nhất, sẽ vừa đẹp, nếu dài hơn thì để chấm chấm, như vậy sẽ không đẹp",
    },
  ];

  const [indexSlide, setIndex] = useState(0);

  const onIndexChanged = (index) => {
    setIndex(index);
  };

  const onPressSkip = () => {};

  return (
    <IntroScreenView
      onIndexChanged={onIndexChanged}
      indexSlide={indexSlide}
      onPressSkip={onPressSkip}
      sliders={sliders}
    />
  );
}
