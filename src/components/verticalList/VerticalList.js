import React, { useState, useEffect, useRef } from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";
import { useQuery } from "@apollo/react-hooks";
import { CURRENT_ITEMS } from "@graphql/queries/ItemQueries";
import Item from "@components/verticalCard/VerticalCard";

const VerticalList = () => {
  const [items, setItems] = useState([]);
  const listRef = useRef(undefined);

  const { data } = useQuery(CURRENT_ITEMS, {
    fetchPolicy: "cache-only",
  });

  useEffect(() => {
    if (data && data.items && data.items.length) {
      data.current === "0"
        ? setItems(setTimeStamp())
        : setItems(getItemsByType());
    }

    listRef.current.scrollToOffset({ animated: true, offset: 0 });
  }, [data]);

  const getItemsByType = () => {
    return data.items
      .filter((item) => item.category.id === data.current)
      .map((item) => {
        item.image = item.image + `?${Math.random()}=${new Date().getTime()}`;
        return item;
      });
  };

  const setTimeStamp = () => {
    return data.items.filter((item) => {
      item.image = item.image + `?${Math.random()}=${new Date().getTime()}`;
      return item;
    });
  };

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <View style={styles.item}>
      <FlatList
        data={items}
        renderItem={renderItem}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        ref={listRef}
      />
    </View>
  );
};

export default VerticalList;
