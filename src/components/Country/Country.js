import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
const Country = () => {
    const [country, setCountry] = useState([]);
    let {callingCodes} = useParams();
    //console.log(callingCodes);
    useEffect(() =>{
        const url = `https://restcountries.eu/rest/v2/callingcode/${callingCodes}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    },[])
    console.log(country);
    const imgStyle={
        width:'100px', height:'50px'
    }

    return (
        <div>
            <h4>Name:{country.name}</h4>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
            {/* <p>Language: {country.languages[0].name}</p> */}
            <img style={imgStyle} src={country.flag} alt=""/>
            
        </div>
    );
};

export default Country;