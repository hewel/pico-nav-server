import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
    type website {
        id: ID
        "The title of this website"
        title: String
        "The link of this website"
        url: String
        "The detailed description of this website"
        describe: String
        "The logo of this website"
        favicon: String
        "Time stamp of creation time"
        createdAt: String
        "Time stamp of update time"
        updatedAt: String
    }
    type Query {
        "A list of websites"
        websites: [website]
        "Details of the website"
        website(id: ID! = 0): website
    }
    type Mutation {
        createWebsite(title: String!): website
    }
`
