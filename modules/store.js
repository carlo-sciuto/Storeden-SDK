import fetch from 'node-fetch'

const Store = {
    /**
    * This returns the simple details of the shop like UID, URL, Store Name
    * @returns {Promise} Promise object represents the basic details of the shop
    */
    info: async () => {     
        return (await fetch(`${globalThis.connect}/store/info.json`, globalThis.getOptions)).json();
    },
    /**
    * This returns complete details of the shop including basic info, address, status, email
    * @returns {Promise} Promise object represents the complete details of the shop
    */
    completeInfo: async() => {
        
        const URI = `${globalThis.connect}/store/info.json?` + new URLSearchParams({
            nodes: `email,status,warehouse`
        });
        return (await fetch(URI, globalThis.getOptions)).json();
    },
    /**
    * This returns available languages
    * @returns {Promise} Promise object represents the active and avaiable languages
    */
    languages: async () => {
        return (await fetch(`${globalThis.connect}/store/languages.json`, globalThis.getOptions)).json();
    },
    /**
    * This returns the avaiable domains and redirect
    * @returns {Promise} Promise with the object
    */
    mapping: async () => {
        return (await fetch(`${globalThis.connect}/store/overview.json`, globalThis.getOptions)).json();
    }
}

export default Store