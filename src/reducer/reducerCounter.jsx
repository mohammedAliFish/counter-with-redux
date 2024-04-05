import { INCRMENT } from "../type/type"

// 2 - create reducer to set state and change it
export const reducerCounter = (state = {counter:0} , action) =>{


if(action.type === INCRMENT)
{
    return {counter : state.counter+1}
}
if(action.type === "DECRMENT")
{
    return {counter : state.counter-1}
}
if(action.type === "RESET")
{
    return {counter : 0}
}

return state
}


