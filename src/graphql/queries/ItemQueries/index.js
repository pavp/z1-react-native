import { gql } from "apollo-boost";

export const ITEMS_QUERY = gql`
  query GetItems {
    items {
      id
      title
      image
      author
      category {
        id
        title
      }
    }
  }
`;

export const CURRENT_ITEMS = gql`
  {
    items @client {
      id
      title
      image
      author
      category @client {
        id
        title
      }
    }
    current @client
  }
`;
