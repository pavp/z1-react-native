import React from "react";
import PropTypes from "prop-types";
import { Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const VerticalCard = React.memo(({ item }) => {
  const navigation = useNavigation();

  const onClickHanler = (item) => {
    navigation.navigate("Detail", { item: item });
  };

  return (
    <Pressable style={styles.pressable} onPress={() => onClickHanler(item)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.titleItem}>{item.title}</Text>
    </Pressable>
  );
});

VerticalCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default VerticalCard;
