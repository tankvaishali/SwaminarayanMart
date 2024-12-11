import React from 'react';
import { ProductItemlist } from './ProductItemlist';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { FaGit, FaGithub, FaLink } from 'react-icons/fa';

function Productdetail() {

    const id = useParams().id
    console.log(id);


    const produc = ProductItemlist.filter((x) => x.id == id)
    console.log(produc);

    return (
        <div>
            <Header />
            <div className="px-0 container">
                <div className="row justify-content-between">
                    {produc.map((product, idx) => {
                        return (
                            <div className="row align-items-center justify-content-center g-4" key={idx}>
                                {product.products.map((item, index) => {
                                    return (
                                        // <div class="card col-3" >
                                        //     <img class="card-img-top" src={item.image3} alt="Card image cap" />
                                        //     <div class="card-body">
                                        //         <h5 class="card-title">{item.name}</h5>
                                        //         <p class="card-text">{item.describ}</p>
                                        //         <a href="#" class="btn btn-primary">Go somewhere</a>
                                        //     </div>
                                        // </div>

                                        <div class="col-md-4">
                                            <div class="card">
                                                <img src={item.image3} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{item.name}</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                    <p class="card-text">{item.describ}</p>
                                                    <a href="#" class="btn mr-2"><FaLink /> Visit Site</a>
                                                    <a href="#" class="btn "><FaGithub /> Github</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div >
            <Footer />
        </div >
    )
}

export default Productdetail