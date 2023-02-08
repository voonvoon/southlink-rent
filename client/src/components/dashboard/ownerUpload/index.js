import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import MetaTags from "../../../utils/helmet";
import Button from '@mui/material/Button';

const OwnerUpload = () => {
    return(
    <>
        <MetaTags/>
        <div className="upload-container">
                <Link to='/' className='navbar-brand d-flex align-items-center fredoka_ff rentbase-logo'>
                    Rentbases@Bangsar South
                </Link>

                <div className="owner-upload">
                    Property owner who would like to  upload property to us, kindly register as a user here:  
                    <Link to='/auth' className="register-as-user">
                        <AppRegistrationIcon/>Register as user
                    </Link>     
                    <br/>
                    <br/>
                    A validation email will be sent to your email, once verified, owner will be able to upload their property in Dashboard.
                    <br/> 
                    <br/>
                    Or property owner can just whatsapp us the details here: 
                    <br/>
                    <br/>
                    <Button variant="contained" color="success" size="small" className='mb-3'>
                            <a href="https://wa.link/i3336h" target="_blank" className="contact-icon-1">
                            <WhatsAppIcon/> Provide property for rent</a>
                    </Button>
                    <br/>
                    <br/>
                    <p className="data-protect-text"> **We assure you that your data will be protected and kept secure on our website.</p>
                </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
         <footer class="footer">
                <p className='footer-msg'>Disclaimer:This website and its owners provide information on property rental list, but do not guarantee its accuracy, completeness, 
                        reliability, or availability. Use of the information is at your own risk. The website and its owners will not be liable
                        for any loss or damage arising from the use of this website. The website may contain links to third-party sites, but the 
                        owners have no control over their content and take no responsibility for their availability. The website owners make every
                        effort to keep the site running smoothly, but will not be liable for technical issues beyond their control.</p>
                <p class="copyright">
                    Copyright &copy; Rentbases All Right Reserved
                </p>
            </footer>
        </div>
    </>
    )

}

export default OwnerUpload;