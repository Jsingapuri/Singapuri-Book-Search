const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
  getSingleUser: User
}
type User {
    _id: ID!
    username: String!
    email: String!
   password: String!
    savedBooks: [Book]
  }
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  input BookInput {
    title: String
    description: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
