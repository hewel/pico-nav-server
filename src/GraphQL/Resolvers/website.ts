import { Model } from 'sequelize'
import { IResolvers } from 'apollo-server-koa'
import { Website } from '../../Models/connect'

export const resolvers: IResolvers = {
    Query: {
        website: async (_parent, { id }): Promise<Model | null> =>
            Website.findOne({
                where: {
                    id,
                },
            }),
        websitesConnection: async (_parent, { first, offset = 10 }): Promise<object> => {
            const { count, rows } = await Website.findAndCountAll({
                limit: offset,
                offset: first,
            })
            return {
                totalCount: count,
                websites: rows,
                pageInfo: {
                    offset,
                    hasNextPage: count >= offset + first,
                },
            }
        },
    },
    Mutation: {
        createWebsite: async (_parent, { website }): Promise<Model> => Website.create(website),
    },
}
