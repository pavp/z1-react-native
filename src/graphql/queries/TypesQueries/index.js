import { gql } from "apollo-boost";

export const TYPES = gql`
  {
    types @client {
      id
      title
    }
    current @client
  }
`;
