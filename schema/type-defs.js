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

    type Mutation{
        newUser(input: newUserInput): User
    }
`;

module.exports = {typeDefs}