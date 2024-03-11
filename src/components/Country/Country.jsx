import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

            
    const Country = ({country , handleVisitedCountry}) => {
    const {name , flags , area ,capital , population , cca3} = country;

    const [visited , setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className= {`country ${visited && 'visited'}`}>
           <h2 style={{color: visited? 'purple' : 'black'}}>Name: {name?.common}</h2>
           <img src= {flags.png} alt="" />
           <h5>Official Name: {name.official}</h5>
           <h6>Capital: {capital}</h6>
           <h6>Population: {population}</h6>
           <h6>Area: {area}</h6>
           <p><small>code: {cca3}</small></p>

           <div>
           <button onClick={() => handleVisitedCountry(country)} className='button'>Mark Visited</button>
           <br />
           <button onClick={handleVisited} className='button'>{visited ? 'Visited' : 'Going'}</button>
           {visited ?   ' I have visited this country' : ' I want to visit'}
           </div>
          <hr />
         
          <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}></CountryDetail>

        </div>
    );
};

export default Country;