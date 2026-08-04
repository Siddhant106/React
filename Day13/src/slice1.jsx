import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const fetchData = createAsyncThunk(
    // Action: type, payload
    'Coin/fetch',

    async (args, thunkAPI) => {
        try{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`)
            const data = await response.json();
            return data;
        }
        catch(error){
            return rejectWithValue('Error Occured');
        }
    }
)


const slice1 = createSlice({
    name: 'slice1',
    initialState: {data: [], loading: false, error: null},
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchData.pending, (state) => {
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false; 
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})


export default slice1.reducer;
export { fetchData };