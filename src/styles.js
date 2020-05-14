import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  contentWrapper: {
    position: 'absolute',
    bottom: 45,
    left: 16,
    right: 16,
    alignItems: 'center'
},
  titleText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    padding: 12
  },
  contentText: {
      fontSize: 14,
      textAlign: 'center'
  },
  iconNextPre: {
    color: "rgba(251, 181, 137, 0.8)",
    fontSize: 26
  },
  iconWrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    width: 35,
    height: 35
  },
  buttonSkipWrapper: {
    position: "absolute",
    top: 45,
    left: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 5,
  },
  imgBg: {
    width: "100%",
    height: "100%",
  }
});
