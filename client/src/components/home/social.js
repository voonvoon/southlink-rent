import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import {Link} from 'react-router-dom';

const SocialIcons = () => {
    return(
        <div className="social-icons">
            <h4 className="follow-us-text">Follow Us : </h4>
            <a
                href="https://www.facebook.com/profile.php?id=100090484025028"
                target="_blank"
                className="contact-icon-1"
              >
                <FacebookIcon  style={{ fontSize: 28 , color:' #1877f2'}}/>
              </a>

              <a
                href="https://www.instagram.com/rentbase220/"
                target="_blank"
                className="contact-icon-1"
              >
                <InstagramIcon style={{ fontSize: 28 ,color:'#E4405F' }}/>
              </a>

              <a
                href="https://wa.link/e9g91q"
                target="_blank"
                className="contact-icon-1"
              >
                <WhatsAppIcon style={{ fontSize: 28 ,color:'#25D366'}}/>
              </a>
            
            
            
        </div>
    )
}

export default SocialIcons;

            