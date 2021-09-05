import { URL } from "./config"


export default class GetFetchData {
    static async get() {
        try {
            const response = await fetch(URL, {
                'Access-Control-Allow-Origin': 'origin-list'
                // headers: {
                //     'Authorization': 'Bearer 0',
                //     'Content-Type': 'application/json'
                // }
                // referrerPolicy: 'origin'
            })
            console.log('try')
            const data = await response.json()
            
            return data
        } catch (e) {
            console.log(e)
            console.log('error')
        }
    }
}