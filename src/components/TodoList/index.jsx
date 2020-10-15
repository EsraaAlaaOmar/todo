import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

function TodoList({tasks}) {
  return (
    <div>
       
      
       {  tasks.map(task=>(
        
             <TodoItem key={task.id} title={task.title} task={task}/>        
       ))}
      
    </div>
  );
}

TodoList.propTypes = {
  tasks:PropTypes.object.isRequired,
  };

const mapStateToProps= state =>({
  tasks:state.redux.tasks

})

export default connect(mapStateToProps)(TodoList);
