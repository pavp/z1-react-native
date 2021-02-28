import React from "react";
import PropTypes from "prop-types";
import { Pressable, Text } from "react-native";
import styles from "./styles";

const HorizontalCard = React.memo(({ item, current, client }) => {
  const onClickHanler = (item) => {
    client.writeData({
      data: { current: item.id },
    });
  };

  return (
    <Pressable
      style={[
        styles.pressable,
        { backgroundColor: item.id === current ? "white" : "#99aab5" },
      ]}
      onPress={() => onClickHanler(item)}
    >
      <Text
        style={[
          styles.titleItem,
          { color: item.id === current ? "#191B1E" : "white" },
        ]}
      >
        {item.title}
      </Text>
    </Pressable>
  );
});

HorizontalCard.propTypes = {
  item: PropTypes.object.isRequired,
  current: PropTypes.string.isRequired,
  client: PropTypes.object.isRequired,
};

export default HorizontalCard;
