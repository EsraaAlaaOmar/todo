import{
    ADD,
    EDITE,
    DELETE
} from '../actions/types'


const initialState = {
id:'',
tasks:[ ],
task:null,
update:null,
loading:true,
payload:null
}

export default function(state = initialState, action){
    const {type,payload} = action
    switch(type){
        case ADD: 
        return{
            ...state,
            task:[payload],
            tasks:[payload, ...state.tasks],
       
            loading:false
            
        }
        case EDITE:
            {state.tasks[state.tasks.findIndex((obj=> obj.id === payload.id))].title = payload.title}
            return{
                ...state,
                tasks: [...state.tasks],
                loading:false  
                
            }

            case DELETE:
                return{
                    ...state,
                    
                    tasks:state.tasks.filter(task=> task.id !== payload),
                   
                    
                    loading:false
                }
                default:
                    return state  

}
}