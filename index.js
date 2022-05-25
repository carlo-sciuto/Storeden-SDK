import 'dotenv/config'
import Storeden from './modules/storeden.js'

const auth = {
    key: process.env.KEY,
    exchange: process.env.EXCHANGE
}

const login = new Storeden(auth)

console.log(await login.store.info())


