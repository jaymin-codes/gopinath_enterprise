import React from "react";
import whatsapp from "../images/whatsapp.png";
import ContactForm from "./ContactForm";

function Footer() {
  const location = {
    address: "13, Vishwakarma Nagar, Dodpa Talav Road, opp. S.T. Nagar, Bhurava, Godhra, Gujarat 389001",
    lat: 22.78740623117039,
    lng: 73.61143140906698,
  };

  return (
    <div className="container mx-auto p-3" id="contact">
      <p id="contact" className="text-3xl text-center font-semibold p-2 mb-4">
        Contact
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* WhatsApp Chat */}
        <div className="flex flex-col justify-center items-center">
          Contact No: +91 99251 45152
          <a
            className="flex items-center p-2"
            href="https://wa.me/+91-9925145152?text=Hello! I'm interested in discussing [specific service or project] with you. Could you please provide me with more details or arrange a consultation? Thank you!"
          >
            <img className="h-10 mr-2" src={whatsapp} alt="" />
          </a>
        </div>

        {/* Address and Map */}
        <div className="overflow-hidden">
          <p className="p-4 text-lg font-medium">Address: <span className=" font-normal">{location.address}</span></p>
          <div className="w-full">
            <iframe
              className="w-full"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.4139794509024!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39609a343ab04e99%3A0x36aacaaacd5ccfae!2sGopinath%20Enterprise!5e0!3m2!1sen!2sin!4v1712327622058!5m2!1sen!2sin`}
              loading="lazy"
              allowFullScreen=""
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}

export default Footer;
