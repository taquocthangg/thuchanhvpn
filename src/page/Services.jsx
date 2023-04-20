import React from 'react'
import '../css/main.css'
import '../css/Home.css'
import '../css/responsive.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import creative__icon1 from '../img/conntent/icon_3.png'
import creative__icon2 from '../img/conntent/icon_4.png'
import creative__icon3 from '../img/conntent/icon_5.png'
import creative__icon4 from '../img/conntent/icon_6.png'
import map_icon from '../img/conntent/map.1269c3fd.svg'
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
export const Services = () => {
  return (
    <main>
      {/* Phần services */}
      <section className='about' >
        <div className="container">
          <div className="about__content">
            <div className="about__content-title">
            Services
            </div>
            <div className="about__content-des">
              <p>Home</p>
              <p>services</p>
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
