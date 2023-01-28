import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
    return(
        <>
        <div>
            <h1>Contact US</h1>
            <hr/>
            <h4 className='team-pro'>We are a team of professional agents specialize in Bangsar South.</h4>
            <hr/>

            <div className='agent-details'>
                <div className='agent-particulars'>
                    <p>Peter Wong</p>
                    <p>Ren No: REN 18361</p>
                    <p>Company: PROPNEX REALTY SDN BHD (E (1) 1800)</p>
                    <p>phone : 018-3795728</p>
                    <p>email: hvlifeasy@gmail.com</p>
                 
                    <a href="https://wa.link/e9g91q" target="_blank" className="contact-icon-contact">
                    <WhatsAppIcon/> WhatsApp Us</a>
                </div>

           
                <img src='https://res.cloudinary.com/dvsb4asug/image/upload/v1674802826/rentbase_upload/profile_oqtq8u.jpg' alt="My Image" className='agent_pic'/>
            </div>

            <hr/>
          
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

export default Contact;