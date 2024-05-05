import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';


const ProductCard = (props) => {
    const {grid} = props;
    // This component determines the CSS class based on the grid prop it receives and the current page location. 
    //If the current page location is "/store", it adds a class in the form of gr-${grid}. Otherwise, it defaults to adding the col-3 class.

    // Bu bileşen, aldığı grid prop'u ve mevcut sayfa konumuna bağlı olarak, CSS sınıfını belirler. 
    // Eğer mevcut sayfa konumu "/store" ise, gr-${grid} şeklinde bir sınıf eklenir. Aksi takdirde, varsayılan olarak col-3 sınıfı eklenir.

    let location=useLocation();
  return( 
    <>
        <div
        className={` ${location.pathname=="/store" ? `gr-${grid}` : "col-3"} `}
        >
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
                <p className={`description ${grid===12 ? "d-block" : "d-none" }`}  >Bu kısımda yer alan avize hakkında bilgiler görünecektir</p>
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
        {/* <div
        className={` ${location.pathname=="/store" ? `gr-${grid}` : "col-3"} `}
        >
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
                <p className={`description ${grid===12} "d-block" : d-none`}>Bu kısımda yer alan avize hakkında bilgiler görünecektir</p>
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
        </div> */}
    </>
    
);
  
}

export default ProductCard