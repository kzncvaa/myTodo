import React from "react";
import styled from "styled-components";
import store from "../store";
import { observer } from 'mobx-react';

const FilterButton = styled.button`
padding: 5px 10px;
border: 1px solid #616161;
border-radius: 4px;
color: #616161;
background: ${props => props.active? '#e0e0e0' : 'transparent'};
margin: 10px 6px 10px;
cursor: pointer;
&:hover{
    background: #eee;
}
`

class Filter extends React.Component{
    render(){
        const { filter } = store;
        return(
            <div>
                <FilterButton active={filter==='all'} onClick={()=>store.changeFilter('all')}>All</FilterButton>
                <FilterButton active={filter==='active'} onClick={()=>store.changeFilter('active')}>Active</FilterButton>
                <FilterButton active={filter==='done'} onClick={()=>store.changeFilter('done')}>Done</FilterButton>
            </div>
        )
    }
}

export default observer(Filter);