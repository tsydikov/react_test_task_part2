import { URL } from "./config"


export default class GetFetchData {
    static async get() {
        try {
            const response = await fetch(URL, {
                // credentials: 'omit',
                mode: 'same-origin',
                headers: {
                    
                    'Content-Type': 'application/json'
                }
                // referrerPolicy: 'origin'
            })
            console.log(response)
            const data = await response.json()
            
            return data
        } catch (e) {
            console.log(e)
            console.log('error')
        }
    }
}