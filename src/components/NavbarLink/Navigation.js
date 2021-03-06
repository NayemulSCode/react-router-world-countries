import React from 'react';
import {Link} from 'react-router-dom'
import './Navigation.css'
const Navigation = () => {
    return (
        <div className="menubar">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/regions">Regional Country</Link>
                <Link to="/regionblocs">Regional Blocs</Link>
            </nav>
        </div>
    );
};

export default Navigation;