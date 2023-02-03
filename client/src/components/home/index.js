import { useEffect } from 'react';
import MetaTags from '../../utils/helmet';

//mui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

//redux
import { useDispatch, useSelector } from 'react-redux';
import {homeLoadMore } from '../../store/actions/listings';

import ListingCard from '../../utils/listingCard';

const Home = () => {
    const listings = useSelector(state=>state.listings);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(listings.listings.length <=0){
            dispatch(homeLoadMore(listings.homeSort))
        }  
    },[dispatch])

    const getNextListings = () =>{
        let skip = listings.homeSort.skip + listings.homeSort.limit;
        dispatch(homeLoadMore({...listings.homeSort, skip:skip}))
    }

    return(
        <>
        <MetaTags/>
            <Grid container spacing={2} className="article_card">
                { listings && listings.listings ? 
                    listings.listings.map(item=>(
                        <Grid key={item._id} item xs={12} sm={6} lg={3}>
                            <ListingCard listing={item}/>
                        </Grid>
                    ))
                :null}
            </Grid>
            <hr/>
            <Button
                variant='outlined'
                onClick={getNextListings}
            >
                Load More
            </Button>
            
            <br/>
            <br/>
            <footer class="footer">
            <p className='footer-msg'>We assist both tenants and landlords in finding and renting units.</p>
                <p class="copyright">
                    Copyright &copy; Rentbase All Right Reserved
                </p>
            </footer>
        </>
    )
}

export default Home;