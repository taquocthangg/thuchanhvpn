import React from 'react'
import '../css/main.css'
import '../css/about.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
const About = () => {
  return (
    <main>
      <section className='about' >
        <div className="container">
          <div className="about__content">
            <div className="about__content-title">
              About us
            </div>
            <div className="about__content-des">
              <p>Home</p>
              <p>About us</p>
            </div>
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

export default About