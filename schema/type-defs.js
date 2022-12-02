const {gql} = require('apollo-server')

const typeDefs = gql`


    enum Nationality {
        SOMALI
        ETHIOPIAN
        KENYAN
        UGANDAN
        SOUTHAFRICAN
    }

    type User{
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
    }
    type Query {
        users: [User!]!
        user(id: ID!):  User
    }

    input newUserInput{
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = SOMALI
    }

    input updateUserInput{
        id: ID!
        username: String!
        name: String
        age: Int
        nationality: Nationality
    }

    type Mutation{
        newUser(input: newUserInput): User
        updateUser(input: updateUserInput): User
        deleteUser(id: ID!) : [User]
    }
`;

module.exports = {typeDefs}