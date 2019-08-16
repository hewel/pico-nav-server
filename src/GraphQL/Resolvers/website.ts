import { IResolvers } from 'apollo-server-koa'
import { Postgres } from '../../Models/connect'
import { Website, websiteModel } from '../../Models/ModelWebsite'

Website.init(websiteModel, { tableName: 'website', sequelize: Postgres, timestamps: true })
// Website.sync()

export const resolvers: IResolvers = {
    Query: {
        website: async (_parent, { id }): Promise<Website | null> =>
            Website.findOne({
                where: {
                    id,
                },
            }),
        websites: async (): Promise<Website[]> => Website.findAll(),
    },
    Mutation: {
        createWebsite: async (_parent, args): Promise<Website> => Website.create(args),
    },
}
