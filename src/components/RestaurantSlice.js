import{createSlice} from "@reduxjs/toolkit"


const initialState = {
    data:[]
}

const RestaurantSlice = createSlice ({
    name:"Restaurant Deails",
    initialState,
    reducers:{
        getRestaurantData:(state,action)=>{
           state.data = action.payload

        }
    }
});
export const {getRestaurantData} = RestaurantSlice.actions;

export default RestaurantSlice.reducer;