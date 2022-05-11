import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo } from './../store';

function Home(todo,dispatch){
    const [text,setText]=useState("");
    function onChange(e){
        setText(e.target.value);
    } 
    function onSubmit(e){
        e.preventDefault();
        console.log(text);
        setText("");
        dispatch(addToDo(text))
    }
    return <>
    <h1>TO DO</h1>
    <form onSubmit={onSubmit}>
    <input 
    type="text" 
    value={text} 
    onChange={onChange}
    />
    <button>Add</button>
    </form>
    <ul></ul>
    </>
}

function getCurrentState(state , ownProps){
    return {toDos:state};
}
function mapDispatchToProps(dispatch){
    return {dispatch};
}

export default connect(getCurrentState)( Home);