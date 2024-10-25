import React from 'react';
import Slider from 'react-slick';
import { IoMdStar } from 'react-icons/io';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "../Assets/Css/Testimonialsec.css";
import TittlesAll from './TittleAll';

function Testimonial() {

    const testimonials = [
        {
            id: 1,
            name: "Vaishali Tank",
            image: "https://img.freepik.com/premium-photo/male-portrait-barber-brown-color-suit-isolated-white-background_1029679-133710.jpg?ga=GA1.1.294526294.1713588320&semt=ais_hybrid",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, aut recusandae dolore quasi illo laborum distinctio ipsam nesciunt! Facere nam labore dolorem ut quam reiciendis, temporibus suscipit voluptatibus placeat! Aut, nisi, cupiditate excepturi quisquam saepe.",
            rating: 4
        },
        {
            id: 2,
            name: "Surbhi Pansuriya",
            image: "https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?t=st=1729834019~exp=1729837619~hmac=81e94a37ffe09aa8c71a0beebb90a01a11dd4b5f87a55e50751393290bea01f5&w=900",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, aut recusandae dolore quasi illo laborum distinctio ipsam nesciunt! Facere nam labore dolorem ut quam reiciendis, temporibus suscipit voluptatibus placeat! Aut, nisi, cupiditate excepturi quisquam saepe.",
            rating: 3
        },
        {
            id: 3,
            name: "Mital Vaghela",
            image: "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-hand-chin_176420-15573.jpg?t=st=1729833938~exp=1729837538~hmac=bd7d95ef7afee9a34438d692c0f7c08d90ce6179040dc2d8a5d5847bcb3f0784&w=900",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, aut recusandae dolore quasi illo laborum distinctio ipsam nesciunt! Facere nam labore dolorem ut quam reiciendis, temporibus suscipit voluptatibus placeat! Aut, nisi, cupiditate excepturi quisquam saepe.",
            rating: 5
        }
    ];

    // Custom arrow components
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
       arrows:false,
    };

    return (
        <>
            <div className='testimonial overflow-hidden my-3'>
                <div className="container">
                    <div className="row align-items-center mt-0 mt-lg-5 pt-0 pt-lg-4"   data-aos-duration="1800"
                                                data-aos="zoom-in"
                                                data-aos-once="true">
                        <div className='col-lg-1 d-none d-lg-block m-0 p-0 mt-1 '>
                            {/* <h2 className='testimonial-title ms-auto m-0'>Testimonial</h2> */}
                       <div className=' testimonial-title ms-auto '>
                       <TittlesAll tittle="TESTIMONIAL"/>
                       </div>
                        </div>
                        <div className='col-lg-11 m-0 p-0'>
                            <Slider {...settings}>
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id}>
                                        <div className='row g-4 p-4'>
                                            <div className='col-12 col-md-5 col-lg-3'>
                                                <div className='test-shine h-100'>
                                                <img src={testimonial.image} className='w-100 h-100 object-fit-cover rounded-5' alt="Testimonial " />
                                                </div>
                                            </div>
                                            <div className='col-12 col-md-7 col-lg-9'>
                                                <div className="h-100 rounded-5 shadow"
                                                >
                                                    <div className='p-5'>
                                                        <h3>{testimonial.name}</h3>
                                                        <div>
                                                            {[...Array(testimonial.rating)].map((star, index) => (
                                                                <IoMdStar key={index} className='fs-3 text-warning' />
                                                            ))}
                                                        </div>
                                                        <p className='pt-2'>{testimonial.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonial;
