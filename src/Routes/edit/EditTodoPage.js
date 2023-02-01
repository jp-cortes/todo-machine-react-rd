import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm"; 
import { useTodos } from "../useTodos";

function EditTodoPage(){
    const params = useParams();
    const location = useLocation();
    const { state, stateUpdaters } = useTodos();
    const { loading, getTodo } = state;
    const id = Number(params.id);
    const { editTodo } = stateUpdaters;
    // const id = params.id; // using cripto.randomUUID()
    
    let todoText;
    // console.log(location, 'edit todo');
    if(loading) {
        return<p>loading...</p>
    } else if(location.state?.text){
        todoText = location.state.todo.text;
    }else{
        const todo = getTodo(id);
        todoText = todo.text;
    }
    return(
        
         <TodoForm 
        label="Edita tu TODO"
        defaultTodoText={todoText}
        submitText="Editar"
        submitEvent={(newText) => editTodo(id, newText)}
        />
        
    );
}
export { EditTodoPage };