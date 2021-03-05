import React, { useEffect, useState } from 'react';

const Home = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect(() =>{
        const url ='https://restcountries.eu/rest/v2/all'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCountries(data);
            console.log(data);
        })
    },[]);
    return (
        <div>
            {
                countries.map(country => <p>{country.name}</p>)
            }
        </div>
    );
};

export default Home;