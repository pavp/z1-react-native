import React from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";
import { useQuery } from "@apollo/react-hooks";
import { TYPES } from "@graphql/queries/TypesQueries";
import Item from "@components/horizontalCard/HorizontalCard";

const HorizontalList = () => {
  const { data, client } = useQuery(TYPES, {
    fetchPolicy: "cache-only",
  });

  const renderItem = ({ item }) => (
    <Item item={item} current={data.current} client={client} />
  );

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.item}>
      {data && data.types && data.types.length && (
        <FlatList
          data={data.types}
          renderItem={renderItem}
          horizontal
          ItemSeparatorComponent={() => <ItemSeparator />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.contentContainer}
        />
      )}
    </View>
  );
};

export default HorizontalList;
