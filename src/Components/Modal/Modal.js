import React from 'react';

const Modale = ({revele, pays, hide}) => revele ?(
    <React.Fragment>
        <div className="overlay" onClick={hide}></div>
        <div className='wrapper'>
                <div className="header">
                    <button onClick={hide}>X</button>
                </div>
            <div className="modal-content">
                <div className="body">
                    <div className="flag">
                        <img src={pays.flags.png} alt={"Drapeau " + pays.translations.fra.common} />
                        <div className="infos-flags">
                            <img src={pays.coatOfArms.png} alt={"Bandeau " + pays.translations.fra.common} />
                            <h3>{pays.translations.fra.common}</h3>
                        </div>
                    </div>
                    <div className="infos">
                        <p>Population: {new Intl.NumberFormat().format(pays.population)}</p>
                        <p>Capital: {pays.capital}</p>
                        <p>Continant : {pays.region} </p>
                        <p>Indicatif: {pays.idd.root + pays.idd.suffixes}</p>
                    </div>
                </div>
                
            </div>
        </div>
    </React.Fragment>
): null;

export default Modale;