import React, {Fragment}  from'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import styles from './styles.module.sass';
import {deleteTask,EditeTask} from '../../actions/task'
function TodoItem({deleteTask,EditeTask,task:{id, title} })
{
  
  return (
    <Fragment>
    <div id='card' className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
     
     <div>
      <div className={styles.actions}>
      <input type="checkbox" className={styles.complet} id="complete" name="complete" />
      
         <label  className={styles.complete} for="complete"> Complete</label>
         </div>
         <button className={styles.editeBtn} onClick={e =>{
           var x= prompt('Type here')
         if(x != null){
        
         
           EditeTask(id,x)
    }
        
        }}>Edite</button>   
      <button className={styles.deleteBtn} onClick={e => deleteTask(id)}>Delete</button>
      </div>
    </div>
    </Fragment>
  );

  }
TodoItem.propTypes = {
  deleteTask:PropTypes.func.isRequired,
  tasks:PropTypes.object.isRequired,
  EditeTask:PropTypes.func.isRequired,
};
const mapstateToProps =state =>({
  tasks:state.redux.tasks
})

export default connect(mapstateToProps,{deleteTask,EditeTask})(TodoItem);
