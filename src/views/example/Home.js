import React from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
import { connect } from "react-redux";


class Home extends React.Component{

    componentDidMount(){
        // setTimeout(()=>{
        //     this.props.history.push('/todo')
        // },3000)
    }

    handleDeleteUser =(user)=>{
        console.log('>>> check:', user);
        this.props.deleteUserRedux(user)
    }

    handleCreateUser = ()=>{
        this.props.addUserRedux()
    }

    render(){
        console.log(this.props);

        let listUser=this.props.dataRedux
        return(
            <>
                <div>This is Home</div>

                <div>
                    {listUser && listUser.length>0 &&
                        listUser.map((item, index)=>{
                            return (
                                <>
                                    <div key={item.id}>
                                        {index +1} - {item.name} &nbsp; 
                                        <button onClick={()=>this.handleDeleteUser(item)}>delete</button>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <button onClick={()=>this.handleCreateUser()}>Add</button>

            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        dataRedux : state.users
    }
}


const mapDispatchToProps=(dispatch)=>{
    return {
        deleteUserRedux:(userDelete)=>dispatch ({
            type: 'DELETE_USER', payload: userDelete
        }),
        addUserRedux:()=>dispatch({type:'CREATE_USER'})
    }
}

// export default connect(mapStateToProps)(withRouter(Home))
export default connect(mapStateToProps,mapDispatchToProps)(Color(Home));
