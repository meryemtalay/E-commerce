import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import wishlist from "../images/wishlist.svg"
import featured from "../images/featured-1.png"
import featured2 from "../images/featured-2.png"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"
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
        className={` ${location.pathname=="/product" ? `gr-${grid}` : "col-3"} `}
        >
        <Link 
        to={`${location.pathname == "/" ? "/product/:id" : location.pathname=="/product/:id" ? "/product/:id": ":id"}`} 

            className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'>
                    <img src={wish} alt='wishlist'></img>
                </button>
            </div>
            <div className="product-image">
                <img src={featured} className='img-fluid' alt="product image" />
                <img src={featured2} className='img-fluid' alt="product image" />

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
                    
                    <button  className='border-0 bg-transparent'>
                        <img src={prodcompare} alt="compare"></img>
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={view} alt="view"></img>
                    </button>
                    <button  className='border-0 bg-transparent'>
                        <img src={addcart} alt="addcart"></img>
                    </button>
                </div>
            </div>
        </Link>
        </div>
        <div
        className={` ${location.pathname=="/product" ? `gr-${grid}` : "col-3"} `}
        >
        <Link 
        to={`${location.pathname == "/" ? "/product/:id" : location.pathname=="/product/:id" ? "/product/:id": ":id"}`} 

            className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'>
                    <img src={wish} alt='wishlist'></img>
                </button>
            </div>
            <div className="product-image">
                <img src={featured} className='img-fluid' alt="product image" />
                <img src={featured2} className='img-fluid' alt="product image" />

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
                    
                    <button  className='border-0 bg-transparent'>
                        <img src={prodcompare} alt="prodcompare"></img>
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={view} alt="view"></img>
                    </button>
                    <button  className='border-0 bg-transparent'>
                        <img src={addcart} alt="addcart"></img>
                    </button>
                </div>
            </div>
        </Link>
        </div>
        {/* <div
        className={` ${location.pathname=="/product" ? `gr-${grid}` : "col-3"} `}
        >
        <Link 
        to={`${location.pathname == "/" ? "/product/:id" : location.pathname=="/product/:id" ? "/product/:id": ":id"}`} 

        className="product-card position-relative">
         

            <div className="whislist-icon position-absolute">
                <Link>
                    <img src={wish} alt='whislist'></img>
                </Link>
            </div>
            <div className="product-image">
                <img src={featured} className='img-fluid' alt="product image" />
                <img src={featured2} className='img-fluid' alt="product image" />

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
                    
                    <button  className='border-0 bg-transparent'>
                        <img src={prodcompare} alt="compare"></img>
                    </button>
                    <button className='border-0 bg-transparent'>
                        <img src={view} alt="view"></img>
                    </button>
                    <button  className='border-0 bg-transparent'>
                        <img src={addcart} alt="addcart"></img>
                    </button>
                </div>
            </div>
        </Link>
        </div> */}
    </>
    
);
  
}

export default ProductCard