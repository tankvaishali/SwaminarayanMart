import React from "react";
import { FaHome } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { MdOutlineSettings, MdWifiCalling3 } from "react-icons/md";
import { Player } from "@lottiefiles/react-lottie-player";
import { TiShoppingCart } from "react-icons/ti";
import { HiOutlineBars3 } from "react-icons/hi2";

function Header() {

  return (
    <>
      <nav
        className={`container navbar navbar-expand-lg position-sticky bg_color shadow  top-0 mt-3 rounded-pill `}
        style={{ zIndex: 1000 }}
      >
        <div className="container ">
          <div className="rounded-pill  ">
            {" "}
            <a
              to={"/"}
              className="nav-link  fw-bold h-100 d-flex align-content-center align-items-center"
            >
              <img
                src={require("../Assets/Image/profile picture 1.jpg")}
                alt=""
                className="img-fluid logoset "
              />
            </a>
          </div>

          <button
            className="btn order-2 d-lg-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <span className="navbar-toggler-icon fs-5 shadow"><HiOutlineBars3 className="text-light fs-1" /></span>
          </button>

          <div className="collapse navbar-collapse lg_header" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item m-1">
                <div className="sec h-100 mx-2  text-center">
                  <a
                    href="/#"
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                  >
                    Home
                  </a>
                </div>
              </li>

              <li className="nav-item m-1">
                <div className="sec h-100 mx-2 text-center">
                  <a
                    href="/#product"
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                  >
                    Products
                  </a>
                </div>
              </li>

              <li className="nav-item m-1">
                <div className="sec h-100 mx-2 text-center">
                  <a
                    href="/#aboutus"
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                  >
                    About Us
                  </a>
                </div>
              </li>
              <li className="nav-item m-1">
                <div className="sec h-100 mx-2 text-center">
                  <a
                    href="/#service"
                    className="nav-link headmenu maincolor fw-medium  p-2 py-3 text-center"
                    aria-current="page"
                  >
                    Service
                  </a>
                </div>
              </li>



              <li className="nav-item m-1">
                <div className="sec h-100 mx-2 text-center">
                  <a
                    href="/#contactus"
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                  >
                    Contact Us
                  </a>
                </div>
              </li>
            </ul>
            <div className="fs-1  text-white fw-bolder h-100 d-flex align-content-center align-items-center px-2">
              <Player
                autoplay
                loop
                src="https://lottie.host/4aee6d9c-3832-4b21-931d-1b756a777137/U3BQk9gnAf.json"
                style={{ width: "120px", height: "55px" }}
                className=" d-flex align-content-center align-items-center px-2 bg-white rounded-pill shadow"
              >
              </Player>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start overflow-hidden"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <a
            href={"/#"}
            className="nav-link headmenu maincolor fw-medium pe-2"
          >
            <Player
              autoplay
              loop
              src="https://lottie.host/4aee6d9c-3832-4b21-931d-1b756a777137/U3BQk9gnAf.json"
              style={{ height: "100px", width: "100px" }}
            >
            </Player>
          </a>
          <button
            type="button"
            className="btn-close p-3 capbg_color rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body px-3 overflow-x-hidden ofcv_header offnav ">
          <a
            href="/#"
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
          >
            <span className="fs-2 pe-2">
              <FaHome />
            </span>{" "}
            Home
          </a>
          <a
            href="/#aboutus"
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
          >
            <span className="fs-2 pe-2">
              <IoPersonCircle />
            </span>{" "}
            About Us
          </a>
          <a
            href="/#product"
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
          >
            <span className="fs-2 pe-2">
              <TiShoppingCart />
            </span>
            Product
          </a>

          <a
            href="/#service"
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
          >
            <span className="fs-2 pe-2">
              <MdOutlineSettings />
            </span>{" "}
            service
          </a>

          <a
            href="/#contactus"
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
          >
            <span className="fs-2 pe-2">
              <MdWifiCalling3 />
            </span>{" "}
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
