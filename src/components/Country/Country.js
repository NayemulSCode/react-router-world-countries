import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
const Country = () => {
    const [country, setCountry] = useState({});
    let {name} = useParams();
    
   // console.log(country.languages);
    useEffect( () =>{
        const url = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`;
         fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    },[])
    console.log(country);
    const imgStyle={
        width:'200px', height:'100px'
    }
    const commonStyle={
        fontSize:'14px',
        fontWidth:'400',
        color:'blue'
    }
    const divStyle={
        marginLeft:'80px'
    }

    return (
        <div style={divStyle}>
            <img style={imgStyle} src={country.flag} alt=""/>
            <p>Name: <span style={commonStyle}>{country.name}</span></p>
            <p>Capital: <span style={commonStyle}>{country.capital}</span></p>
            <p>Alpha 3 Code: <span style={commonStyle}>{country.alpha3Code}</span></p>
            <p>Area: <span style={commonStyle}>{country.area}</span> S.k.m.</p>
            <p>Region: <span style={commonStyle}>{country.region}</span></p>
            <p>
                Regional Blocs: {
                    country.regionalBlocs?.map((rbloc, indx) => <span style={commonStyle} key={indx}>{rbloc.name}({rbloc.acronym})</span>)
                }
            </p>
            <p>Sub Region: <span style={commonStyle}>{country.subregion}</span></p>
            <p>Population: <span style={commonStyle}>{country.population}</span></p>
            <p>
                Language: 
                {
                    country.languages?.map((language, indx) => <span style={commonStyle} key={indx}>{language.name}, {language.nativeName},</span>)
                }
            </p>
            <p>
                Borders: 
                {
                    country.borders?.map((border, indx) => <span style={commonStyle} key={indx}> {border}, </span>)
                }
            </p>
            <p>
                Currency:  
                {
                    country.currencies?.map((currency, indx) => <span style={commonStyle} key={indx}> {currency.name},Symbol({currency.symbol}), Code({currency.code})</span>)
                    // country.currencies && country.currencies[0].name
                }
                {/* ({country.currencies && country.currencies[0].code}, {country.currencies[0].symbol}) */}
            </p>
            <p>Timezone: <span style={commonStyle}>{country.timezones}</span></p>
            <p>Calling Code: <span style={commonStyle}>+{country.callingCodes}</span></p>
            <p>Top Level Domain: <span style={commonStyle}>{country.topLevelDomain}</span></p>
            <br />
            <Link to="">Back</Link>
            
        </div>
    );
};

export default Country;