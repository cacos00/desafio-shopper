import { Repository } from "typeorm"
import { getDataSource } from "./data_source"

class Connection {
    static async getRepository(T: any): Promise<Repository<any>> {
        const dataSource = await getDataSource()
        if (!dataSource.isInitialized) {
            await dataSource.initialize()
        }

        return dataSource.getRepository(T)
    }
}

export {
    Connection
}