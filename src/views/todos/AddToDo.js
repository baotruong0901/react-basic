import React from "react";

class AddToDo extends React.Component{

        state={
            title:''
        }

        handleOnchangeTitle = (e) =>{
            this.setState({
                title:e.target.value
            })
        }

        handleAddToDo=()=>{
            if(!this.state.title){
                alert('missing')
                return
            }
            let todo={
                id:Math.floor(Math.random()*1001),
                title:this.state.title
            }
            this.props.addNewToDo(todo)
            this.setState({
                title:''
            })

        }

        render(){
            let{title}=this.state
            return(
                <div className="add-todo">
                    <input type="text" value={title}
                        onChange={(e)=>this.handleOnchangeTitle(e)}
                    />
                    <button type="button" className="add" onClick={()=> this.handleAddToDo()}>add</button>
                </div>

            )
        }
}

export default AddToDo