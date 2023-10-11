import {configureStore} from '@reduxjs/toolkit'
import RestaurantSlice from '../components/RestaurantSlice';
 const store = configureStore({
    reducer : {
       restaurants:RestaurantSlice
    }
})
export default store 