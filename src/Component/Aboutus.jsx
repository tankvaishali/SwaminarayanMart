import React from "react";
import Slider from "react-slick";
import "../Assets/Css/Aboutussec.css"
import TittlesAll from "./TittleAll";

function Aboutus() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    swipe: true,
    arrows: false,
    pauseOnHover: false,
  };

  let aboutimage = [
    {
      image: require("../Assets/Image/107224930-1681412037532-gettyimages-1470350052-dsc05912.jpeg")
    },

    {
      image: require("../Assets/Image/2023-03-smart-grocery-savings-blog.jpeg")
    },

  ]
  return (
    <>
      <div className="container my-5 bg-white py-sm-5">
        <div className="row py-5">
          <div className="col-12 col-md-12 col-lg-7 overflow-hidden">
            <div style={{ width: "82%" }} className="test-shine " data-aos="fade-right" data-aos-duration="1800" data-aos-once="true">
              <img
                src={require("../Assets/Image/2023-03-smart-grocery-savings-blog.jpeg")}
                alt=""
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>

            <div className="p-0 bg-white aboutslide_sec overflow-hidden">
              <div className="aboutslider  ms-auto  m-0  overflow-hidden" data-aos="fade-left" data-aos-duration="1800" data-aos-once="true">
                <Slider {...settings} className="p-0 m-0  overflow-hidden border border-5 border-white">
                  {aboutimage?.map((x, i) => {
                    console.log(x);
                    return (
                      <>
                        <div className="slider_imageaboutus ">
                          <img src={x.image} alt="" className="img-fluid w-100 h-100 object-fit-cover " />
                        </div>
                      </>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5  d-flex flex-column justify-content-between">
            <div className="h-100 ">
         <div className="tittle"><TittlesAll tittle="ABOUT US " /></div>
               
                <div className="sectittle">Lorem ipsum dolor sit amet.</div>
              <div className="pera py-3">
                Our organization is proficient in manufacturing and supplying a
                premium quality range of Commercial Kitchen Equipment. The
                varied range of kitchen equipment offered by us is manufactured
                using graded steel and certified components, and is known for
                reliable performance, easy operations, longer functional life
                and energy efficiency. We can make these equipments available in
                different capacities and sizes, as per the specifications of
                clients.
              </div>
              <div className="row g-3 p-0 m-0">
                <div className="col-12 col-md-4 text-center pt-3 overflow-hidden">
                  <div className="text-center h-100" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                    <div
                      className="mx-auto"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <img
                        src={require("../Assets/Image/footer image.png")}
                        alt=""
                        className="img-fluid w-100 h-100 shadow_image"
                      />
                    </div>
                    <div className="pera text-secondary py-2  text-capitalize">
                      Legal Status of Firm
                    </div>
                    <div className="fs-6 fw-bold mt-auto text-capitalize">
                      Individual - Proprietor
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 text-center pt-3 overflow-hidden">
                  <div className="text-center h-100" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                    <div
                      className="mx-auto"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <img
                        src={require("../Assets/Image/full-length-portrait-cheery-couple_171337-2247.jpg")}
                        alt=""
                        className="img-fluid w-100 h-100 shadow_image"
                      />
                    </div>
                    <div className="pera text-secondary py-2 text-capitalize">
                      Nature of Business
                    </div>
                    <div className="fs-6 fw-bold mt-auto text-capitalize">Manufacturer</div>
                  </div>
                </div>
                <div className="col-12 col-md-4 text-center pt-3 overflow-hidden">
                  <div className="text-center h-100" data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true">
                    <div
                      className="mx-auto"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <img
                        src={require("../Assets/Image/profile picture 1.jpg")}
                        alt=""
                        className="img-fluid w-100 h-100 shadow_image"
                      />
                    </div>
                    <div className="pera text-secondary py-2 text-capitalize">GST No.</div>
                    <div className="fs-6 fw-bold mt-auto text-capitalize">24ANQPV9757N1ZO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;