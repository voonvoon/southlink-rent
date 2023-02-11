import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Loader } from "../../utils/tools";
import { useDispatch, useSelector } from 'react-redux';
import { getListing } from "../../store/actions/listings";

import MetaTags from "../../utils/helmet";

//mui
import Button from '@mui/material/Button';
import SellIcon from '@mui/icons-material/Sell';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import ChairIcon from '@mui/icons-material/Chair';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import UpdateIcon from '@mui/icons-material/Update';

import Carousel from 'react-bootstrap/Carousel';

import moment from 'moment';


const Listing = () => {
    const listings = useSelector(state=>state.listings);
    const dispatch = useDispatch();
    const { id } = useParams();  // cuz we use id as keyword in route.

    
    useEffect(()=>{
        dispatch(getListing(id))
    },[id, dispatch])

    const openWhatsAppWithMessage = (phoneNumber, message1, message2) => {
        const combinedMessage = `${message1}\n\n${message2}`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(combinedMessage)}`, '_blank');
      }
      

    return(
        <>
        <MetaTags/>
            { listings && listings.current ? 
                <div className="article_container">
                    
                        {
                            listings.current.images? 
                            <Carousel className="carousel-style">
                            {listings.current.images.map((item)=>(
                            //${item._id}-${Date.now()}
                              <Carousel.Item key={item}>
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
                        
                     
                    <h1 className="mt-4 list-prop-name">{listings.current.propName}</h1>
                    <div className="content">
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
                                    <div className="listing-items">
                                        <UpdateIcon/> Posted on : {moment(listings.current.date).format('DD/MM/YYYY')}
                                    </div>

                                    {/* <Button variant="contained" color="success" size="large">
                                            <a href="https://wa.link/8yqwfy" target="_blank" className="contact-icon">
                                            <WhatsAppIcon/> WhatsApp Us</a>
                                    </Button> */}

                                    <Button variant="contained" color="success" size="large" onClick={()=>openWhatsAppWithMessage('60183795728','Hi,I am interested to this listing :', `${window.location.href}`)}>
                                            <WhatsAppIcon/> WhatsApp Us
                                    </Button>
                                    

                                </div>
                                <div className="listing-info-container-2" >

                                    <div dangerouslySetInnerHTML={{ __html: listings.current.description.replace(/\n/g, '<br />') }} />
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

export default Listing;