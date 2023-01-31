import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const OwnerUpload = () => {
    return(
        <div className="upload-container">
                <Link to='/' className='navbar-brand d-flex align-items-center fredoka_ff rentbase-logo'>
                    Rentbase@Bangsar South
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
                    <a href="https://wa.link/i3336h" target="_blank" className="contact-icon-contact">
                    <br/>
                    <br/>
                    <WhatsAppIcon/> Provide property for rent</a>
                    <br/>
                    <br/>
                    <p className="data-protect-text"> **We assure you that your data will be protected and kept secure on our website.</p>
                </div>

         <br/>
            <footer class="footer">
            <p className='footer-msg'>We assist both tenants and landlords in finding and renting units.</p>
                <p class="copyright">
                    Copyright &copy; Rentbase All Right Reserved
                </p>
            </footer>
        </div>
    )
}

export default OwnerUpload;