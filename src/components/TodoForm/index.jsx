import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {v4 as uuidv4 } from 'uuid'
import {connect} from 'react-redux'
import styles from './styles.module.sass';
import {addTask} from '../../actions/task'

const TodoForm =({addTask,tasks})=> {
  const[task, setTask] = useState({
    id:'',
    title:''
  })



  const {title} =task
  const onChange= e => {
    setTask({title : e.target.value, id:uuidv4()} )
    
   }
   const onSubmit =e=>{
    e.preventDefault()
    if (title.trim()){
    const exist = tasks.find((taskk)=>  taskk.title === task.title)
    if(exist){
      alert('This task exist')
    }
    else {addTask(task)}
    setTask({title: ''})
   }
  } 
  
  return (
    <form onSubmit={e=>onSubmit(e)}>
      <div className={styles.input}>
     
      <input
        type="text"
        placeholder="What do you have to do?"
        value={title} 
          onChange={e=>onChange(e)}
       
         />
       <input type="submit"  value="Add" />
        </div>
      
    </form>
  );
  
}
TodoForm.propTypes = {
  addTask:PropTypes.func.isRequired,
  
  tasks:PropTypes.object.isRequired,
};
const mapstateToProps =state =>({
  tasks:state.redux.tasks
})

export default connect(mapstateToProps,{addTask})(TodoForm);
