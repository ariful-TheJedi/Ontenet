
import HomeLatestPosts from "./sub-components/LatestPost"
import qrWhatsapp from "../assets/home-qr-whatsapp.svg";
import { useEffect,useState } from "react";


const url = import.meta.env.VITE_API_DOMAIN;




//videos
const HomeVideoSection = () => {


  return (
    <section className="home-video-section">
      <div className="home-video-header">
        <h2 className="home-video-title"> Some of My Videos </h2>
      </div>

      <div className="home-video-grid">
        {/* Video 1 */}
        <div className="home-video-card">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/xNnJJWm9UaM?si=-EKOG9pxyFECFmgr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        {/* Video 2 */}
        <div className="home-video-card">
             <iframe width="560" height="315" src="https://www.youtube.com/embed/IML3_aoOyBI?si=vC8BWRZOwPlQ6kHV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        {/* Video 3 */}
        <div className="home-video-card">
             <iframe width="560" height="315" src="https://www.youtube.com/embed/x9plPCcXnzQ?si=uwEYJ06alxMXkIIh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      <div className="home-video-footer">
        <a href="/videos" className="home-video-more-btn">View More</a>
      </div>
    </section>
  );
};




const Qualification = () => {

    return(
          <section class="hom-qualifications-section">

    <div class="hom-qualifications-edu">
      <h2><i class="fa-solid fa-user-graduate"></i> Education & Career</h2>
      <div class="hom-qualifications-timeline">
        {/* <div class="hom-qualifications-item">
          <div class="hom-qualifications-text">
            <h3>Doctor of Medicine (MD) in Nephrology - 2015</h3>
            <p>Institution: National Institute of Kidney Diseases and Urology, Dhaka<br/>
               University: University of Dhaka, Dhaka</p>
          </div>
        </div> */}
        <div class="hom-qualifications-item">
          <div class="hom-qualifications-text">
            <h3>Assistant Professor (Nephrology)</h3>
            <p>Dhaka Medical College and Hospital, Dhaka<br/>
               From: 01-12-2019 to 25-03-2020</p>
          </div>
        </div>

        <div class="hom-qualifications-item">
          <div class="hom-qualifications-text">
            <h3>Assistant Professor (Department of Nephrology)</h3>
            <p>Dhaka Medical College and Hospital, Dhaka<br/>
               From: 22-12-2021 to 07-06-2022</p>
          </div>
        </div>

                
        <div class="hom-qualifications-item">
          <div class="hom-qualifications-text">
            <h3>Clinical Fellow (General Adult Nephrology)</h3>
            <p>University of Toronto, Canada<br/>
               From: July 2022 to June 2024</p>
          </div>
        </div>


        <div class="hom-qualifications-item">
          <div class="hom-qualifications-text">
            <h3>Assistant Professor (Department of Nephrology)</h3>
            <p> National Institute of Kidney Diseases and Urology,Dhaka<br/>
               From: 2025 to present</p>
          </div>
        </div>

      </div>
      <div class="hom-qualifications-btn-container">
          <a href="./cv" class="hom-qualifications-btn">Learn More</a>
      </div>
    </div>

    <div class="hom-qualifications-awards">
      <h2><i class="fa-solid fa-award"></i> Awards</h2>

      <div class="hom-qualifications-award">
        <i class="fa-solid fa-certificate"></i>
        <div>
          <h3>Certificate of Participation</h3>
          <p>ASN/AST Transplant Nephrology Core Curriculum (TNCC) 2019</p>
        </div>
      </div>

      <div class="hom-qualifications-award">
        <i class="fa-solid fa-medal"></i>
        <div>
          <h3>Fellow American Society of Nephrology (FASN)</h3>
          <p>Recognition of excellence in nephrology practice</p>
        </div>
      </div>
      <div  class="hom-qualifications-btn-container home-qualification-btn-award">
          <a href="./certificate-award" class="hom-qualifications-btn">Learn More</a>
      </div>
    </div>
  </section>
    )
}


const About  = ()=>{

    return (
    <section class="home-aboute-section">
    <div class="home-aboute-images">
      <img src={url+"/wp-content/uploads/2025/10/abt-home-dr-muhammad-razzak.jpg"} alt="Profile doctor with patient dr. mohammad abdur razzak transplant nephrologist"/>
      <img src={url+"/wp-content/uploads/2025/10/home-abt-dr-razzak-toronto.jpg"} alt="Profile doctor with dr.muhammad abdur razzak transplant nephrologist "/>
    </div>

    <div class="home-aboute-content">
      <div class="home-aboute-info">
        <h2>Dr. Muhammad Abdur Razzak</h2>
        <h3>MBBS (AFMC), MD (Nephrology), FASN (USA)</h3>
        {/* <span>Transplant Nephrology Specialist</span> */}
        <p>
          Renowned Transplant Nephrology Specialist in Bangladesh.<br/>
          Dr. Muhammad Abdur Razzak is a distinguished kidney specialist with over a decade of clinical experience in Transplant nephrology. He possesses an MBBS degree from Armed Forces Medical College (AFMC), an MD in Nephrology, and Fellow of the American Society of Nephrology (FASN, USA). Being an Assistant Professor at the National Institute of Kidney Diseases and Urology, Bangladesh, presently, Dr. Razzak is well renowned internationally for his extensive experience in managing chronic kidney disease, dialysis therapy, and renal transplant evaluation.<br/>
        </p>
      </div>

      <div class="home-aboute-actions">
        <a href={url+"/wp-content/uploads/2025/10/hero-1.png"} download class="home-aboute-btn home-aboute-btn-download">Download CV</a>
        <a href="/about-me" class="home-aboute-btn home-aboute-btn-learn">Learn More</a>
      </div>
    </div>
  </section>
)
}





