import React, { useEffect, useState } from 'react';
import CountriesDetails from '../CountriesDetails/CountriesDetails';

const Home = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect(() =>{
        const url ='https://restcountries.eu/rest/v2/all'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCountries(data);
            //console.log(data);
        })
    },[]);
    return (
        <>
            <h5>total countries : {countries.length}</h5>
            <div>
            {
                countries.map(country => 
                    <CountriesDetails key={country.alpha3Code} country={country} />
                )
            }
            </div>
        </>
    );
};

export default Home;