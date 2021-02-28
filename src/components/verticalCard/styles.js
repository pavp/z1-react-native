import { StyleSheet, Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  pressable: {
    flex: 1 / 2,
    height: windowHeight * 0.35,
  },
  image: {
    resizeMode: "cover",
    position: "absolute",
    bottom: 8,
    top: 8,
    right: 8,
    left: 8,
    borderRadius: 10,
    backgroundColor: "#99aab5",
  },
  titleItem: {
    flex: 1,
    color: "white",
    position: "absolute",
    bottom: 16,
    right: 16,
    left: 16,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
