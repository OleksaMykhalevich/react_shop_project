import { combineReducers } from 'redux'
import { productsLikeReducer } from './productsLikeReducer'
import { cartReducer } from './cartReducer'
import { productsReducer } from './productsReducer'

export const rootReducer = combineReducers({
    productsLikeState: productsLikeReducer,
    productsInCart: cartReducer,
    products: productsReducer,
})
