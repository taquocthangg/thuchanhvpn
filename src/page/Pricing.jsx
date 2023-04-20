import React from 'react'
import '../css/main.css'
import '../css/Home.css'
import '../css/responsive.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product_icon from '../img/conntent/icon_1.png'
import avt1 from '../img/avt/avt_1.jpg'
import avt2 from '../img/avt/avt_2.jpg'
import avt3 from '../img/avt/avt_3.jpg'
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
const mobile = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
export const Pricing = () => {
  return (
    <main>
      {/* Phần Pricing */}
      <section className='about' >
        <div className="container">
          <div className="about__content">
            <div className="about__content-title">
            Pricing
            </div>
            <div className="about__content-des">
              <p>Home</p>
              <p>Pricing</p>
            </div>
          </div>
        </div>
      </section>
      {/* Phần pricing */}
      <section className='pricing'  >
        <div className="container">
          <div className="pricing__content" >
            <div className="pricing__content-title title__color" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000" >
              Pricing plans
            </div>
            <div className="pricing__content-name name__color" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
              Our Pricing Plans
            </div>
            <div className="pricing__content-des des_min" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </div>
          </div>
          <div className="pricing__product-wrapper" data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="pricing__product">
              <div className="pricing__product-sale">
                -10% Off
              </div>
              <div className="pricing__product-main">
                <div className="pricing__product-name ">
                  Datacenter Plan
                </div>
                <div className="pricing__product-img">
                  <img src={product_icon} alt="" />
                </div>
                <div className="pricing__product-price">
                  $399.99
                </div>
                <div className="pricing__product-time des_min">
                  Per Month
                </div>
                <div className="pricing__product-des des_min">
                  <p>250GB Bandwidth</p>
                  <p>08 Email Account</p>
                  <p>Unlimited Database</p>
                  <p>10GB Free Disk</p>
                  <p>24/7 Support</p>
                </div>
                <div className="pricing__product-btn btn">
                  Get Started
                </div>
              </div>
            </div>
            <div className="pricing__product pricing__product-act">
              <div className="pricing__product-sale">
                -10% Off
              </div>
              <div className="pricing__product-main">
                <div className="pricing__product-name white">
                  RESIDENTIAL PLAN
                </div>
                <div className="pricing__product-img">
                  <img src={product_icon} alt="" />
                </div>
                <div className="pricing__product-price white">
                  $599.99
                </div>
                <div className="pricing__product-time pricing__product-content_act">
                  Per Month
                </div>
                <div className="pricing__product-des pricing__product-content_act">
                  <p>250GB Bandwidth</p>
                  <p>08 Email Account</p>
                  <p>Unlimited Database</p>
                  <p>10GB Free Disk</p>
                  <p>24/7 Support</p>
                </div>
                <div className="pricing__product-btn btn">
                  Get Started
                </div>
              </div>
            </div>
            <div className="pricing__product">
              <div className="pricing__product-sale">
                -10% Off
              </div>
              <div className="pricing__product-main">
                <div className="pricing__product-name ">
                  Reseller Plan
                </div>
                <div className="pricing__product-img">
                  <img src={product_icon} alt="" />
                </div>
                <div className="pricing__product-price">
                  $799.99
                </div>
                <div className="pricing__product-time des_min">
                  Per Month
                </div>
                <div className="pricing__product-des des_min">
                  <p>250GB Bandwidth</p>
                  <p>08 Email Account</p>
                  <p>Unlimited Database</p>
                  <p>10GB Free Disk</p>
                  <p>24/7 Support</p>
                </div>
                <div className="pricing__product-btn btn">
                  Get Started
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Phần Testimonials */}
      <section className='test'>
        <div className="container">
          <div className="features__content">
            <div className="test__content-title creative__content-title">
              Our Testimonials
            </div>
            <div className="features__content-name name__color">
              Loved By Our Clients
            </div>
            <div className="features__content-des des_min">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </div>
          </div>
          <div className="slide__pc">
            <Slider {...settings}>
                <div className="test__user">
                  <div className="test-user-wrapper">
                    <div className="test__user-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="test__user-des des_min">
                      Lorem ipsum dolor sit amet voluptatum consectetur adipisicing elit.voluptatum Incidunt nulla nam voluptatum deleniti earum natus?
                    </div>
                    <div className="test__user-avt">
                      <div className="test__user-avt_img">
                        <img src={avt1} alt="" />
                      </div>
                      <div className="test__user-avt-show">
                        <div className="user-avt-show-name">
                        Sunny Khan
                        </div>
                        <div className="user-avt-show-work des_min">
                        One of our Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="test__user">
                  <div className="test-user-wrapper">
                    <div className="test__user-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="test__user-des des_min">
                      Lorem ipsum dolor sit amet voluptatum consectetur adipisicing elit.voluptatum Incidunt nulla nam voluptatum deleniti earum natus?
                    </div>
                    <div className="test__user-avt">
                      <div className="test__user-avt_img">
                        <img src={avt2} alt="" />
                      </div>
                      <div className="test__user-avt-show">
                        <div className="user-avt-show-name">
                        Sunny Khan
                        </div>
                        <div className="user-avt-show-work des_min">
                        One of our Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="test__user">
                  <div className="test-user-wrapper">
                    <div className="test__user-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="test__user-des des_min">
                      Lorem ipsum dolor sit amet voluptatum consectetur adipisicing elit.voluptatum Incidunt nulla nam voluptatum deleniti earum natus?
                    </div>
                    <div className="test__user-avt">
                      <div className="test__user-avt_img">
                        <img src={avt3} alt="" />
                      </div>
                      <div className="test__user-avt-show">
                        <div className="user-avt-show-name">
                        Sunny Khan
                        </div>
                        <div className="user-avt-show-work des_min">
                        One of our Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="test__user">
                  <div className="test-user-wrapper">
                    <div className="test__user-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="test__user-des des_min">
                      Lorem ipsum dolor sit amet voluptatum consectetur adipisicing elit.voluptatum Incidunt nulla nam voluptatum deleniti earum natus?
                    </div>
                    <div className="test__user-avt">
                      <div className="test__user-avt_img">
                        <img src={avt1} alt="" />
                      </div>
                      <div className="test__user-avt-show">
                        <div className="user-avt-show-name">
                        Sunny Khan
                        </div>
                        <div className="user-avt-show-work des_min">
                        One of our Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="test__user">
                  <div className="test-user-wrapper">
                    <div className="test__user-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="test__user-des des_min">
                      Lorem ipsum dolor sit amet voluptatum consectetur adipisicing elit.voluptatum Incidunt nulla nam voluptatum deleniti earum natus?
                    </div>
                    <div className="test__user-avt">
                      <div className="test__user-avt_img">
                        <img src={avt2} alt="" />
                      </div>
                      <div className="test__user-avt-show">
                        <div className="user-avt-show-name">
                        Sunny Khan
                        </div>
                        <div className="user-avt-show-work des_min">
                        One of our Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="test__user">
                  <div className="test-user-wrapper">
                    <div className="test__user-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="test__user-des des_min">
                      Lorem ipsum dolor sit amet voluptatum consectetur adipisicing elit.voluptatum Incidunt nulla nam voluptatum deleniti earum natus?
                    </div>
                    <div className="test__user-avt">
                      <div className="test__user-avt_img">
                        <img src={avt3} alt="" />
                      </div>
                      <div className="test__user-avt-show">
                        <div className="user-avt-show-name">
                        Sunny Khan
                        </div>
                        <div className="user-avt-show-work des_min">
                        One of our Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </Slider>
          </div>
          <div className="slide__mobile">
            <Slider {...mobile}>
                <div className="test__user">
                  <div className="test-user-wrapper">
                    <div className="test__user-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="test__user-des des_min">
                      Lorem ipsum dolor sit amet voluptatum consectetur adipisicing elit.voluptatum Incidunt nulla nam voluptatum deleniti earum natus?
                    </div>
                    <div className="test__user-avt">
                      <div className="test__user-avt_img">
                        <img src={avt1} alt="" />
                      </div>
                      <div className="test__user-avt-show">
                        <div className="user-avt-show-name">
                        Sunny Khan
                        </div>
                        <div className="user-avt-show-work des_min">
                        One of our Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="test__user">
                  <div className="test-user-wrapper">
                    <div className="test__user-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="test__user-des des_min">
                      Lorem ipsum dolor sit amet voluptatum consectetur adipisicing elit.voluptatum Incidunt nulla nam voluptatum deleniti earum natus?
                    </div>
                    <div className="test__user-avt">
                      <div className="test__user-avt_img">
                        <img src={avt2} alt="" />
                      </div>
                      <div className="test__user-avt-show">
                        <div className="user-avt-show-name">
                        Sunny Khan
                        </div>
                        <div className="user-avt-show-work des_min">
                        One of our Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="test__user">
                  <div className="test-user-wrapper">
                    <div className="test__user-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="test__user-des des_min">
                      Lorem ipsum dolor sit amet voluptatum consectetur adipisicing elit.voluptatum Incidunt nulla nam voluptatum deleniti earum natus?
                    </div>
                    <div className="test__user-avt">
                      <div className="test__user-avt_img">
                        <img src={avt3} alt="" />
                      </div>
                      <div className="test__user-avt-show">
                        <div className="user-avt-show-name">
                        Sunny Khan
                        </div>
                        <div className="user-avt-show-work des_min">
                        One of our Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="test__user">
                  <div className="test-user-wrapper">
                    <div className="test__user-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="test__user-des des_min">
                      Lorem ipsum dolor sit amet voluptatum consectetur adipisicing elit.voluptatum Incidunt nulla nam voluptatum deleniti earum natus?
                    </div>
                    <div className="test__user-avt">
                      <div className="test__user-avt_img">
                        <img src={avt1} alt="" />
                      </div>
                      <div className="test__user-avt-show">
                        <div className="user-avt-show-name">
                        Sunny Khan
                        </div>
                        <div className="user-avt-show-work des_min">
                        One of our Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="test__user">
                  <div className="test-user-wrapper">
                    <div className="test__user-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="test__user-des des_min">
                      Lorem ipsum dolor sit amet voluptatum consectetur adipisicing elit.voluptatum Incidunt nulla nam voluptatum deleniti earum natus?
                    </div>
                    <div className="test__user-avt">
                      <div className="test__user-avt_img">
                        <img src={avt2} alt="" />
                      </div>
                      <div className="test__user-avt-show">
                        <div className="user-avt-show-name">
                        Sunny Khan
                        </div>
                        <div className="user-avt-show-work des_min">
                        One of our Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="test__user">
                  <div className="test-user-wrapper">
                    <div className="test__user-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="test__user-des des_min">
                      Lorem ipsum dolor sit amet voluptatum consectetur adipisicing elit.voluptatum Incidunt nulla nam voluptatum deleniti earum natus?
                    </div>
                    <div className="test__user-avt">
                      <div className="test__user-avt_img">
                        <img src={avt3} alt="" />
                      </div>
                      <div className="test__user-avt-show">
                        <div className="user-avt-show-name">
                        Sunny Khan
                        </div>
                        <div className="user-avt-show-work des_min">
                        One of our Clients
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </Slider>
          </div>
        </div>
      </section>
    </main>
  )
}
