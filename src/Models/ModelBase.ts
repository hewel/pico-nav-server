import { Model, ModelAttributes, InitOptions, SyncOptions } from 'sequelize'

export default class ModelBase extends Model {
    public static modelInit(attributes: ModelAttributes, options: InitOptions): typeof ModelBase {
        Model.init(attributes, options)
        return this
    }
    public static modelSync(options?: SyncOptions): typeof ModelBase {
        Model.sync(options)
        return this
    }
}
