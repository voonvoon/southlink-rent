import { Link as RouterLink } from 'react-router-dom';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    Typography,
    Button
} from '@mui/material'

//ante 
import { Badge } from "antd";
import moment from 'moment';


import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import WeekendIcon from '@mui/icons-material/Weekend';



const ListingCard = ({listing}) => {
    return(
    <Badge.Ribbon text={`since ${moment(listing.date).fromNow()}`} color="purple">
        <Card elevation={6}>
            <CardMedia 
                style={{height:0,paddingTop:'56.25%'}}
                image={`${listing.images[0]}`}
                title="some title"
                className='card_photo'
            />
            <CardContent className='p-0'>
                <Typography gutterBottom variant='h6' component="h3" fontWeight="600" className='text-center mb-0'>
                    {listing.propName}
                </Typography>
                <p className="mb-0 text-center">Jalan Kerinchi Kiri 2, Bangsar South KL</p>
                <hr/>
                <div className='list-card-items'>
                    <div className='list-card-items-children'>
                        <MonetizationOnIcon/>
                        RM {listing.rental}
                    </div>

                    <div className='list-card-items-children'>
                        <AspectRatioIcon/>
                    {listing.size} Sqft
                    </div>

                    <div className='list-card-items-children'>
                        <BedroomParentIcon/>
                    Rooms: {listing.numberBedRooms}
                    </div>

                    <div className='list-card-items-children'>
                        <WeekendIcon/>
                    {listing.furnishing}
                    </div>
                </div>
            </CardContent>
            <hr/>
    
                <CardActions className='p-0'>
                    <div>
                        <IconButton>
                            <MapsHomeWorkIcon/>
                        </IconButton>
                        <Button
                            size="small"
                            color="primary"
                            component={RouterLink}
                            to={`/listings/listing/${listing._id}`}
                        >
                            View Property
                        </Button>
                    </div>
                </CardActions>
            
        </Card>
    </Badge.Ribbon>
    )
}

export default ListingCard;