import React from "react";
import './Nav.scss'
import { Link, NavLink } from 'react-router-dom';
class Nav extends React.Component{
render(){
    return(
        <div class="topnav">
            {/* <a href="/" activeClassName="active" exact={true}>Home</a>
            <a href="/todo" activeClassName="active">Todos</a>
            <a href="/about" activeClassName="active">About</a> */}
            <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
            <NavLink to="/todo" activeClassName="active">Todos</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            {/* <a href="/" className="active">Home</a>
            <a href="/todo" >Todos</a>
            <a href="/about" >About</a> */}
        </div>
    )
}
}

export default Nav