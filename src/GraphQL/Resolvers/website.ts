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
        websites: async (): Promise<Model[]> => Website.findAll(),
    },
    Mutation: {
        createWebsite: async (_parent, args): Promise<Model> => Website.create(args),
    },
}
