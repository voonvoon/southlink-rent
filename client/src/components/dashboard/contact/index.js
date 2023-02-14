import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MetaTags from "../../../utils/helmet";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import FaceIcon from "@mui/icons-material/Face";
import BadgeIcon from "@mui/icons-material/Badge";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <>
      <MetaTags />
      <div>
        <h1>About US</h1>
        <p className="about-us-description">
          As a specialized property agent focused on the Southlink Lifestyle
          Service Apartment, We manage this website exclusively for those looking
          to rent a unit in this luxurious condominium. With ours expertise and
          insider knowledge, clients can find the perfect home to suit their
          unique needs and preferences. We prioritize client satisfaction and
          work tirelessly to ensure their experience is smooth and successful.
        </p>
        <hr />
        <h4 className="team-pro">
          As a professional property agent, We assist both tenants and landlords
          in finding and renting units.
        </h4>

        <div className="agent-details">
          <div className="agent-particulars">
            <p>
              <FaceIcon /> Name: Peter Wong
            </p>
            <p>
              <BadgeIcon /> Ren No: REN 18361
            </p>
            <p>
              <AddBusinessIcon /> Company: PROPNEX REALTY SDN BHD (E (1) 1800)
            </p>
            <p>
              <LocalPhoneIcon /> phone : 018-3795728
            </p>
            <p>
              <EmailIcon /> email: hvlifeasy@gmail.com
            </p>

            <Button
              variant="contained"
              color="success"
              size="small"
              className="mb-3"
            >
              <a
                href="https://wa.link/e9g91q"
                target="_blank"
                className="contact-icon-1"
              >
                <WhatsAppIcon /> WhatsApp Us
              </a>
            </Button>
          </div>

          <img
            src="https://res.cloudinary.com/dvsb4asug/image/upload/v1674802826/rentbase_upload/profile_oqtq8u.jpg"
            alt="My Image"
            className="agent_pic"
          />
        </div>

        <hr />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <footer className="footer">
        <p className="copyright">Copyright &copy; All Right Reserved</p>
        <div className="d-flex">
          <Link to="/policy" className="policy">
            Disclaimer | Terms Of Use |
          </Link>

          <Link to="/intro" className="policy">
            Property Introduction |
          </Link>

          <Link to='/contact' className='policy'>
                            About Us
            </Link>
        </div>
      </footer>
    </>
  );
};

export default Contact;
