import React from "react";
import styled from "styled-components";

const TaskWrapper = styled.div`
display: flex;
background-color: ${props => props.isDone ? '#eee' : 'transparent'};
justify-content: space-between;
padding: 5px 30px;
align-items: center;
&:hover{
    background: #eee;
}
`
const ActionButton = styled.p`
    cursor: pointer;
    background-color: #4d4da1;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    padding: 5px 10px;
    color: white;
    &:hover{
        background: #464691;
    }
`

const Task = ({task, ...props}) => {
    const ActionBtn = () => (
        <div>
            {!task.done ? (
             <ActionButton onClick={ props.doneTask }>✓</ActionButton> 
            ) : (
                <ActionButton onClick={ props.deleteTask }>✕</ActionButton> 
            )}
         </div>
    )
    return(
        <TaskWrapper isDone={task.done}>
            <p>{task.title}</p>
            <ActionBtn></ActionBtn>
        </TaskWrapper>
    );
};

export default Task;