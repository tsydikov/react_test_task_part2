import { URL } from "./config"


export default class GetFetchData {
    static async get() {
        try {
            const response = await fetch(URL, {
                // credentials: 'omit',
                // mode: 'cors',
                headers: {
                    Authorization: 'Bearer 0'
                }
                // referrerPolicy: 'origin'
            })
            const data = await response.json()
            console.log('try')
            return data
        } catch (e) {
            console.log(e)
            console.log('error')
        }
    }
}