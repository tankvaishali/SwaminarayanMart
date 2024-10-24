import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaSolarPanel } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { MdWifiCalling3 } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Player } from "@lottiefiles/react-lottie-player";
import { BsGraphUpArrow } from "react-icons/bs";

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
            <Link
              to={"/"}
              className="nav-link  fw-bold h-100 d-flex align-content-center align-items-center"
            >
              <img
                src={require("../Assets/Image/profile picture 1.jpg")}
                alt=""
                className="img-fluid logoset "
              />
            </Link>
          </div>

          <button
            className="btn order-2 d-lg-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            {" "}
            <span className="navbar-toggler-icon fs-5 shadow"></span>
          </button>

          <div className="collapse navbar-collapse lg_header" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item m-1">
                <div class="sec h-100 mx-2  text-center">
                  <NavLink
                    to={"/"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </div>
              </li>
              <li className="nav-item m-1">
                <div class="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/aboutus"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeClassName="active"
                  >
                    About Us
                  </NavLink>
                </div>
              </li>

              <li className="nav-item m-1">
                <div class="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/product"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeClassName="active"
                  >
                    projects
                  </NavLink>
                </div>
              </li>
              <li className="nav-item m-1">
                <div class="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/service"}
                    className="nav-link headmenu maincolor fw-medium  p-2 py-3 text-center"
                    aria-current="page"
                    activeClassName="active"
                  >
                    Services
                  </NavLink>
                </div>
              </li>
  
          
             
              <li className="nav-item m-1">
                <div class="sec h-100 mx-2 text-center">
                  <NavLink
                    to={"/contactus"}
                    className="nav-link headmenu maincolor fw-medium p-2 py-3 text-center"
                    aria-current="page"
                    activeClassName="active"
                  >
                    Contact Us
                  </NavLink>
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
                {/* <Controls
                  visible={true}
                  buttons={["play", "repeat", "frame", "debug"]}
                /> */}
              </Player>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="offcanvas offcanvas-start overflow-hidden "
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header ">
          <Link
            to={"/"}
            classNameName="nav-link headmenu maincolor fw-medium pe-2"
          >
            {/* <img
              src={require("../Assets/Images/solarbenifits.jpg")}
              alt=""
              className="img-fluid object-fit-cover"
              style={{ width: "130px", height: "65px" }}
            /> */}
            <Player
              autoplay
              loop
              src="https://lottie.host/5a21c1f1-0cd5-486f-b4c2-c94269291c89/bIlcVBDrbv.json"
              style={{ height: "100px", width: "100px" }}
            >
              {/* <Controls
                  visible={true}
                  buttons={["play", "repeat", "frame", "debug"]}
                /> */}
            </Player>
          </Link>
          <button
            type="button"
            className="btn-close p-3 capbg_color rounded-circle"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body px-3 overflow-x-hidden ofcv_header ">
          <NavLink
            to={"/"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            aria-cu2rent="page"
            activeClassName="active"
          >
            <span className="fs-2 pe-2">
              <FaHome />
            </span>{" "}
            Home
          </NavLink>

          <NavLink
            to={"/aboutus"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeClassName="active"
          >
            <span className="fs-2 pe-2">
              <IoPersonCircle />
            </span>{" "}
            About Us
          </NavLink>

          <NavLink
            to={"/product"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeClassName="active"
          >
            <span className="fs-2 pe-2">
              <FaSolarPanel />
            </span>{" "}
            Projects
          </NavLink>
          <NavLink
            to={"/service"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeClassName="active"
          >
            <span className="fs-2 pe-2">
              <GrServices />
            </span>{" "}
            Services
          </NavLink>
          <NavLink
            to={"/career"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeClassName="active"
          >
            <span className="fs-2 pe-2">
              <BsGraphUpArrow />
            </span>{" "}
            career
          </NavLink>
          <NavLink
            to={"/profile"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeClassName="active"
          >
            <span className="fs-2 pe-2">
              <CgProfile />
            </span>{" "}
            profile
          </NavLink>
          <NavLink
            to={"/contactus"}
            className="nav-link  fw-medium p-3 py-2 m-1 fs-5"
            activeClassName="active"
          >
            <span className="fs-2 pe-2">
              <MdWifiCalling3 />
            </span>{" "}
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
