import Store from "./store.js";

export default class Storeden {
    constructor(auth) {
        global.connect = `https://connect.storeden.com/v1.1`;

        global.getOptions = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'key': auth.key,
                'exchange': auth.exchange
            }
        }
    }
}


Storeden.prototype.store = Store