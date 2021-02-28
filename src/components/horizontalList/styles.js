import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  item: {
    width: windowWidth,
  },
  separator: {
    width: 12,
  },
  contentContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginVertical: 16,
  },
});

export default styles;