import {useBackgroundLoader} from "./Hooks/BgWrapper";

// Home hero section
const Hero  =()=>{
const url = import.meta.env.VITE_API_DOMAIN;
const [boxHeight, setBoxHeight] = useState("700px"); // default height


//background loading
const bgurl  = useBackgroundLoader("https://ontenet-cdn.pages.dev/hero-bg-img.png","https://ontenet-cdn.pages.dev/bg-gif-hero.gif")



  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;

      if (width < 500) {
        // Mobile
        setBoxHeight("auto");
      } 
     
      else {
        // Desktop
        setBoxHeight("700px");
      }
    };

    // Run once on mount
    updateHeight();

    // Listen for screen resize
    window.addEventListener("resize", updateHeight);

    // Cleanup
    return () => window.removeEventListener("resize", updateHeight);
  }, []);


return (
<section className="home-hero-section"
       style={{
            background: `url(${bgurl}) no-repeat center/cover ,linear-gradient(135deg, rgba(17,93,169,0.95), rgba(43,146,164,0.95)) `}}

>
      <div 
       className="home-hero-inner">
        {/* Left: Text */}
        <div className="home-hero-content">
          <span className="home-hello-bedge">Hello!</span>
          <h1 className="home-hero-name">I'm <br/> <span className="home-hero-name-highlight">Dr. Muhammad Abdur Razzak</span></h1>
          <h2 className="home-hero-title">Transplant Nephrologist</h2>

          <p className="home-hero-tagline">
            Focused on transplant nephrology to fight kidney disease and give patients new chances at life.
          </p>

          <div className="home-hero-experience">
            <span className="home-hero-stars"><h2>★★★★★</h2></span>
            <span className="home-hero-years">18 Years+ Experience</span>
          </div>
        </div>

        {/* Right: Doctor Image */}
        <div className="home-hero-image-wrap">
          <img style={{height:boxHeight, width:"auto"}}
            className="home-hero-image"
            loading="lazy"
            src={url+"/wp-content/uploads/2025/10/dr-muhammad-abdur-razzak-compressed.webp"}
            // src="https://ontenet-cdn.pages.dev/dr-muhammad-abdur-razzak.png"
            alt="Dr. Muhammad Abdurazzak transplant nephrologist"
          />
        </div>
      </div>
    </section>
  )
}





const HomeContact = () => {
 useEffect(() => {
    const element = document.querySelector(".home-contact-header");
     element.style = `
      background: url(${url}/wp-content/uploads/2025/10/contact-background.jpg) 
      no-repeat center center / cover;
    `;

  });
  
  
  return (
    <div className="home-contact-wrapper">
      {/* Header */}
      <header className="home-contact-header">
        <div className="home-contact-header-overlay">
          <h1 className="home-contact-header-title">Find & Contact With Me</h1>
          <p className="home-contact-header-subtitle">
            Reach out for appointments and consultations
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="home-contact-section">
        <div className="home-contact-grid">
          {/* Map */}
          <div className="home-contact-map home-contact-fade-in">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2197074814962!2d90.3821725!3d23.7395434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ca7af5f82b%3A0xce7d1ab6b16a027!2sPopular%20Diagnostic%20Centre%20Ltd.!5e0!3m2!1sen!2sbd!4v1759660225160!5m2!1sen!2sbd" style={{width:"400",height:"300",border:"0"}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Contact Info */}
          <div className="home-contact-info home-contact-fade-in">
            <h2>Contact Information</h2>
            <ul>
              <li>
                <i className="fa-solid fa-location-dot"></i> 
                  Popular Diagnostic Center Limited, Dhanmondi, Dhaka, Building-6, Floor-5th, Room-508, Dhaka, Bangladesh
              </li>
              <li>
                <i className="fa-solid fa-phone"></i> +88 01604707090
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i> sufisabih@gmail.com
              </li>
              <li>
                <i className="fa-solid fa-clock"></i> Available: All Day, 10:00
                AM - 6:00 PM
              </li>
              <li>
                <i className="fa-brands fa-whatsapp"></i> WhatsApp QR below
              </li>
            </ul>
            <div className="home-contact-whatsapp">
          <img 
            src={qrWhatsapp}
            alt="dr-muhammad-abdur-razzak-whatsapp"
          />


            </div>
          </div>

          {/* Social Media */}
          <div className="home-contact-social home-contact-fade-in">
            <h2>Connect with me</h2>
            <div className="home-contact-social-icons">
              <a href="https://www.facebook.com/nephrology.bd/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://x.com/abdurrazzak103">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-abdur-razzak-mbbs-md-fasn-60a594128/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/@dr.muhammadabdurrazzak9632">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};



import PageWrapper from "./pageWaraper";


export default function Home({title}){

  

    return (
    <div className="Home">
        <Hero />
        <About />
        <Qualification />
        <HomeContact />
        <HomeLatestPosts />
        <HomeVideoSection/>
    </div>
)
}