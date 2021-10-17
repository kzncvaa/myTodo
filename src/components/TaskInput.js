import React from "react";
import styled from "styled-components";

const TaskInputWrapper = styled.div`
display: flex;
gap: 3px;
align-items: center;
`;

const Input = styled.input`
width: 80%;
padding: .7em;
border: 1px solid #666666;
border-radius: 2px;
background: #f7f7f7;
&:active, &:focus, &:focus-visible{
    border: 1px solid #aeaebd;
    outline: 1px solid #aeaebd;
    background: #fafafa;
}
`
const Button = styled.button`
background: #4d4da1;
padding: .6em 1em;
margin: 1em;
border: 1px solid #41418a;
border-radius: 5px;
cursor: pointer;
color: white;
&:hover{
    background: #464691;
}
`

class TaskInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            input: ''
        };
    } 

    addTask = () =>{
        const { input } = this.state;
        if(input){
            this.props.addTask(input);
            this.setState({ input: ''});
        }
    }

    inputChange = event =>{
        this.setState({input: event.target.value});
    };

    handleEnter = event =>{
        if(event.key === "Enter")
        this.addTask();
    }

    render(){
        const {input} = this.state;

        return(
            <TaskInputWrapper>
                <Input onKeyPress={this.handleEnter} onChange={this.inputChange} value={input}></Input>
                <Button onClick={this.addTask}>ADD</Button>
            </TaskInputWrapper>
        )
    }
}

export default TaskInput;