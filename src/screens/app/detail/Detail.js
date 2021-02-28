import React from "react";
import { Image, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const Detail = ({ route }) => {
  const { item = null } = route.params ?? {};

  return (
    <SafeAreaView
      style={styles.safeAreaView}
      edges={["bottom", "right", "left"]}
    >
      <ScrollView
        contentContainerStyle={styles.contentContainerScrollView}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{ uri: item.image }} style={styles.poster} />
        <Text style={styles.overView}>{item.category.title} </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
