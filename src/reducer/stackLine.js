
const initialState = {
    stackLineInfo:{}
}
const stackLine = function(state=initialState,action={}){
    
     switch(action.type){
       case "GET_DATA":
            return {
                ...state,
                stackLineInfo:action.stackData
            }
        default:
            return state;
        
    }

    

}
export default stackLine;