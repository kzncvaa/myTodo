import React from "react";
import Mobx from 'mobx';
import Task from './Task'
import TaskInput from './TaskInput';
import Filter from './Filter'
import store from '../store';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import Search from "./Search";

const Header = styled.div`
margin-bottom: .5em;
border-bottom: 1px solid #b8b8b8;
`

const Tasks = styled.div`
background: #fff;
padding: 2em;
margin: auto;
margin-top: 3em;
max-width: 550px;
`

class TasksWrapper extends React.Component{
    render(){  
        const { sortedTasks , activeTasks, doneTasks, filter, activeTasksCount } = store;
        const visibleTasks = (filter==='all'? sortedTasks : filter==='active'? activeTasks : doneTasks);
        return(
            <Tasks>
                <Header>
                    <h1>Active tasks: {activeTasksCount}</h1>
                    <Search></Search>
                    <Filter></Filter>
                </Header>
            {visibleTasks.map(task=>(
              <Task 
              doneTask={()=> store.doneTask(task.id)} 
              deleteTask={()=> store.deleteTask(task.id)}
              task={task} 
              key={task.id}></Task>
            ))}
            <TaskInput addTask={v=> store.addTask(v)}></TaskInput>
            </Tasks>
        )
    }
}

export default observer(TasksWrapper);