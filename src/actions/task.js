import{
    ADD,
    EDITE,
    DELETE
} from './types'
export  const addTask = task => dispatch=>{
    dispatch({
        payload:{title:task.title,id:task.id},
        type:ADD,
    
    })
}
export  const EditeTask = (id,x) => dispatch=>{

    dispatch({
       
        payload:{id,title:x},
        type:EDITE,
    
    })
}

export const deleteTask = id => dispatch=>{
    
    dispatch({
        type:DELETE,
        payload:id

    })
}