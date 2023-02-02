import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component{

    state={
        firstName:'',
        lastName: '',
        arrJobs:[{
            id:'Job1',
            title:'developer',
            salary:'500'
        },
        {
            id:'Job2',
            title:'tester',
            salary:'400'
        },
        {
            id:'Job3',
            title:'manager',
            salary:'1000'
        }
        ]
    }
    
    handleChangeFirstName=(e)=>{
        this.setState({
            firstName: e.target.value
        })
    }

    handleChangelastName=(e)=>{
        this.setState({
            lastName: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        // console.log('>>> check data input:', this.state);
    }

    render(){
        return(
            <>
            <AddComponent/>
               <form>
                    <label for="fname">First Name:</label><br/>
                    <input type="text" value={this.state.firstName} onChange={(e)=>this.handleChangeFirstName(e)} /><br/>
                    <label for="lname">Last Name:</label><br/>
                    <input type="text" value={this.state.lastName} onChange={(e)=>this.handleChangelastName(e)} /><br/>
                    <input type="submit" value="submit"
                        onClick={(e)=> this.handleSubmit(e)}
                    />
               </form>
               <ChildComponent name={this.state.firstName} arrJobs={this.state.arrJobs}/>
            </>
        )
    }
}

export default MyComponent;