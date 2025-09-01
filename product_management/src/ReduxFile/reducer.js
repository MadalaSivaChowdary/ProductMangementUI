const reducer =(stateObj,action)=>{
    if(action.type==="Data"){
       stateObj = action.payload;
    }


    return stateObj;

}

export default reducer;