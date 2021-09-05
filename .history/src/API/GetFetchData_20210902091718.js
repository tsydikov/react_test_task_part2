import axios from "axios"
import { URL } from "./config"


export default class GetFetchData {
    static async get() {
        try {
            const response = await axios.get(URL, {
                auth: {
                    username: 'tsydikov@gmail.com',
                    password: 'jdX-QaR-EjI-j15'
                  },
                  responseType: 'json'
            }) 
            // const response = await fetch(URL, {
            //     method: 'GET',
            //     credentials: 'omit',
            //     headers: {
            //         Authorization: 'Bearer token',
            //         'Content-Type': 'application/json'
            //     },
            //     referrerPolicy: 'no-referrer'
            // })
            console.log(response)
            const data = await response.json()
            
            return data
        } catch (e) {
            console.log(e)
        }
    }
}