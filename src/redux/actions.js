import Axios from "axios"

// Games Store
export const BuyPokemon = "BUYPOKEMON"
export const ReturnPokemon = "RETURNPOKEMON"

// Type Async Action
export const FetchPokemonRequest = "FETCHPOKEMONREQUEST"
export const FetchPokemonSuccess = "FETCHPOKEMONSUCCESS"
export const FetchPokemonFailure = "FETCHPOKEMONFAILURE"


export const BuyPokemonActions = (cant) => {
    return {
        type: BuyPokemon,
        payload: cant,
    }
}

export const ReturnPokemonActions = (cant) => {
    return {
        type: ReturnPokemon,
        payload: cant
    }
}

export const FetchPokemonRequestAction = () => {
    return {
        type: FetchPokemonRequest,

    }
}
export const FetchPokemonSuccessAction = (pokemon) => {
    return {
        type: FetchPokemonSuccess,
        payload: pokemon

    }
}
export const FetchPokemonFailureAction = (error) => {
    return {
        type: FetchPokemonFailure,
        payload: error

    }
}

export const FetchPokemonActions = (valor) => {
    return (dispatch) => {
        
        dispatch(FetchPokemonRequestAction());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                dispatch(FetchPokemonSuccessAction([response.data]))
            })

            .catch(error => {
                dispatch(FetchPokemonFailureAction("No se encontró el pokemon "))
            })
    }
}