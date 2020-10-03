import React from 'react';

export default function ResultPokemon() {
    return (
        <div>
            <h3 className="text-white">Resultado: </h3>
            <div className="text-warning">Buscando...</div>
            <div className="text-success">
                <img src="" alt="" />
            </div>
            <span className="text-danger">Error</span>
        </div>
    )
}