export const INITIAL_STATE={
    loading:false,
    post:{},
    error:false,
    errorMessage:''
}

export const postReducer =(state,action)=>{
    
    switch(action.type)
    {
        case "FETCH_START":
            return {
                ...state,
                loading:true,
                post:{},
                error:false
            }
        case "FETCH_SUCCESS":
            return {
                ...state,
                loading:false,
                post:action.payload,
                error:false
            }
        case "FETCH_ERROR":
            return {
                loading:false,
                post:{},
                error:true,
                errorMessage:action.payload
            }
        default: return state
    }
}