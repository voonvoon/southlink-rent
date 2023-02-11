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
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <footer className="footer">
                <p className='footer-msg'>Disclaimer:This website and its owners provide information on property rental list, but do not guarantee its accuracy, completeness, 
                        reliability, or availability. Use of the information is at your own risk. The website and its owners will not be liable
                        for any loss or damage arising from the use of this website. The website may contain links to third-party sites, but the 
                        owners have no control over their content and take no responsibility for their availability. The website owners make every
                        effort to keep the site running smoothly, but will not be liable for technical issues beyond their control.</p>
                <p className="copyright">
                    Copyright &copy; All Right Reserved
                </p>
            </footer>
        </>
    )
}

export default Home;