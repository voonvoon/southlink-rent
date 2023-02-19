import { useEffect } from 'react';
import MetaTags from '../../utils/helmet';
import { Link } from 'react-router-dom';

//mui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';



//redux
import { useDispatch, useSelector } from 'react-redux';
import {homeLoadMore } from '../../store/actions/listings';

import ListingCard from '../../utils/listingCard';
import SocialIcons from './social';
import IosShareIcon from '@mui/icons-material/IosShare';

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
        <div className='home-container'>
        <MetaTags/>
        <Link to='/owner-upload' className='header-owner-upload'>
               <IosShareIcon className='center'/> List your property to us
        </Link>
            <Grid container spacing={2} className="mt-0 article_card">
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
                className='load-more'
            >
                Load More
            </Button>
            <br/>
            <br/>
         
            <SocialIcons/>
      
            
            <footer className="footer">
                <p className="copyright">
                    Copyright &copy; All Right Reserved
                </p>
                <div className='d-flex'>
                    <Link to='/policy' className='policy'>
                            Disclaimer | Terms Of Use  |
                    </Link>
                        
                    <Link to='/intro' className='policy'>
                            Property Introduction |
                    </Link>

                    <Link to='/contact' className='policy'>
                            About Us
                    </Link>
                </div>
            </footer>
        </div>
    )
}

export default Home;