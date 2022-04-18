import { combineReducers } from 'redux'
import { productsLikeReducer } from './productsLikeReducer'
import { cartReducer } from './cartReducer'

export const rootReducer = combineReducers({
    productsLikeState: productsLikeReducer,
    productsInCart: cartReducer,
})
