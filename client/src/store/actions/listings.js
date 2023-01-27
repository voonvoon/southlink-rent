import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorGlobal, successGlobal } from '../reducers/notifications'
import { getAuthHeader } from '../../utils/tools';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const addListing = createAsyncThunk(
    'listings/addListing',
    async(listing, { dispatch }) => {
        try{
            const request = await axios.post(`/api/listings/`,listing, getAuthHeader());
            dispatch(successGlobal('listing is added, once approved will show on main page.'))
            return request.data;
        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error
        }
    }
)

export const getAdminListing = createAsyncThunk(
    'listings/getAdminListing',
    async(_id, { dispatch }) => {
        try{
            const request = await axios.get(`/api/listings/listing/${_id}`, getAuthHeader());
            return request.data;
        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error
        }
    }
)

export const updateListing = createAsyncThunk(
    'listings/updateListing',
    async({values,articleId}, { dispatch }) => {
        try{
           await axios.patch(`/api/listings/listing/${articleId}`,values,getAuthHeader());
           dispatch(successGlobal('your listing is updated.'))
           return true;
        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error
        }
    }
)

export const getPaginateListings = createAsyncThunk(
    'listings/getPaginateListings',
    async({page=1,limit=8,keywords=''}, { dispatch }) => {   
        try{
            const request = await axios.post(`/api/listings/admin/paginate`,{
                page,
                limit,
                keywords
            },getAuthHeader())
            return request.data;
        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error
        }
    }
)

export const changeStatusListing = createAsyncThunk(
    'listings/changeStatusListing',
    async({newStatus,_id}, { dispatch, getState }) => {   
        try{
            const request = await axios.patch(`/api/listings/listing/${_id}`,{
                status:newStatus
            },getAuthHeader());

            let listing = request.data;
            /// previous state
            let state = getState().listings.adminListings.docs;
            /// find the position
            let position = state.findIndex( listing => listing._id === _id );  // 0,1,2..
            // cannot mutate 'let state' so create copy:
            const newState = [...state];
            newState[position] = listing;

            dispatch(successGlobal('Status changed successfully!'))
            return newState;

        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error
        }
    }
)

export const removeListing = createAsyncThunk(
    'listings/removeListing',
    async(_id,{ dispatch, getState }) => {     // use getState cuz need knw which pg we are.
        try{
           await axios.delete(`/api/listings/listing/${_id}`, getAuthHeader())
           dispatch(successGlobal('Listing has been removed.'))

           //need to fetch again so call this: 
           let page = getState().listings.adminListings.page;    // so we know which pg we are
           dispatch(getPaginateListings({page}))   // reload this page
           return true;  // no need to reducer.

        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error
        }
    }
)

export const homeLoadMore = createAsyncThunk(
    'listings/homeLoadMore',
    async(sort,{ dispatch, getState }) => {    
        try{
          const listings = await axios.post(`/api/listings/all`,sort);
          const state = getState().listings.listings;

          const prevState = [...state];
          const newState = [...prevState, ...listings.data]

          return { newState, sort }

        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error
        }
    }
)

export const getListing = createAsyncThunk(
    'listings/getListing',
    async(id,{ dispatch}) => {    
        try{
            const request = await axios.get(`/api/listings/users/listing/${id}`)
            return request.data

        } catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error
        }
    }
)