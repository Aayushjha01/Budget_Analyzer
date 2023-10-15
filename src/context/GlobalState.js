import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

const InitialState = {
    transactions:[
          { id: 1, text: 'Flower', amount: -20 },
           { id: 2, text: 'Salary', amount: 300 },
           { id: 3, text: 'Book', amount: -10 }
           
         ]
         
        }
 export const GlobalContext =  createContext(InitialState);
 
 export const GlobalProvider=({children})=>{
    const [state,dispatch]= useReducer(AppReducer,InitialState)

    function deleteTransaction(id){
        dispatch({type:"Delete Transaction",payload:id})
        
    }
    function addTransaction(transactions){
        dispatch({type:"Add Transaction",payload:transactions})
    }
   
    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
      
        }}>
        {children}
        </GlobalContext.Provider>
    )
}

