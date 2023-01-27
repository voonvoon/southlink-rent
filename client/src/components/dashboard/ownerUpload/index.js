import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const OwnerUpload = () => {
    return(
        <>
        <div className="owner-upload">
        Property owner who would like to  upload property to us, kindly register as a user here:  
        <Link to='/auth' className='fredoka_ff'>
            Register as user
        </Link> 
        <br/>
         a validation email will be sent to your email, once verified, owner will be able to upload their property in Dashboard.
         <br/> 
         Or property owner can just whatsapp us the details here: 
         <a href="https://wa.link/i3336h" target="_blank" className="contact-icon">
        <br/>
         <WhatsAppIcon/> Provide property for rent</a>
        <br/>
        <br/>
         **We assure you that your data will be protected and kept secure on our website.
        </div>

         <br/>
            <footer class="footer">
                <p class="copyright">
                    Copyright &copy; Rentbase All Right Reserved
                </p>
            </footer>
        </>
    )
}

export default OwnerUpload;