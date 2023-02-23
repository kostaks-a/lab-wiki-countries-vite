import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";  

 


function CountriesList({countries}) {


    return (
/*
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <ul className="list-group">
                {countries.map((country) => (
                    <Link to={`/${country.alpha3Code}`} key={country.alpha3Code} >    
                        <li className="list-group-item list-group-item-action" key={country.alpha3Code} style={{textAlign: 'center'}} >
                            <img src={`http://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='pic'></img>
                            <p>{country.name.common}</p>
                        </li>
                    </Link>
                ))}
            </ul>
       </div>       
   */  
      <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
          <div className="list-group">
              {countries.map((country) => (
                  <Link to={`/${country.alpha3Code}`} key={country.alpha3Code} style={{textAlign: 'center'}} className="list-group-item list-group-item-action">
                    <img src={`http://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='pic'></img>
                    <p>{country.name.official}</p>
                  </Link>                
              ))}
          </div>
        </div>
 
    )
  }

export default CountriesList