import * as Koa from 'koa'
import { ApolloServer, gql } from 'apollo-server-koa'

// import { merge } from 'lodash'

import { resolvers as websiteResolver } from './GraphQL/Resolvers/website'

const app = new Koa()

const typeDefs = gql`
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

const server = new ApolloServer({
    typeDefs,
    resolvers: websiteResolver,
})

server.applyMiddleware({ app })

app.listen(5300, (): void => {
    console.log(`Server ready at http://localhost:5300${server.graphqlPath}`)
})
