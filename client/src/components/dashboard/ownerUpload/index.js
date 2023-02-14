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

                <div className="owner-upload">
                    Property owner who would like to  upload property to us, kindly register as a user here:  
                    <Link to='/auth' className="register-as-user">
                        <AppRegistrationIcon/>Register as user
                    </Link>     
                   
                    , A validation email will be sent to your email, once verified, owner will be able to upload their property in Dashboard.
                    <br/> 
                    <br/>
                    <hr/>
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
    </>
    )

}

export default OwnerUpload;