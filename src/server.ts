import * as Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'

// import { merge } from 'lodash'

import { resolvers as websiteResolver } from './GraphQL/Resolvers/website'
import { typeDefs } from './GraphQL/Schemas/schemas'

const app = new Koa()

const server = new ApolloServer({
    typeDefs,
    resolvers: websiteResolver,
})

server.applyMiddleware({ app })

app.listen(5300, (): void => {
    console.log(`Server ready at http://localhost:5300${server.graphqlPath}`)
})
