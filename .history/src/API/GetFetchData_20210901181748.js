import  {URL} from "./config";

export default class GetFetchData {
    static async get() {
        try {
            const response = await fetch(URL,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                referrerPolicy:origin
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