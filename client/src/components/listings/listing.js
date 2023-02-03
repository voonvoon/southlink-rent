import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Loader } from "../../utils/tools";
import { useDispatch, useSelector } from 'react-redux';
import { getListing } from "../../store/actions/listings";

import MetaTags from "../../utils/helmet";

//mui
import SellIcon from '@mui/icons-material/Sell';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import ChairIcon from '@mui/icons-material/Chair';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Carousel from 'react-bootstrap/Carousel';


const Listing = () => {
    const listings = useSelector(state=>state.listings);
    const dispatch = useDispatch();
    const { id } = useParams();  // cuz we use id as keyword in route.

    useEffect(()=>{
        dispatch(getListing(id))
    },[id, dispatch])

    return(
        <>
        <MetaTags/>
            { listings && listings.current ? 
                <div className="article_container">
                    
                        {
                            listings.current.images? 
                            <Carousel className="carousel-style">
                            {listings.current.images.map((item)=>(
                            
                              <Carousel.Item key={item._id}>
                                    <img
                                        className="d-block w-80 image"
                                        style={{
                                        background:`url(${item})`
                                        }}
                                    />
                                </Carousel.Item>                         
                            ))}
                            </Carousel>
                            : null
                            
                        }
                        
                     
                    <h2 className="mt-3 ">{listings.current.propName}</h2>
                    <div className="mt-3 content">
                        <div>
                            
                            <hr/>
                            <div className="listing-info-container">
                                <div className="listing-info-container-1">
                                    <div className="listing-items">
                                        <SellIcon/> Rental : RM {listings.current.rental} /Mth
                                    </div>
                                    <div className="listing-items">
                                        <AspectRatioIcon/> Size : {listings.current.size} sq ft
                                    </div>
                                    <div className="listing-items">
                                        <ChairIcon/> {listings.current.furnishing}
                                    </div>
                                    <div className="listing-items">
                                        <BedroomParentIcon/> No. Bed Rooms : {listings.current.numberBedRooms}
                                    </div>
                                    <div className="listing-items-contact">
                                            <a href="https://wa.link/8yqwfy" target="_blank" className="contact-icon">
                                            <WhatsAppIcon/> WhatsApp Us</a>

                                    </div>
                                </div>
                                <div className="listing-info-container-2">
                                    {listings.current.description}
                                </div>
                                
                            </div>
                            <hr/>
                        </div>
                    </div>

                </div>
            :
            <Loader/>
 
            }

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

export default Listing;