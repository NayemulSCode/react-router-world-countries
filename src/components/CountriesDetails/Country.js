import React from 'react';
import {useParams} from 'react-router-dom';
const Country = () => {
    let {countryName} = useParams();
    return (
        <div>
            <h4>country info</h4>
        </div>
    );
};

export default Country;