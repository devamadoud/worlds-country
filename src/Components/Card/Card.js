import React from 'react';

const Card = ({ country, Click }) => {
    return (
        <div className='card' onClick={Click}>
            <img src={country.flags.png} alt={"Drapeau " + country.translations.fra.common} />
            <div className="card-infos">
                <h3>{country.translations.fra.common}</h3>
                <p>Population: {new Intl.NumberFormat().format(country.population)}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
                <p>Indicatif: {country.idd.root + country.idd.suffixes}</p>
            </div>
        </div>
    );
};

export default Card;