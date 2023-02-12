import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MetaTags from '../../../utils/helmet';
import Button from '@mui/material/Button';

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

export default Contact;