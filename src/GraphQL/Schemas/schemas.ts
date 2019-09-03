import { gql } from 'apollo-server-koa'

export const typeDefs = gql`
    type PageInfo {
        offset: Int
        hasNextPage: Boolean!
    }
    "Website data"
    type website {
        "The main key of this website"
        id: ID!
        "The title of this website"
        title: String!
        "The link of this website"
        url: String!
        "The detailed description of this website"
        describe: String
        "The logo of this website"
        favicon: String
        "Time stamp of creation time"
        createdAt: String
        "Time stamp of update time"
        updatedAt: String
    }
    type websitesConnection {
        totalCount: Int!
        websites: [website]!
        pageInfo: PageInfo!
    }
    input WebsiteInput {
        "The title of this website"
        title: String!
        "The link of this website"
        url: String!
        "The detailed description of this website"
        describe: String
        "The logo of this website"
        favicon: String
    }
    "Default query"
    type Query {
        "A list of websites"
        websitesConnection(first: Int, offset: Int): websitesConnection!
        "Details of the website"
        website(id: ID! = 0): website
    }
    "Default mutation"
    type Mutation {
        createWebsite(website: WebsiteInput!): website
    }
`
