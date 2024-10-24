import React from 'react'
import "../Assets/Css/Footersec.css"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapLocationDot, FaTwitter } from 'react-icons/fa6'
import { FaMailBulk } from 'react-icons/fa'
import { MdWifiCalling3 } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Footer() {
  return (
  <>
  <div className='footerbg w-100'>

    <div className="container">
        <div className="row g-5 text-white p-5">
<div className="col-6 col-lg-3 gray pera">
    <div className='py-1 text-white'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, natus?
    </div>
    <div className='py-1 d-flex hovergray'>
       
       <div className='fs-4'><FaMapLocationDot />
        </div>
        <div className='ps-2 pt-2'>Lorem ipsum dolor sit amet.</div>
  
    </div>
    <div className='py-1 d-flex hovergray'>
        <div className='fs-4'><FaMailBulk />
        </div>
   <div className='ps-2 '>
   <div>abc@gmail.com</div>
   <div>abc@gmail.com</div>
   </div>
    </div>
    <div className='py-1 d-flex hovergray'>
        <div className='fs-4'><MdWifiCalling3 />
        </div>
 <div className='ps-2 '>
 <div>+(91) 12345 676890</div>
 <div>+(91) 12345 676890</div>
 </div>
    </div>
</div>
<div className="col-6 col-lg-3 ps-5">
<div  className='footertittle'>
    Quick Links
</div>
<div className='pt-2 '>
    <div className='py-1 pera'>
        <a href='' className='text-decoration-none hovergray '>Home</a>
    </div>
    <div className='py-1'>
        <a href='' className='text-decoration-none hovergray '>About</a>
    </div>
    <div className='py-1'>
        <a href='' className='text-decoration-none hovergray '>products</a>
    </div>
    <div className='py-1'>
        <a href='' className='text-decoration-none hovergray '>Services</a>
    </div>
    <div className='py-1'>
        <a href='' className='text-decoration-none hovergray '>Contact Us</a>
    </div>
</div>
</div>

<div className="col-6 col-lg-3 ">
<div  className='footertittle'>
  Gallery
</div>
<div className='row g-3 mt-2'>
<div className="col-6 col-lg-4"> <img src={require("../Assets/Image/2023-03-smart-grocery-savings-blog.jpeg")} alt="" className='img-fluid' /></div>
<div className="col-6 col-lg-4"> <img src={require("../Assets/Image/2023-03-smart-grocery-savings-blog.jpeg")} alt="" className='img-fluid' /></div>
<div className="col-6 col-lg-4"> <img src={require("../Assets/Image/2023-03-smart-grocery-savings-blog.jpeg")} alt="" className='img-fluid' /></div>
<div className="col-6 col-lg-4"> <img src={require("../Assets/Image/2023-03-smart-grocery-savings-blog.jpeg")} alt="" className='img-fluid' /></div>
<div className="col-6 col-lg-4"> <img src={require("../Assets/Image/2023-03-smart-grocery-savings-blog.jpeg")} alt="" className='img-fluid' /></div>
<div className="col-6 col-lg-4"> <img src={require("../Assets/Image/2023-03-smart-grocery-savings-blog.jpeg")} alt="" className='img-fluid' /></div>
</div>
</div>
<div className="col-6 col-lg-3 ">
<div className='footertittle'>Subscribe</div>
<div>
    <div className='mt-2 py-1 pera'>Lorem ipsum, dolor sit amet consectetur</div>
    <div className='d-flex h-100 py-3'>
        <input type="text" placeholder='Enter Your Email' />
        <div className='bg-success text-white p-2 pera'>Subscribe </div>
    </div>
    <div>
    <div className="d-flex fs-4 mt-4">
                <Link
                  to={
                    "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.jrequipments.com%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"
                  }
                  target="_blank"
                  className="footericon text-center p-2 mx-1  ms-0 d-flex text-decoration-none text-white facebookicon"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to={
                    "https://x.com/intent/post?url=https%3A%2F%2Fwww.jrequipments.com%2F&text=J.R.Equipment"
                  }
                  target="_blank"
                  className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white twittericon"
                >
                  <FaTwitter />
                </Link>
                <Link className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white instaicon">
                  <FaInstagram />
                </Link>
                <Link
                  to={
                    "https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Furl%3Dhttps%3A%2F%2Fwww.jrequipments.com%2F"
                  }
                  target="_blank"
                  className="footericon text-center p-2  mx-1 d-flex text-decoration-none text-white linkicon"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
    </div>
</div>
</div>
        </div>
    </div>
  </div>
  </>
  )
}

export default Footer