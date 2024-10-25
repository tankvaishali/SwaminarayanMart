import React, { useEffect, useState } from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import "../Assets/Css/Carouselsec.css"

function Carouselsec() {
     const [currentSlide, setCurrentSlide] = useState(0);
     const [initialLoad, setInitialLoad] = useState(true);
     const totalSlides = 3;

     useEffect(() => {
       if (initialLoad) {
         setTimeout(() => {
           setInitialLoad(false);
         }, 0);
       }

       const interval = setInterval(() => {
         setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
       }, 5000);

       return () => {
         clearInterval(interval);
       };
     }, [initialLoad]);
  return (
    <>
      <div className="carousel" style={{marginTop:"-100px"}}>
        {Array.from({ length: totalSlides }, (_, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            } ${index === 0 && initialLoad ? "initial" : ""} slide${index + 1}`}
            style={{ zIndex: index === currentSlide ? 2 : 1 }}
          >
            <div className="column animate"></div>
            <div className="column animate"></div>
            <div className="column animate"></div>
            <div className="column animate"></div>
            <div className="column animate"></div>

            <h1
              className={`carousel-content container ${
                index === currentSlide && !initialLoad ? "show" : ""
              } text-white p-5 display-5 lh-base fw-bold text-uppercase`}
            >
              {index === 0 && (
                <>
                  INDIA'S TOP
                  <div>PV MANUFACTURER</div>
                  <div>RECOGNISED BY KIWA</div>
                  {/* <div
                    className="mt-2"
                    
                  >
                    <Link to={"/aboutus"} className="text-decoration-none">
                      <button className="button-48 mt-3" role="button">
                        <span className="btn_text fw-bold">
                          Know More{" "}
                          <span className="ps-1 fs-5 fw-bold">
                            <MdOutlineArrowOutward />
                          </span>
                        </span>
                      </button>
                    </Link>
                  </div> */}
                </>
              )}
              {index === 1 && (
                <>
                  INDIA'S TOP
                  <div>PV MANUFACTURER</div>
                  <div>LOREM IPSUM DOLOR</div>
                  {/* <div
                    className="mt-2"
                    
                  >
                    <Link to={"/product"} className="text-decoration-none">
                      <button className="button-48 mt-3" role="button">
                        <span className="btn_text fw-bold">
                          Know More{" "}
                          <span className="ps-1 fs-5 fw-bold">
                            <MdOutlineArrowOutward />
                          </span>
                        </span>
                      </button>
                    </Link>
                  </div> */}
                </>
              )}
              {index === 2 && (
                <>
                  INDIA'S TOP
                  <div>MANUFACTURER</div>
                  <div>LOREM IPSUM DOLOR</div>
                  {/* <div
                    className="mt-2"
                    
                  >
                    <Link to={"/profile"} className="text-decoration-none">
                      <button className="button-48 mt-3" role="button">
                        <span className="btn_text fw-bold">
                          Know More{" "}
                          <span className="ps-1 fs-5 fw-bold">
                            <MdOutlineArrowOutward />
                          </span>
                        </span>
                      </button>
                    </Link>
                  </div> */}
                </>
              )}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Carouselsec