export const reducerAuth = (state ={isLog:true}, action) =>{


    if(action.type === 'IsLog')
    {
        return {isLog: true}
    }
    if(action.type === 'NotLog')
    {
        return {isLog: false}
    }
  
    return state
    }
    
    
    