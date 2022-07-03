import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Logique from '../Modal/Logique';
import Modal from '../Modal/Modal';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [rangeValue, setRangeValue] = useState(20);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [takKey, setTakeKey] = useState('');
    const radio = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
    
    const {revele, toggle} = Logique();
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) => setCountries(res.data));
    }, []);
    
    function handleClick(index) {
        toggle();
        setTakeKey(index);
    }
    
    return (
        <React.Fragment>
            <Modal revele={revele} pays={countries[takKey]} hide={toggle}/>
            <div className='countries'>
                <h1>Liste des pays</h1>
                <hr />
                <div className="filter">
                    <span>{"(" + rangeValue + ") Pays affiché"}</span>
                    <div className="region">
                        <input type="range"
                            defaultValue={rangeValue}
                            min="1"
                            max="250"
                            onChange={(e) => setRangeValue(e.target.value)} />
                    </div>
                    {radio.map((region, index) => (
                        <div key={index} className="region">
                            <input
                                type="radio"
                                name="region"
                                checked={selectedRegion === region}
                                id={region}
                                onChange={(e) => setSelectedRegion(e.target.id)} />
                            <label
                                htmlFor={region}>{region}
                            </label>
                        </div>
                    ))}
                    {selectedRegion && <div className="region">
                        <button onClick={(e) => setSelectedRegion('')}>Reseter le filtre</button>
                    </div>}
                </div>
                <div className="content">
                    {countries
                        .filter((country) => country.continents[0].includes(selectedRegion))
                        .slice(0, rangeValue)
                        .map((country, index) => (
                            <Card key={index} Click={(e) => handleClick(index)} country={country} pays={countries[index]} hide={toggle}/>
                            
                        ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Countries;