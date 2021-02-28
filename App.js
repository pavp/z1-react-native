import React from "react";
import RootNavigation from "@navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ApolloProvider } from "@apollo/react-hooks";

import client from "@graphql";

const AgileMovies = () => {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <RootNavigation />
      </ApolloProvider>
    </SafeAreaProvider>
  );
};

export default AgileMovies;
