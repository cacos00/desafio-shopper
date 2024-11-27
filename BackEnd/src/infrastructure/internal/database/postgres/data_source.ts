import { DataSource } from 'typeorm'
import { DriverModel } from './model/drive'
import { TravelModel } from './model/travel'

class DataSourceBuilder {
    static async builderDatasource() {
        return new DataSource({
            type: 'postgres',
            url: process.env.POSTGRESQL_URI,
            synchronize: false,
            entities: [
                DriverModel,
                TravelModel
            ]
          })
    }
}
let dataSource: DataSource

async function getDataSource() {
if (!dataSource) {
    dataSource = await DataSourceBuilder.builderDatasource()
}

return dataSource
}

export {
    getDataSource
}