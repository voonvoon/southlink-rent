import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MetaTags from '../../../utils/helmet';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import FaceIcon from '@mui/icons-material/Face';
import BadgeIcon from '@mui/icons-material/Badge';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return(
        <>
        <MetaTags />
        <div>
            <h1>Contact US</h1>
            <hr/>
            <h4 className='team-pro'>As a professional property agent, We assist both tenants and landlords in finding and renting units.</h4>

            <div className='agent-details'>
                <div className='agent-particulars'>
                    <p><FaceIcon/> Name: Peter Wong</p>
                    <p><BadgeIcon/> Ren No: REN 18361</p>
                    <p><AddBusinessIcon/> Company: PROPNEX REALTY SDN BHD (E (1) 1800)</p>
                    <p><LocalPhoneIcon/> phone : 018-3795728</p>
                    <p><EmailIcon/> email: hvlifeasy@gmail.com</p>
                 
                  
                    <Button variant="contained" color="success" size="small" className='mb-3'>
                            <a href="https://wa.link/e9g91q" target="_blank" className="contact-icon-1">
                            <WhatsAppIcon/> WhatsApp Us</a>
                    </Button>
                </div>

           
                <img src='https://res.cloudinary.com/dvsb4asug/image/upload/v1674802826/rentbase_upload/profile_oqtq8u.jpg' alt="My Image" className='agent_pic'/>
            </div>

            <hr/>
          
        </div>  
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

       
        <footer className="footer">
                <p className="copyright">
                    Copyright &copy; All Right Reserved
                </p>

                <Link to='/policy' className='policy'>
                        Disclaimer and Use of Policy
                </Link>
            </footer>
        </>
    )
}

export default Contact;