// import React from 'react';
// import { ProductItemlist } from './ProductItemlist';
// import Header from './Header';
// import Footer from './Footer';
// import { useParams } from 'react-router-dom';
// import { FaGit, FaGithub, FaLink, FaRupeeSign } from 'react-icons/fa';
// import { BsWhatsapp } from 'react-icons/bs';

// function Productdetail() {

//     const id = useParams().id;
//     console.log(id);

//     const produc = ProductItemlist.filter((x) => x.id == id);
//     console.log(produc);

//     return (
//         <div>
//             <Header />
//             <div className="container px-0">
//                 <div className="row">
//                     {produc.map((product, idx) => (
//                         <div className="row g-4" key={idx}>
//                             {product.products.map((item, index) => (
//                                 <div className="col-12 col-sm-6 col-lg-3" key={index}>
//                                     <div className="card h-100 rounded-0 cardproduct">
//                                         <img src={item.image3} className="card-img-top img-fluid p-3" alt={item.name} />
//                                         <div className="card-body">
//                                             <h5 className="card-title fs-5 text-success fw-bold text-uppercase">{item.name}</h5>
//                                             <h6 className="card-subtitle my-2 text-muted pera text-secondary">{item.title}</h6>
//                                             <p className="card-text mb-2 pera">{item.describ}</p>
//                                             <div className='d-flex align-items-center'>
//                                                 <div className='fw-bold text-muted text-decoration-line-through'>
//                                                     <FaRupeeSign /> {item.dprice}
//                                                 </div>
//                                                 <div className='fw-bold ps-2'>
//                                                     <FaRupeeSign />{item.mprice}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <button className='btn m-0 btn-success rounded-0 w-100 mt-2 fw-medium fs-5'>
//                                             <BsWhatsapp /> Get Now
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Productdetail;
import React from 'react';
import { ProductItemlist } from './ProductItemlist';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { FaRupeeSign } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

function Productdetail() {

    const id = useParams().id;
    console.log(id);

    const produc = ProductItemlist.filter((x) => x.id == id);
    console.log(produc);

    return (
        <div>
            <Header />
            <div className="container  overflow-hidden">
                <div className="row m-0 p-0 py-5 ">
                    {produc.map((product, idx) => (
                        <div className="row p-0 m-0 " key={idx}>
                            {product.products.map((item, index) => (
                                <div className="col-12 col-md-6 col-lg-3 pt-4" key={index}>
                                    <div className="card h-100 rounded-0 cardproduct">
                                        <img src={item.image3} className="card-img-top img-fluid p-3 object-fit-contain" alt={item.name} />
                                        <div className="card-body pt-0">
                                            <h5 className="card-title fs-5 text-success fw-bold text-uppercase">{item.name}</h5>
                                            <h6 className="card-subtitle my-2 text-muted pera text-secondary">{item.title}</h6>
                                            <p className="card-text mb-2 pera">{item.describ}</p>
                                            <div className='d-flex align-items-center'>
                                                {item.dprice && (
                                                    <div className='fw-bold text-muted text-decoration-line-through'>
                                                        <FaRupeeSign /> {item.dprice}
                                                    </div>
                                                )}
                                                <div className={`fw-bold ${item.dprice ? 'ps-2' : ''}`}>
                                                    <FaRupeeSign /> {item.mprice}
                                                </div>
                                            </div>
                                        </div>
                                        <button className='btn m-0 btn-success rounded-0 w-100 mt-2 fw-medium fs-5'>
                                            <BsWhatsapp /> Get Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Productdetail;
