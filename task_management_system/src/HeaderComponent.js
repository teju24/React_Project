import React from 'react';
import { NavLink } from 'react-router-dom';

class HeaderComponent extends React.Component {

    render() {
        return (
            <div className="header">
                <h1>ToDo List</h1>
                <NavLink activeClassName="selected" to='/home'>Home </NavLink> |
                <NavLink activeClassName="selected" to='/about'>About Us </NavLink>
            </div>
        )
    }

}

export default HeaderComponent;