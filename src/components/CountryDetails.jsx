import React from 'react'
import { useParams, Link } from 'react-router-dom'



function CountryDetails({countries}) {
  
  const { countryId } = useParams();
  //console.log(countryId);

  const foundCountry = countries.find((country) => {  
    return country.alpha3Code === countryId;
  });
  //console.log(foundCountry.borders);

  return (
              <div className="col-7">
                <div style={{textAlign: 'center'}}>
                <img src={`http://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt={foundCountry.name} style = {{width: '150px'}}></img>
                </div>
                <h1>{foundCountry.name.official}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{foundCountry.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {foundCountry.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul style = {{listStyle : 'none'}}>
                                  {foundCountry.borders.map((borderCountry) => {
                                    countries.find((country) => {return country.alpha3Code === borderCountry})
                                    const match = countries.find((country) => {return country.alpha3Code === borderCountry})
                                    return (<li key={match.alpha3Code}><Link to={`/${match.alpha3Code}`}>{match.name.common}</Link></li>)
                                  })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    
  )
}

export default CountryDetails