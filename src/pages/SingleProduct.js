import React, { useState } from 'react'
import BreadCrumb  from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';

const SingleProduct = () => {
    const props = {width: 600, height: 500, zoomWidth: 400, img: "https://www.juliettesinteriors.co.uk/wp-content/uploads/2021/10/contemporary-crystal-chandelier-1-660x660.jpg"};

    const [orderedProduct,setorderedProduct]= useState(true);
  return (
    <>
       <Meta title={"Product Name"} />
        <BreadCrumb title="Product Name" />
        <div className="main-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-15">
                            <div><img src="https://www.juliettesinteriors.co.uk/wp-content/uploads/2021/10/contemporary-crystal-chandelier-1-660x660.jpg" className='img-fluid' alt="" /></div>
                            <div><img src="https://www.juliettesinteriors.co.uk/wp-content/uploads/2021/10/contemporary-crystal-chandelier-1-660x660.jpg" className='img-fluid' alt="" /></div>
                            <div><img src="https://www.juliettesinteriors.co.uk/wp-content/uploads/2021/10/contemporary-crystal-chandelier-1-660x660.jpg" className='img-fluid' alt="" /></div>
                            <div><img src="https://www.juliettesinteriors.co.uk/wp-content/uploads/2021/10/contemporary-crystal-chandelier-1-660x660.jpg" className='img-fluid' alt="" /></div>
                        </div>
                    </div>
                    <div className="col-6">
                       <div className="main-product-details">
                        <h3>Ürünün İsmi</h3>
                        </div>     
                    </div> 
                </div>
            </div>
        </div>
        <div className="description-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                    <h4>Description</h4>
                    <div className='bg-white p-3'>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Debitis nisi fugit sed voluptas, aspernatur autem quasi 
                                eveniet blanditiis temporibus amet magni neque vero consectetur 
                                illum rerum error? Deleniti, reiciendis aliquam?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="reviews-wrapper home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3>Görüşler</h3>
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className='mb-2'>Müşteri Görüşleri</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars 
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor="#ffd700"   
                                        />
                                        <p className='mb-0'>2 görüşe göre</p>
                                    </div>


                                </div>
                                {
                                    orderedProduct && (
                                        <div>
                                            <a className='text-dark text-decoration-underline' href=''>Görüşlerinizi yazın</a>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="review-form py-4">
                                <h4>
                                Görüşlerinizi Yazın
                                </h4>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                    <ReactStars 
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={true}
                                            activeColor="#ffd700"   
                                            />
                                    </div>

                                <div>
                                    <textarea name=''id=''className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button className='button border-0'>Gönder</button>
                                </div>
                                </form>                            
                            </div>
                            <div className="reviews mt-4">
                                <div className="review">
                                    <div className='d-flex gap-10 align-items-center'>
                                    <h6 className='mb-0'>John Doe</h6>    
                                    <ReactStars 
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"   
                                    />

                                    </div>
                                    <p className='mt-3'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga omnis blanditiis placeat numquam commodi maiores officiis ipsum quam unde! Quam architecto atque animi ut aspernatur quisquam hic aperiam odit perferendis!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='popular-wrapper py-5 home-wrapper-2'>
            <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                <h3 className="section-heading">Çok Satanlar</h3>
                </div>
            </div>
            <div className="row">
                <ProductCard />
            
            </div>
            </div>
        </section> 
    </>
)
}

export default SingleProduct