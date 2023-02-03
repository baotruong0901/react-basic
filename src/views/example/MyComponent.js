import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component{

    state={
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

    addNewJob= (job) =>{
        console.log(job);
        this.setState({
            arrJobs:[...this.state.arrJobs,job]
        })
    }
    
    deleteJob=(job)=>{
        let currentJobs=this.state.arrJobs
        currentJobs=currentJobs.filter(item=>item.id!==job.id)
        this.setState({
            arrJobs:currentJobs
        })
    }

   

    render(){
        return(
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
               
               <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent;