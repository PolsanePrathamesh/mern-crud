import axios from 'axios'
import {createContext , useState , useEffect} from 'react'

export const userContext = createContext({})

export function userContextProvider ({children}){

    const [user , setUser] = useState(null)
    if(!user){
        axios.get('/profile').then(({data})=)
    }


    return (

    )
}