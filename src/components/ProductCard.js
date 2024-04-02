import React from 'react'
import { render } from "react-dom";
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const ProductCard = () => {
  return <div className='col-3'>
        <div className="product-card position-relative">
            <div className="whislist-icon position-absolute">
                <Link>
                    <img src='images/wish.svg' alt='whislist'></img>
                </Link>
            </div>
            <div className="product-image">
                <img src="images/featured-1.png" className='img-fluid' alt="product image" />
                <img src="images/featured-2.png" className='img-fluid' alt="product image" />

            </div>
            <div className='product-details'>
                <h6 className='brand'>Havels</h6>
                <h5 className="product-title">
                    Deneme kısmı. 
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700" 
                />
                <p className="price">$100.0</p>
            </div>
            <div className="action-bar position-absolute">
                <div className='d-flex flex-column gap-15'>
                    
                    <Link>
                        <img src="images/prodcompare.svg" alt="addcart"></img>
                    </Link>
                    <Link>
                        <img src="images/view.svg" alt="view"></img>
                    </Link>
                    <Link>
                        <img src="images/add-cart.svg" alt="addcart"></img>
                    </Link>


                </div>
            </div>
        </div>
    </div>
  
}

export default ProductCard