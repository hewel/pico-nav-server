import { Model, DataTypes, ModelAttributes } from 'sequelize'

export class Website extends Model {
    public id!: number
    public title!: string
    public url!: string | null
    public describe!: string | null
    public favicon!: string | null

    // timestamps!
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

export const websiteModel: ModelAttributes = {
    id: {
        type: new DataTypes.INTEGER(),
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    url: {
        type: new DataTypes.STRING(128),
        allowNull: true,
    },
    describe: {
        type: new DataTypes.STRING(128),
        allowNull: true,
    },
    favicon: {
        type: new DataTypes.STRING(128),
        allowNull: true,
    },
}
