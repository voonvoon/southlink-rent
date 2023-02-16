import {Link} from 'react-router-dom'
import CarouselFadeExample from "./gallary";
import SocialIcons from '../home/social';
import Location from '../location';

const Southlink = () => {
  return (
    <div className="intro-container">
      <div className="photo-container">
        <h4>Introduction</h4>
        <CarouselFadeExample />
        <hr />
      </div>

      <div className="intro-description">
        <h4>Description</h4>
        <h2>South Link Lifestyle Apartments </h2>
        <p>
          South Link Lifestyle Apartments is a new residential complex located
          on Jalan Kerinchi Kiri in the bustling district of Bangsar South,
          Kuala Lumpur. Developed by UOA Group, one of the major property groups
          in Malaysia, the complex spans across 2.2 acres of freehold land and
          will be a single block of 44 storeys housing 1,422 apartment units
          once completed. This impressive residential complex is equipped with a
          range of apartment facilities, including a multi-purpose hall, fully
          equipped gym, wading pool, pool deck, kids' playground, covered
          parking, and yoga terrace. In addition, the development offers
          convenient access to the surrounding area, with easy access to Jalan
          Kerinchi and Jalan Pantai Baru. Residents of South Link Lifestyle
          Apartments will enjoy proximity to a wide range of amenities,
          including taxi stands, bus stops, LRT stations, banks, shopping
          outlets, restaurants, educational institutions, and healthcare service
          providers, making it a perfect choice for those looking for a modern,
          convenient lifestyle.
        </p>
        <h2>Ideas and Concepts</h2>
        <p>
          UOA Group's Southlink lifestyle apartment complex is situated in the
          well-established township of Bangsar South, offering residents easy
          access to all necessary amenities. The property boasts a 2-storey
          lifestyle retail podium, making shopping convenient for residents, and
          it also provides business owners with the opportunity to live and work
          in the same location. Business owners can take advantage of the podium
          space while residing in one of the residential units. Southlink offers
          a range of living options to meet the diverse needs of residents. The
          development features studios, two-bedroom, and three-bedroom units
          that cater to single individuals, couples, and small families. Choose
          the housing option that best suits your needs and lifestyle.
        </p>
        <h3>Details</h3>
        <p>
          South Link Lifestyle Apartments has an abundance of in-house
          facilities that offer residents a high-quality living experience. The
          development features a multi-purpose hall, fully equipped gym, wading
          pool, pool deck, kids' playground, covered parking, yoga terrace,
          surau (with separate male and female sections), pantry, barbecue pits,
          gazebo, rest room, changing room, and perimeter fencing. The property
          also boasts multi-level 24-hour security surveillance with smart card
          security access and an intercom system, ensuring that residents can
          feel safe and secure at all times. Built on 2.2 acres of freehold
          land, South Link is a single block of 52 storeys that will house a
          total of 1,422 serviced residential units with built-up areas ranging
          from 452 sq ft to 904 sq ft. The units feature eight practical layout
          designs, including A, A1, B, C, C1, D, E, and F, which cater to a
          diverse range of needs. The development includes studios, two-bedroom,
          and three-bedroom units, providing residents with a variety of housing
          options to choose from.
        </p>
        <h3>Accessibility And Amenities</h3>
        <p>
          South Link Lifestyle Apartments boasts excellent accessibility through
          Jalan Kerinchi, which provide convenient access to major highways such
          as the New Pantai Expressway, Kerinchi Link, Federal Highway, and the
          upcoming Setiawangsa-Pantai Expressway. This prime location is a boon
          for residents who rely on public transportation, with ample buses and
          taxis plying the surrounding areas. Moreover, the Universiti and
          Kerinchi LRT stations are situated a stone's throw away from the
          property, making it easy for commuters to travel across Kuala Lumpur.
          The development is surrounded by a plethora of amenities, such as
          banks, shopping outlets, restaurants, educational institutions, and
          healthcare service providers. Whether you need to run errands, indulge
          in retail therapy, or seek medical attention, you'll find everything
          you need just a short distance away. This prime location, combined
          with the wealth of amenities nearby, makes South Link Lifestyle
          Apartments an ideal choice for those seeking a convenient and modern
          lifestyle.
        </p>
        <Location/>

        <h3>Developer Details</h3>
        <p>
          UOA Group, one of Malaysia's major property development companies, is
          the developer of South Link. This prominent developer has also
          completed several other projects, including the South View Serviced
          Apartments and United Point Residence in Kepong.
          <br/>
          <br/>
          <a href="https://uoa.com.my/property/details/south-link-lifestyle-apartments/" target="_blank">UOA Group-SouthLink Lifestyle Service apartment </a>
        </p>
      </div>
        <br/>
        
        <SocialIcons/>
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
  );
};

export default Southlink;
