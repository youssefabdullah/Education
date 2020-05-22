import React from 'react'
import Logo from '../../Img/footer.jpg'
import './Footer.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
export default function Footer() {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">
                    <img src={Logo} />
                    <h3>Muhammed<span>Khaled</span></h3>

                    <p className="footer-links">
                        <a id ="footer-links" href="#">Home</a>
                        |
                            <a id ="footer-links" href="#">Blog</a>
                        |
                            <a id ="footer-links" href="#">About</a>
                        |
                            <a id ="footer-links" href="#">Contact</a>
                    </p>
                </div>

                <div className="footer-center">
                    <div>
                        {/* <i id ="icon" className="fa fa-map-marker"></i> */}
                        <LocationOnIcon id ="icon" style={{ fontSize: 40 ,marginRight:10}} />
                        <p><span>309 - Rupa Solitaire,
              Bldg. No. A - 1, Sector - 1</span>
                            Mahape, Navi Mumbai - 400710</p>
                    </div>

                    <div style={{marginTop:20}}>
                        {/* <i id ="icon" className="fa fa-phone"></i> */}
                        <PhoneIcon id ="icon" style={{ fontSize: 40 ,marginRight:10}} />
                        <p>+20 112 762 4022</p>
                    </div>
                    <div  style={{marginTop:20}}>
                        {/* <i id ="icon" className="fa fa-envelope"></i> */}
                        <EmailIcon id ="icon" style={{ fontSize: 40 ,marginRight:10}} />
                        <p><a href="barakatmohmed20@yahoo.com">barakatmohmed20@yahoo.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the Teacher</span>
                        We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
                    <div className="footer-icons">
                        <a href="#"><FacebookIcon/></a>
                        <a href="#"><TwitterIcon/></a>
                        <a href="#"><InstagramIcon/></a>
                        <a href="#"><YouTubeIcon/></a>
                        
                    </div>
                </div>
            </footer>
        </div>
    )
}
