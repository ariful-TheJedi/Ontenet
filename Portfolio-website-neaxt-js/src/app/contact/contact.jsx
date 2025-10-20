"use client"


import React, { useState, useEffect } from 'react';

// import './Contact.css';

const Contact = () => {
  const [activeClinic, setActiveClinic] = useState('all');

  // Clinic data
  const clinics = [
    {
      id: 'Shyamoli',
      name: 'Alliance Hospital Limited',
      address: '24/3, Khilji Road(Ring Road),Shyamoli,Dhaka-1207',
      phone: '+88 02 222243620-22, +8801720422448',
      email: 'sufisabih@gmail.com',
      image: 'https://alliancehospitalbd.com/wp-content/uploads/2024/08/about-img-1.jpg',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2457729016455!2d90.3640743!3d23.7742609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1b64516dd81%3A0x688d6881b977d083!2sAlliance%20hospital%20limited!5e0!3m2!1sen!2sbd!4v1759240736246!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrad',
      hours: [
        { day: 'Saturday - Monday', time: '2:30 PM - 3:30 PM' },
        { day: 'Wednesday - Thursday', time: '2:30 AM - 3:30 PM' },
        { day: 'Friday', time: 'Close' },
        { day: 'Tuesday', time: 'Closed' }
      ]
    },
    {
      id: 'Dhanmondi',
      name: 'Popular Diagnostic Centre Ltd.',
      address: 'Floor no 6,Room no 508,House #16,Road No. 2, Dhanmondi,Dhaka 1205',
      phone: '+8801604707090',
      email: 'sufisabih@gmail.com',
      image: 'https://i.ytimg.com/vi/gILByEZR6bc/sddefault.jpg',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2197074814962!2d90.3821725!3d23.7395434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ca7af5f82b%3A0xce7d1ab6b16a027!2sPopular%20Diagnostic%20Centre%20Ltd.!5e0!3m2!1sen!2sbd!4v1759241726234!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
      hours: [
        { day: 'Saturday - Monday', time: '4:00 PM - 9:00 PM' },
        { day: 'Wednesday - Thursday', time: '4:00 AM - 9:00 PM' },
        { day: 'Friday', time: '8:00 PM - 10:00 PM' },
      ]
    },
    {
      id: 'Savar',
      name: 'Popular Diagnostic Centre Ltd.',
      address: 'Nargis Tower, House No. E/22, Talbagh, Thana Bus Stand, Dhaka - Aricha Hwy, Savar 1340',
      phone: '+8801604707090',
      email: 'sufisabih@gmail.com',
      image: 'https://doctorshomebd.com/wp-content/uploads/2023/11/Savar-Branch-Popular-Diagnostic-Centre-1024x683.jpg',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.3999029356514!2d90.2572399!3d23.839929299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebcbfdb7276f%3A0xad55de08f96a399e!2sPopular%20Diagnostic%20Center%20Ltd.%20(Savar)!5e0!3m2!1sen!2sbd!4v1759242120883!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
      hours: [
        { day: 'Tuesday', time: '3:00 PM - 9:00 PM' },
        { day: 'Friday', time: '8:00 AM - 6:00 PM' },
      ]
    }
  ];

  // QR code data
  const qrCodes = [
    {
      id: 'main',
      title: 'Save Contact',
      data: 'BEGIN:VCARD\nVERSION:3.0\nFN:Dr. Michael Smith\nTEL;WORK;VOICE:(555) 123-4567\nEMAIL:contact@drsmith.com\nORG:Dr. Smith Medical Practice\nADR:123 Healthcare Ave, Suite 101, Downtown, NY 10001\nEND:VCARD',
      url: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BEGIN%3AVCARD%0AVERSION%3A3.0%0AFN%3ADr.%20Michael%20Smith%0ATEL%3BWORK%3BVOICE%3A(555)%20123-4567%0AEMAIL%3Acontact%40drsmith.com%0AORG%3ADr.%20Smith%20Medical%20Practice%0AADR%3A123%20Healthcare%20Ave%2C%20Suite%20101%2C%20Downtown%2C%20NY%2010001%0AEND%3AVCARD'
    },
    {
      id: 'uptown',
      title: 'Uptown Clinic',
      data: 'BEGIN:VCARD\nVERSION:3.0\nFN:Dr. Michael Smith - Uptown\nTEL;WORK;VOICE:(555) 987-6543\nEMAIL:uptown@drsmith.com\nORG:Uptown Health Center\nADR:456 Wellness Blvd, Uptown, NY 10022\nEND:VCARD',
      url: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BEGIN%3AVCARD%0AVERSION%3A3.0%0AFN%3ADr.%20Michael%20Smith%20-%20Uptown%0ATEL%3BWORK%3BVOICE%3A(555)%20987-6543%0AEMAIL%3Auptown%40drsmith.com%0AORG%3AUptown%20Health%20Center%0AADR%3A456%20Wellness%20Blvd%2C%20Uptown%2C%20NY%2010022%0AEND%3AVCARD'
    },
    {
      id: 'westside',
      title: 'Westside Clinic',
      data: 'BEGIN:VCARD\nVERSION:3.0\nFN:Dr. Michael Smith - Westside\nTEL;WORK;VOICE:(555) 456-7890\nEMAIL:westside@drsmith.com\nORG:Westside Family Clinic\nADR:789 Medical Plaza, Westside, NY 10024\nEND:VCARD',
      url: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BEGIN%3AVCARD%0AVERSION%3A3.0%0AFN%3ADr.%20Michael%20Smith%20-%20Westside%0ATEL%3BWORK%3BVOICE%3A(555)%20456-7890%0AEMAIL%3Awestside%40drsmith.com%0AORG%3AWestside%20Family%20Clinic%0AADR%3A789%20Medical%20Plaza%2C%20Westside%2C%20NY%2010024%0AEND%3AVCARD'
    }
  ];



  // Open map in new tab
  const openMap = (mapUrl) => {
    const fullMapUrl = mapUrl.replace('embed', 'view');
    window.open(fullMapUrl, '_blank');
  };

  // Filter clinics based on active selection
  const filteredClinics = activeClinic === 'all' 
    ? clinics 
    : clinics.filter(clinic => clinic.id === activeClinic);

  return (
    <div className="contact-wrapper">
      <header className="contact-header">
        <div className="contact-header-content">
          <h1 className="contact-title">Dr. Muhammad Abdur Razzak</h1>
          <p className="contact-subtitle">Transplant Nephrologist</p>
          <div className="contact-summary">
            <div className="contact-summary-item">
              <i className="fas fa-phone"></i>
              <span>Call: +88 01604707090</span>
            </div>
            <div className="contact-summary-item">
              <i className="fas fa-envelope"></i>
              <span>Email: sufisabih@gmail.com</span>
            </div>
            <div className="contact-summary-item">
              <i className="fas fa-clock"></i>
              <span>Mon-Sun: 10AM-6PM</span>
            </div>
          </div>
        </div>
      </header>

      <div className="contact-container">
        {/* <div className="contact-emergency">
          <div className="contact-emergency-content">
            <h2 className="contact-emergency-title">
              <i className="fas fa-exclamation-circle"></i> Emergency Contact
            </h2>
            <p>For urgent medical concerns after hours, please call:</p>
            <div className="contact-emergency-phone">(555) 911-HELP</div>
            <p>Available 24/7 for established patients</p>
          </div>
        </div>
         */}
        <h2 className="contact-section-title">Hospital & Clinic Locations</h2>
        
        <div className="contact-clinic-selector">
          <button 
            className={`contact-clinic-tab ${activeClinic === 'all' ? 'contact-active' : ''}`}
            onClick={() => setActiveClinic('all')}
          >
            All Clinics
          </button>
          <button 
            className={`contact-clinic-tab ${activeClinic === 'Shyamoli' ? 'contact-active' : ''}`}
            onClick={() => setActiveClinic('Shyamoli')}
          >
            Shyamoli
          </button>
          <button 
            className={`contact-clinic-tab ${activeClinic === 'Dhanmondi' ? 'contact-active' : ''}`}
            onClick={() => setActiveClinic('Dhanmondi')}
          >
            Dhanmondi
          </button>
                    <button 
            className={`contact-clinic-tab ${activeClinic === 'Savar' ? 'contact-active' : ''}`}
            onClick={() => setActiveClinic('Savar')}
          >
            Savar
          </button>
          {/* <button 
            className={`contact-clinic-tab ${activeClinic === 'westside' ? 'contact-active' : ''}`}
            onClick={() => setActiveClinic('westside')}
          >
            Westside
          </button> */}
        </div>
        
        <div className="contact-clinics-container">
          {filteredClinics.map(clinic => (
            <div 
              key={clinic.id} 
              className={`contact-clinic-card ${activeClinic === 'all' || activeClinic === clinic.id ? 'contact-active' : ''}`}
            >
              <img src={clinic.image} alt={clinic.name} className="contact-clinic-image" />
              <div className="contact-clinic-info">
                <h3 className="contact-clinic-name">
                  <i className="fas fa-map-marker-alt"></i> {clinic.name}
                </h3>
                <p className="contact-clinic-address">
                  <i className="fas fa-location-arrow"></i>
                  {clinic.address}
                </p>
                
                <div className="contact-clinic-hours">
                  <p className="contact-hours-title">
                    <i className="fas fa-clock"></i> Consultation Hours
                  </p>
                  <ul className="contact-hours-list">
                    {clinic.hours.map((hour, index) => (
                      <li key={index}>
                        <span>{hour.day}</span> <span>{hour.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="contact-details">
                  <div className="contact-detail">
                    <i className="fas fa-phone"></i>
                    <a href={`tel:${clinic.phone}`} className="contact-link">{clinic.phone}</a>
                  </div>
                  <div className="contact-detail">
                    <i className="fas fa-envelope"></i>
                    <a href={`mailto:${clinic.email}`} className="contact-link">{clinic.email}</a>
                  </div>
                  {/* <div className="contact-detail">
                    <i className="fab fa-whatsapp"></i>
                    <a href={`https://wa.me/${clinic.whatsapp}`} className="contact-link">Chat on WhatsApp</a>
                  </div> */}
                </div>
                
                <div className="contact-map-container">
                  <iframe 
                    src={clinic.map} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${clinic.name}`}
                  ></iframe>
                  <div className="contact-map-overlay">
                    <button 
                      className="contact-view-map-btn"
                      onClick={() => openMap(clinic.map)}
                    >
                      View Larger Map
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="contact-qr-section">
          <h2 className="contact-section-title">Quick Contact Save</h2>
          <p>Scan the QR code to save our contact information directly to your phone</p>
          
            <div className="contact-qr-container">
              <div  className="contact-qr-code">
                <img src="/phone-alliance.png" alt={`QR Code for dr Razzak Alliance Hospital Limited `} />
                <p>Save Shymoli Contact</p>
              </div>

              <div  className="contact-qr-code">
                <img src="/phone-popular.png" alt={`QR Code for dr Razzak popular diagnostic center Limited`} />
                <p>Save Popular Diagnostic Center Contact</p>
              </div>

          </div>
          
          <div className="contact-action-buttons">
            <a href="tel:+8801712-900085" className="contact-btn contact-btn-primary">
              <i className="fas fa-phone"></i> Call Now
            </a>
            <a href="https://wa.me/+8801604707090" className="contact-btn contact-btn-accent">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="mailto:sufisabih@gmail.com" className="contact-btn contact-btn-secondary">
              <i className="fas fa-envelope"></i> Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;