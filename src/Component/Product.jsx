import React from "react";
import Slider from "react-slick";
import "../Assets/Css/Product.css"
import { TbCircleArrowUpRight } from "react-icons/tb";
import TittlesAll from "./TittleAll";
import { Link } from "react-router-dom";

function Product() {
  let ProductItemlist = [
    {
      id: 1,
      image1: require("../Assets/Image/IMG-20241025-WA0004.jpg"),
      image2: require("../Assets/Image/IMG-20241025-WA0004.jpg"),
      name: "lorem ipsum",
      tittle: "lorem ipsum dolor ",
    },
    {
      id: 2,
      image1: require("../Assets/Image/IMG-20241025-WA0006.jpg"),
      image2: require("../Assets/Image/IMG-20241025-WA0006.jpg"),
      name: "lorem ipsum",
      tittle: "lorem ipsum dolor ",
    },
    {
      id: 3,
      image1: require("../Assets/Image/107224930-1681412037532-gettyimages-1470350052-dsc05912.jpeg"),
      image2: require("../Assets/Image/107224930-1681412037532-gettyimages-1470350052-dsc05912.jpeg"),
      name: "lorem ipsum",
      tittle: "lorem ipsum dolor ",
    },
    {
      id: 4,
      image1: require("../Assets/Image/image_2024_10_25T12_12_48_549Z.png"),
      image2: require("../Assets/Image/image_2024_10_25T12_12_48_549Z.png"),
      name: "lorem ipsum",
      tittle: "lorem ipsum dolor ",
    },
    {
      id: 5,
      image1: require("../Assets/Image/full-length-portrait-cheery-couple_171337-2247.jpg"),
      image2: require("../Assets/Image/full-length-portrait-cheery-couple_171337-2247.jpg"),
      name: "lorem ipsum",
      tittle: "lorem ipsum dolor ",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Adjust the speed as needed
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const message = encodeURIComponent(
    `Hi! 🌟 Exciting News! 🌟\n\nWe’ve just launched [Product Name/Offer], and it’s exactly what you need to [key benefit].\n\n✨ Special Features:\n- Feature 1\n- Feature 2\n- Feature 3\n\n💰 Price: [Insert price]\n🎉 Limited Offer: Get it now and enjoy [discount/freebie/offer details, if applicable]!\n\n📦 Delivery: Fast and secure to your doorstep!\n\nFeel free to reply if you have any questions or need assistance. 😊`
  );

  const whatsappLink = `https://wa.me/9558064415?text=${message}`;

  return (
    <>
      <div className="overflow-hidden" id="product">
        <div className="product_high " style={{ marginBottom: "200px" }}>
          <div className="container pt-5">
            <div className="row pt-5 ">
              <div className="col-12  col-lg-9 overflow-hidden">
                <div className="tittle">
                  <TittlesAll tittle="Products" />
                </div>
                <div
                  className="sectittle text-white"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  Our Popular products
                </div>


              </div>
              <div className="col-12  col-lg-3 pera text-white"></div>

              <div className="py-5 px-0" style={{ marginBottom: "-200px" }}>
                <Slider
                  {...settings}
                  className="p-0 m-0 text-white header_slickslider pt-3 pt-lg-5"
                >
                  {ProductItemlist.map((product, i) => {
                    return (
                      <>
                        <Link to={whatsappLink} target="_blank" rel="noopener noreferrer">
                          <div className="container_sec product-grid">
                            <div className="product-image h-100 shadow">
                              <img className="pic-1 h-100 object-fit-cover" src={product.image1} alt={product.tittle} />
                              <img className="pic-2 h-100 object-fit-cover" src={product.image2} alt={product.tittle} />
                              <div className="overlay_sec">
                                <div className="text h-100 px-2 d-flex flex-column justify-content-between">
                                  <div className="icon_color">
                                    <TbCircleArrowUpRight
                                      className="text-white rounded-circle"
                                      style={{ backgroundColor: "var(--darkgreen--)" }}
                                    />
                                  </div>
                                  <div className="p-2">
                                    <div className="fw-bold">{product.name}</div>
                                    <div className="fw-bold fs-3">{product.tittle}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Product;
