import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

import VerticalList from "@components/verticalList/VerticalList";
import { useQuery } from "@apollo/react-hooks";
import { ITEMS_QUERY } from "@graphql/queries/ItemQueries";
import HorizontalList from "@components/horizontalList/HorizontalList";

const Home = () => {
  const { data, client } = useQuery(ITEMS_QUERY);

  useEffect(() => {
    if (data && data.items.length) {
      setTypes();
    }
  }, [data]);

  const setTypes = () => {
    const types = data.items
      .filter(
        (v, i, a) => a.findIndex((t) => t.category.id === v.category.id) === i
      )
      .map((item) => item.category);

    const allTypes = [
      { __typename: "Category", id: "0", title: "All" },
      ...types,
    ];

    client.writeData({
      data: { types: allTypes, current: "0" },
    });
  };

  return (
    <SafeAreaView
      style={styles.safeAreaView}
      edges={["bottom", "right", "left"]}
    >
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="transparent"
      />
      <HorizontalList />
      <VerticalList />
    </SafeAreaView>
  );
};

export default Home;
