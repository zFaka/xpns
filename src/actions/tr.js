import {types} from "../types/types";



export const trAddNew = ( tr ) => ({
    type: types.trAddNew,
    payload: tr });



export const trUpdateBalance = ( balanceValue ) => {
    return ( dispatch, getState ) => {
        try {
            const { balance } = getState().tr;
            let nbalanceValue = parseFloat(balanceValue)
            const newBalanceValue = balance + nbalanceValue;

            dispatch(trUpdatedBalance( newBalanceValue ) )
        }

        catch (error) {console.log(error)}
    }
}
const trUpdatedBalance = (balance) => ({
    type: types.trUpdateBalance,
    payload: balance})



export const trDelete = () => ({
    type: types.trUpdateBalance})
