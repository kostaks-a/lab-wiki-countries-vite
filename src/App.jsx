import { useState , useEffect} from 'react'
import './App.css'
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import listOfCountries from './countries.json'
import { Routes, Route } from "react-router-dom";
import axios from "axios";
  // <== IMPORT

const apiURL = 'https://ih-countries-api.herokuapp.com/countries'



function App() {
  const [countries, setCountries] = useState(listOfCountries)
  const [fetching, setFetching] = useState(true);
  const [countriesApi, setCountriesApi] = useState([]);

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      setCountriesApi(response.data);
      setFetching(false);
    });
  }, []);

  console.log(countriesApi);
  //console.log(countries)

  return (
  <div className='App'>
  <NavBar/>
  <div className='container'>
    <div className='row'>
      <CountriesList countries={countriesApi} />
      <Routes>
        <Route path="/:countryId" element={<CountryDetails countries = {countriesApi} />} />   
      </Routes>
    </div>
  </div>
  
  </div>
  )}

export default App