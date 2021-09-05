import { URL } from "./config"


export default class GetFetchData {
    static async get() {
        try {
            const response = await fetch(URL, {
                mode: 'no-cors',
                headers: {
                    
                    'Content-Type': 'application/json'
                },
                referrerPolicy: 'no-referrer'
            })
            console.log(response)
            const data = await response.json()
            
            return data
        } catch (e) {
            console.log(e)
        }
    }
}