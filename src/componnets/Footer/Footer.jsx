import React from 'react'
import './Footer.css'
import logo from '../../img/logo.png'
const Footer = () => {
  return (
    <main>
      <div className="container">
        <div className="contact-wrapper">
          <section className='contact'>
            <div className="contact__content">
              <div className="contact__content-title">
                So What is Next?
              </div>
              <div className="contact__content-name">
                Are You Ready? Let’S Work!
              </div>
            </div>
            <div className="contact__btn btn">
              contact us
            </div>
          </section>
        </div>
      </div>
      <section className='footer'>
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__box">
              <div className="footer__box-logo">
                <img src={logo} alt="" />
              </div>
              <div className="footer__box-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed perspiciatis enim, quod molestiae voluptatem?
              </div>
              <div className="footer__box-icon">
                <i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-google"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div className="footer__box">
              <div className="footer__box-name">
                PRIVACY &amp; TOS
              </div>
              <div className="footer__box-title">
                <p> Advertiser Agreement</p>
                <p> Acceptable Use Policy</p>
                <p>Privacy Policy</p>
                <p>Technology Privacy</p>
                <p>Developer Agreement</p>
              </div>
            </div>
            <div className="footer__box">
              <div className="footer__box-name">
                NAVIGATE
              </div>
              <div className="footer__box-title">
                <p> Advertisers</p>
                <p>  Developers</p>
                <p>Resources</p>
                <p>Company</p>
                <p>Connect</p>
              </div>
            </div>
            <div className="footer__box">
              <div className="footer__box-name">
              CONTACT US
              </div>
              <div className="footer__box-title">
                <p> Mailing Addressxx00 E. Union Ave</p>
                <p>  Suite 1100. Denver, CO 80237</p>
                <p>+999 90932 627</p>
                <p>support@yourdomain.com</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}

export default Footer