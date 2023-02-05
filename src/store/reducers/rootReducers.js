
const initState={
    users:[
        {id:1, name:'bao'},
        {id:2, name:'vy'}
    ]
}
const rootReducer = (state=initState, action)=>{
   switch (action.type) {
    case 'IMCREMET':
        
        return{
            ...state,
            name:'ha'
        };
   
    default:
        return state;
   }
}

export default rootReducer