import { CmdRest } from "./delivery/cmd/cmd"
require('dotenv').config({ path: '../.env' })

class Cmd {
    main() {
        this.init()
    }

    init(): void {
        process.env['POSTGRESQL_URI'] = 'postgres://root:josenunes10@18.219.218.222/shopper_db'
        new CmdRest().server()
    }
}

export {
    Cmd
}