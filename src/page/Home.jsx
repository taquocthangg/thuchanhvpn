import React from 'react'
import '../css/main.css'
import '../css/Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product_icon from '../img/conntent/icon_1.png'
import creative__icon from '../img/conntent/icon_2.png'
import creative__icon1 from '../img/conntent/icon_3.png'
import creative__icon2 from '../img/conntent/icon_4.png'
import creative__icon3 from '../img/conntent/icon_5.png'
import creative__icon4 from '../img/conntent/icon_6.png'
import map_icon from '../img/conntent/map.1269c3fd.svg'
import Features_icon from '../img/conntent/icon_7.png'
import Features_icon1 from '../img/conntent/icon_8.png'
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
export const Home = () => {
  return (
    <main>
      {/* Phần home */}
      <section className='home' >
        <div className="container">
          <div className="home__content">
            <div className="home__content-title des">
              <p className="line"></p> Complete VPN and Cloud Solutions
            </div>
            <div className="home__content-name name">
              Stay Safe With our VPN & Cloud Solutions.
            </div>
            <div className="home__content-des des">
              Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum, quasi? Dolor sapiente amet optio harum dolores, voluptate, tempora dolorem fugiat fuga autem .
            </div>
            <div className="home__btn">
              <div className="home__btn-content_get btn">
                get started
              </div><div className="home__btn-content_more btn">
                learn more
              </div>
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
      {/* Phần creative */}
      <section className='creative'>
        <div className="container">
          <div className="creative-wrapper">
            <div className="creative__img" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
              <img src={creative__icon} alt="" />
            </div>
            <div className="creative__content">
              <div className="creative__content-title" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                Creative Solutions
              </div>
              <div className="creative__content-name name" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                We Are The Trusted Experts We Keep Things Simple
              </div>
              <div className="creative__content-des des_min" >
                <p data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor iscing elit. Duis at dictum risus, non suscipit arcu.
                </p >
                <p data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur!
                </p>
              </div>
              <div className="creative__content-btn btn" >
                Read More
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Phần what */}
      <section className='what'>
        <div className="container">
          <div className="what-wrapper">
            <div className="what__item">
              <div className="what__item-title" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                What we Offer
              </div>
              <div className="what__item-name name__color" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                Our Top Services
              </div>
              <div className="what__item-des des_min" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!
              </div>
            </div>
            <div className="what__item">
              <div className="what__item-img">
                <img src={creative__icon1} alt="" />
              </div>
              <div className="what__item-name">
                Our Top Services
              </div>
              <div className="what__item-des des_min">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!
              </div>
            </div>
            <div className="what__item">
              <div className="what__item-img">
                <img src={creative__icon2} alt="" />
              </div>
              <div className="what__item-name">
                Our Top Services
              </div>
              <div className="what__item-des des_min">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!
              </div>
            </div>
            <div className="what__item">
              <div className="what__item-img">
                <img src={creative__icon3} alt="" />
              </div>
              <div className="what__item-name">
                Our Top Services
              </div>
              <div className="what__item-des des_min">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!
              </div>
            </div>
            <div className="what__item">
              <div className="what__item-img">
                <img src={creative__icon4} alt="" />
              </div>
              <div className="what__item-name">
                Our Top Services
              </div>
              <div className="what__item-des des_min">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map */}
      <section className="map">
        <div className="container">
          <div className="map__content">
            <div className="map__content-title creative__content-title" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
              Our Growth
            </div>
            <div className="map__content-name" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
              Global Coverage
            </div>
            <div className="map__content-des des_min" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!
            </div>
          </div>
          <div className="map__img">
            <img src={map_icon} data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" alt="" />
          </div>
          <div className="map__content-address">
            <div className="content-address_text">
              <p>Lorem ipsum dolor sit amet</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </div>
            <div className="content-address_icon"><i class="fa-regular fa-circle fa-beat"></i></div>
          </div>
        </div>
      </section>
      {/* Phần features */}
      <section className='features'>
        <div className="container">
          <div className="features__content">
            <div className="features__content-title creative__content-title">
              Our Features
            </div>
            <div className="features__content-name name__color">
              Our Core Features
            </div>
            <div className="features__content-des des_min">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </div>
          </div>
          <div className="features__show">
            <div className="features__show-img">
              <img src={Features_icon} alt="" />
            </div>
            <div className="features__show-wrapper">
              <div className="show-wrapper_box">
                <div className="wrapper_box-icon">
                  <img src={Features_icon1} alt="" />
                </div>
                <div className="wrapper_box-text">
                  <div className="wrapper_box-text-name">
                    Providing Expansions Or Consolidations
                  </div><div className="wrapper_box-text-des des_min">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae.
                  </div>
                </div>
              </div>
              <div className="show-wrapper_box">
                <div className="wrapper_box-icon">
                  <img src={Features_icon1} alt="" />
                </div>
                <div className="wrapper_box-text">
                  <div className="wrapper_box-text-name">
                    Providing Expansions Or Consolidations
                  </div><div className="wrapper_box-text-des des_min">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae.
                  </div>
                </div>
              </div>
              <div className="show-wrapper_box">
                <div className="wrapper_box-icon">
                  <img src={Features_icon1} alt="" />
                </div>
                <div className="wrapper_box-text">
                  <div className="wrapper_box-text-name">
                    Providing Expansions Or Consolidations
                  </div><div className="wrapper_box-text-des des_min">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae.
                  </div>
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
      </section>
    </main>
  )
}
