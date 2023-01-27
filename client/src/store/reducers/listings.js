import { createSlice } from '@reduxjs/toolkit';
import {
    addListing,
    getPaginateListings,
    changeStatusListing,
    homeLoadMore,
    getListing
} from '../actions/listings';



export const listingsSlice = createSlice({
    name:'listings',
    initialState:{
        homeSort:{
            sortby:"_id",
            order:"desc",
            limit:4,
            skip:0
        },
        loading:false,
        listings:[],
        current:null
    },
    reducers:{

    },
    extraReducers:(builder) => {
        builder
        //Add Article
        .addCase(addListing.pending,(state)=>{ state.loading = true })
        .addCase(addListing.fulfilled,(state, action)=>{ 
            state.loading = false;
            state.lastAdded = action.payload 
        })
        .addCase(addListing.rejected,(state)=>{ state.loading = false })
        //Get paginate listings
        .addCase(getPaginateListings.pending,(state)=>{ state.loading = true })
        .addCase(getPaginateListings.fulfilled,(state, action)=>{ 
            state.loading = false;
            state.adminListings = action.payload 
        })
        .addCase(getPaginateListings.rejected,(state)=>{ state.loading = false })
        //Change Status listing
        .addCase(changeStatusListing.fulfilled,(state,action)=>{
            state.adminListings.docs = action.payload
        })
        ///Home load more
        .addCase(homeLoadMore.fulfilled,(state,action)=>{
            state.homeSort.skip = action.payload.sort.skip
            state.listings = action.payload.newState
        })
        ///Get Listing
        .addCase(getListing.pending,(state)=>{ state.loading = true })
        .addCase(getListing.fulfilled,(state, action)=>{ 
            state.loading = false;
            state.current = action.payload
        })
        .addCase(getListing.rejected,(state)=>{ state.loading = false })

        
    }
})



export default listingsSlice.reducer;