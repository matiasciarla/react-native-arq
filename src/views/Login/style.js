import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  content: {
    marginTop: Constants.statusBarHeight
  },
  grid: {
    flexDirection: "column"
  },
  title: {
    fontSize: 30,
    fontWeight: "400"
  },
  subtitle: {
    fontSize: 16
  },
  loginBtn: {
    marginTop: 20,
    width: width / 1.5,
    height: 60,
    justifyContent: "center"
  }
});
