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
    render(){
        console.log(this.props.dataRedux);
        return(
            
            <div>This is Home</div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        dataRedux : state.users
    }
}

// export default connect(mapStateToProps)(withRouter(Home))
export default connect(mapStateToProps)(Color(Home));
