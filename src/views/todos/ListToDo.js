import React from "react";
import './listToDo.scss'
import AddToDo from "./AddToDo";
import {toast} from 'react-toastify';


class ListToDo extends React.Component{

    state={
        listTodos:[
            {
                id:'todo1', title:'Doing homework'
            },
            {
                id:'todo2', title:'Making videos'
            },
            {
                id:'todo3', title:'Fixing bugs'
            }
        ],
        editToDo:{

        }

    }

    addNewToDo=(todo)=>{
        this.setState({
            listTodos:[...this.state.listTodos, todo]
        })
        toast.success("Add success!")
    }

    handleDelete=(todo)=>{
        let currentTodo=this.state.listTodos
        currentTodo=currentTodo.filter(item=> item.id !== todo.id)
        this.setState({
            listTodos:currentTodo
        })
        toast.success("Delete success!")

    }

    handleEdit=(todo)=>{

        let {editToDo,listTodos}=this.state

        let isEmtyObj=Object.keys(editToDo).length===0 

        //save
        if(isEmtyObj === false && editToDo.id === todo.id){
            let listTodosCopy=[...listTodos]

            let ojbIndex = listTodosCopy.findIndex((item => item.id === todo.id))

            listTodosCopy[ojbIndex].title=editToDo.title

            this.setState({
                listTodos:listTodosCopy,
                editToDo:''
            })
        toast.success("Update success!")


            return
        }
        //edit
        this.setState({
            editToDo: todo
        })
    }

    handleOnChangeEditToDo=(e)=>{
        let editToDoCopy={...this.state.editToDo}
        editToDoCopy.title=e.target.value
        this.setState({
            editToDo:editToDoCopy
        })
    }

    render(){

        let {listTodos, editToDo}=this.state

        let isEmtyObj=Object.keys(editToDo).length===0 
        return(
            <>
                <p>
                    SIMPLE TODOLIST
                </p>
                <div className="list-todo-container">
                        <AddToDo
                            addNewToDo={this.addNewToDo}
                        />
                        <div className="list-todo-content">

                            {listTodos && listTodos.length>0 &&
                                listTodos.map((item,index)=>{
                                    return(
                                        <div className="todo-child" key={item.id}>
                                            {isEmtyObj === true ?
                                                <span>{index +1} - {item.title}</span>
                                            :
                                                <>
                                                {editToDo.id === item.id ?
                                                    <span>
                                                        {index+1} - <input value={editToDo.title} 
                                                        onChange={(e)=>this.handleOnChangeEditToDo(e)} />
                                                    </span>
                                                :
                                                    <span>{index +1} - {item.title}</span>
                                                }
                                                </>
                                            }
                                            <div>
                                                <button className="edit" onClick={()=>this.handleEdit(item)}>
                                                    {isEmtyObj===false && editToDo.id === item.id ? 'Save' : 'Edit'}
                                                </button>
                                                <button className="delete" onClick={()=>this.handleDelete(item)}>Delete</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                            
                        </div>
                </div>
            </>
            
        )
    }
}

export default ListToDo