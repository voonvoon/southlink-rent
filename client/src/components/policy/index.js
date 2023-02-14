import {Link} from "react-router-dom";

const Policy = () => {
  return (
    <>
      <div className="policy-container">
        <div className="disclaimer">
          <h3>Disclaimer</h3>
          This website and its owners provide information on property rental
          list, but do not guarantee its accuracy, completeness, reliability, or
          availability. Use of the information is at your own risk.The website
          may contain links to third-party sites, but the owners have no control
          over their content and take no responsibility for their availability.
          The website owners make every effort to keep the site running
          smoothly, but will not be liable for technical issues beyond their
          control. This website is not affiliated with any other entity with a similar
          name. The information and materials on this website are provided "as
          is" and we make no representations or warranties of accuracy or
          completeness. Your use of this website is at your own risk and we
          shall not be liable for any damages arising from the use of this
          website.
        </div>

        <br />

        <div className="use-policy">
          <h3>Terms Of Use</h3>
          Welcome to this platform, a platform for listing available
          condominiums for rent. The information and materials on this website
          are provided for informational purposes only. Please read the
          following use policy carefully before using this website. By accessing
          and using this website, you agree to be bound by the following terms
          and conditions.
          <br />
          <br />
          1. Purpose of the Website. This website is intended to provide
          information about available condominiums for rent and to facilitate
          communication between potential renters and landlords or their agents.
          The information provided on this website is for general informational
          purposes only and should not be relied upon as legal or professional
          advice.
          <br />
          <br />
          2. Accuracy of Information. While We makes every effort to ensure that
          the information on this website is accurate, complete, and up-to-date,
          thia website does not guarantee the accuracy, completeness, or
          timeliness of the information and assumes no liability for any errors
          or omissions in the information provided on this website.
          <br />
          <br />
          3. Use of Website. You are granted a limited, non-exclusive,
          non-transferable license to access and use this website for the
          purpose of obtaining information about available condominiums for rent
          and communicating with their agents. You may not use this website for
          any other purpose, including but not limited to, reproducing,
          distributing, or selling the information and materials on this website
          without the express written permission from us.
          <br />
          <br />
          4.Limitation of Liability. We shall not be liable for any damages
          arising from the use of this website or from any information,
          services, or products provided through this website. We do not
          guarantee the availability or reliability of any information,
          services, or products provided through this website, and shall not be
          liable for any damages arising from the unavailability or
          unreliability of such information, services, or products.
          <br />
          <br />
          5.Modification of Use Policy. We reserves the right to modify this use
          policy at any time, and any changes will be effective immediately upon
          posting. Your continued use of this website after any changes are
          posted constitutes your acceptance of the new use policy.
          <br />
          <br />
          By using this website, you acknowledge that you have read and
          understand this use policy and agree to be bound by its terms and
          conditions. If you do not agree with the terms and conditions of this
          use policy, please do not use this website.
        </div>
      </div>
      <br/>

      <footer className="footer">
                <p className="copyright">
                    Copyright &copy; All Right Reserved
                </p>
                <div className='d-flex'>
                    <Link to='/policy' className='policy'>
                            Disclaimer | Terms Of Use  |
                    </Link>
                        
                    <Link to='/intro' className='policy'>
                            Property Introduction
                    </Link>
                </div>
            </footer>
    </>
  );
};

export default Policy;
