import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {gamesReducer, SearchReducer } from './reducer'

export const defaultGamesState = {
    pokemon: 20,
}
export const initialStateSearch = {
    loading: false,
    pokemon: [],
    error: ''
}

const rootReducers= combineReducers({
    games:gamesReducer,
    seeker:SearchReducer
})

const store= createStore(rootReducers, applyMiddleware(thunk))

export default store;