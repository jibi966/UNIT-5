import { LOGIN } from "./action"

const initState={
    token:"",
}

export const loginReducer = (store= initState, {type,payload})=>{

    switch (type){

        case LOGIN:
            return {...store, token:payload}
       

        default:
            return store    
    }
}