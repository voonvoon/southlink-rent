import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.92996243431!2d101.66287311425847!3d3.113232797733014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc491306f91725%3A0xdadbffecad513fdc!2sSouthLink%20Lifestyle%20Apartments%2C%20Bangsar%20South!5e0!3m2!1sen!2smy!4v1676529765636!5m2!1sen!2smy"
        width="100%"
        height="500px"
        frameBorder="0"
        title="gglemaps"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Location;
