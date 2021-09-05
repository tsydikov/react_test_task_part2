import { URL } from "./config"


export default class GetFetchData {
    static async get() {
        try {
            const response = await fetch(URL)
            console.log(response)
            const data = await response.json()
            
            return data
        } catch (e) {
            console.log(e)
        }
    }
}