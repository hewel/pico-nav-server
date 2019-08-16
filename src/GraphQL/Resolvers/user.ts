import { IResolvers } from 'apollo-server-koa'
import { Postgres } from '../../Models/connect'
import { Website, websiteModel } from '../../Models/ModelWebsite'

Website.init(websiteModel, { tableName: 'website', sequelize: Postgres })

export const resolvers: IResolvers = {
    Query: {
        User: async (): Promise<Website[]> => Website.findAll(),
    },
}
