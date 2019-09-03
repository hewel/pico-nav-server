import { Sequelize } from 'sequelize'
import { WebsiteModel, websiteAttributes } from './ModelWebsite'

export const Postgres = new Sequelize('piconavdb', 'pico_nav', 'xiaozei', {
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    pool: {
        max: 5, //最大连接数
        min: 0, //最小连接数
        idle: 10000,
    },
})

export const Website = WebsiteModel.modelInit(websiteAttributes, {
    tableName: 'website',
    sequelize: Postgres,
    timestamps: true,
})
