import React from 'react';
import {Link} from 'react-router-dom';
const CountriesDetails = (props) => {
    const {name,capital} = props.country;
    console.log(props);
    const countryStyle = {
        border: '1px solid black',
        margin: '20px',
        padding: '20px',
        float: 'left'
    }
    return (
        <div style={countryStyle}>
            <h5>{name}</h5>
            <p><small>{capital}</small></p>
            <Link to={`/country/${name}`}>Details</Link>
        </div>
    );
};

export default CountriesDetails;