import { useState,useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

//style
import './App.css'

//components
import Header from './components/Header'
import Footer from "./components/Footer"
import AbouteMe from './components/AboutMe'
import Publications from "./components/Publications"
import Resume from "./components/cv"
import SinglePost from './components/SinglePost'
import Blogs from './components/blogs'
import Gallery from './components/gallery'
import ImageGallery from './components/ImageGallery'
import Contact from './components/Contact';
import Certificate from './components/Certificate';
import Home from "./components/Home";
import StickyContactButton from "./components/sub-components/sticky-contact-btn";
import ContactPopup from './components/sub-components/ContactPopup';
import VideoPage from './components/Video';
import TermsAndConditions from './components/termsConditions';
import PrivacyPolicy from './components/privacyPolicy';
import PageWrapper from './components/pageWaraper';
import Page404 from './components/404.jsx';


//scroll top top 
import SrollTop from './components/sub-components/Scroll.jsx'

export default function App() {
//open and close contact popup
const [openContact, setOpenContact] = useState(false);


//adding lazy loading
useEffect(() => {
  document.querySelectorAll("img").forEach((img) => {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
  });
}, []);



 return (<>
    <Header />
    <StickyContactButton Open={setOpenContact} />
    <SrollTop/>
    <ContactPopup isOpen={openContact} onClose={() => setOpenContact(false)} />
      {/* <Routes>
        <Route path="/" element={<PageWrapper title="Home"><Home /></PageWrapper>} />
        <Route path="/about-me" element={<AbouteMe title={"About Me"} />} />
        <Route path="/CV" element={<Resume title={"CV"} />} />
        <Route path="/Contact" element={<Contact title={"Contact"} />} />
        <Route path="/Gallery" element={<Gallery title={"Gallery"} />} />
        <Route path="/videos" element={<VideoPage title={"Video"} />} />
        <Route path="/Publications" element={<Publications title={"Publications"}/>} />
        <Route path="/certificate-award" element={<Certificate title={"Certicates & Awards"} />} />
        <Route path="/blogs" element={<Blogs title={"Blogs"} />} />
        <Route path="/post" element={<SinglePost />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/images/:title" element={<ImageGallery />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>  */}
      <Routes>
        <Route path="/" element={<PageWrapper title="Home"><Home /></PageWrapper>} />
        <Route path="/about-me" element={<PageWrapper title="About Me"><AbouteMe /></PageWrapper>} />
        <Route path="/CV" element={<PageWrapper title="CV"><Resume /></PageWrapper>} />
        <Route path="/Contact" element={<PageWrapper title="Contact"><Contact /></PageWrapper>} />
        <Route path="/Gallery" element={<PageWrapper title="Gallery"><Gallery /></PageWrapper>} />
        <Route path="/videos" element={<PageWrapper title="Video"><VideoPage /></PageWrapper>} />
        <Route path="/Publications" element={<PageWrapper title="Publications"><Publications /></PageWrapper>} />
        <Route path="/certificate-award" element={<PageWrapper title="Certificates & Awards"><Certificate /></PageWrapper>} />
        <Route path="/blogs" element={<PageWrapper title="Blogs"><Blogs /></PageWrapper>} />
        <Route path="/post" element={<PageWrapper title="Post"><SinglePost /></PageWrapper>} />
        <Route path="/post/:id" element={<PageWrapper title="Post Details"><SinglePost /></PageWrapper>} />
        <Route path="/images/:title" element={<PageWrapper title="Image Gallery"><ImageGallery /></PageWrapper>} />
        <Route path="/terms-conditions" element={<PageWrapper title="Terms & Conditions"><TermsAndConditions /></PageWrapper>} />
        <Route path="/privacy-policy" element={<PageWrapper title="Privacy Policy"><PrivacyPolicy /></PageWrapper>} />
        <Route path="*" element={<PageWrapper title="404"><Page404/></PageWrapper>} />
      </Routes>
    <Footer/>
 </>)
}