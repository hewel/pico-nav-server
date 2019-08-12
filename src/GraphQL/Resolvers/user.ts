import { IResolvers } from 'apollo-server-koa'
import { Postgres } from '../../Database/connect'
import { Website, websiteModel } from '../../Database/Models/Website'

Website.init(websiteModel, { tableName: 'website', sequelize: Postgres })

export const resolvers: IResolvers = {
    Query: {
        User: async (): Promise<Website[]> => Website.findAll(),
    },
}
