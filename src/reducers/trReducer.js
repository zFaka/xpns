
import { types } from "../types/types";

const initialState = {
    transactions:[], 
    balance:0
}



export const trReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.trAddNew:
            return {
                ...state,
                transactions:[
                    ...state.transactions, 
                    action.payload
                ]
            }

        case types.trUpdateBalance:
            return {
                ...state,
                balance:action.payload
            }

        case types.trDelete:
            return {
                ...state,
                transactions:state.transactions.filter(e => (
                        e.id === state.transactions.id
                ))
            }

        default:
            return state;
    }


}
