import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistCache } from "apollo-cache-persist";

const cache = new InMemoryCache();
const URL = "https://tech.z1.digital/graphql";

persistCache({
  cache,
  storage: AsyncStorage,
  trigger: "background",
});

const client = new ApolloClient({
  uri: URL,
  cache,
  resolvers: {},
});

export default client;
