export default(state,action)=>{
  
    switch(action.type){
        case "Delete Transaction":
            return{
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id!==action.payload)
            }
        case "Add Transaction":
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }     
           
               
       default:
        return state;
    }

}