import { CmdRest } from "./delivery/cmd/cmd"

class Cmd {
    private CMD_REST = 'rest'

    main() {
        this.initDev()
        //this.init()
    }

    async checkEnvVar(): Promise<boolean> {
        const POSTGRESQL_URI = ''

        if (!POSTGRESQL_URI) {
            console.log('var POSTGRESQL_URI not defined')
            return false
        } else {
            process.env['POSTGRESQL_URI'] = POSTGRESQL_URI
        }

        return true

    }

    initDev(): void {
        process.env['POSTGRESQL_URI'] = 'postgres://postgres:josenunes10@localhost/postgres'
        process.env['GOOGLE_API_KEY'] = 'AIzaSyDUEPfeTCpCYjgnUAEtxoInQBuMijED2ug'
        new CmdRest().server()
    }

    async init(): Promise<void> {
        if (await this.checkEnvVar()) {
            const CMD = process.env.CMD

            if (CMD === this.CMD_REST) {
                new CmdRest().server()
            }
        }
    }
}

export {
    Cmd
}