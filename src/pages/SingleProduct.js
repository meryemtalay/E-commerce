import React, { useState } from 'react'
import BreadCrumb  from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'
import { Link } from 'react-router-dom';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';
const SingleProduct = () => {
    const props = {width: 600, height: 500, zoomWidth: 600, img: "https://www.juliettesinteriors.co.uk/wp-content/uploads/2021/10/contemporary-crystal-chandelier-1-660x660.jpg"};
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
    const [orderedProduct,setorderedProduct]= useState(true);
  return (
    <>
       <Meta title={"Product Name"} />
        <BreadCrumb title="Product Name" />
        <Container class1="main-product-wrapper py-5 home-wrapper-2">
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
                        <div className='border-bottom'>
                            <h3 className='title'>
                                Ürünün İsmi
                            </h3>
                        </div>
                            <div className="border-bottom py-3">
                                <p className="price">4.500tl</p>
                                <div className="d-flex align-items-center gap-10">
                                <ReactStars 
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor="#ffd700"   
                                        />
                                        <p className='mb-0 t-review'>( 2 görüşe göre )</p>
                                </div>
                                <a className='review-btn' href='#review'>Görüşlerinizi yazın</a>
                            </div>
                            <div className="border-bottom py-3">
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tip:</h3> <p className='product-data'>avize</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Marka:</h3> <p className='product-data'>AA</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Kategori:</h3> <p className='product-data'>Avize</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Etiket:</h3> <p className='product-data'>avize</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Stok Durumu:</h3> <p className='product-data'>Stokta</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Büyüklük:</h3> 
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Renk:</h3>
                                    <Color />                                
                                </div>
                                <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                    <h3 className='product-heading'>Özellik:</h3>
                                    <div className=''>
                                    <input type="number" name='' min={1} max={10} className='form-control' style={{width: "70px"}} id=''/>
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0' type='submit'>Sepete Ekle</button>
                                        <button  className='button border-0'>Hemen Al</button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a className='fs-5 me-2' href=''><TbGitCompare /> Karşılaştırmaya Ekle</a>
                                    </div>
                                    <div>
                                        <a className='fs-5 me-2' href=''><AiOutlineHeart /> Favorilere Ekle</a>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-2'>
                                    <h3 className='product-heading'>Kargo & İade :</h3> <p className='product-data'>2500tl ve üzeri alışverişlerde kargo bedava ve <b>10 iş günü içerisinde değişiklik hakkı!</b></p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>Ürün Linkini Paylaş :</h3>
                                    <a href='javascript:void(0);'
                                    onClick={()=> {
                                        copyToClipboard("https://www.juliettesinteriors.co.uk/wp-content/uploads/2021/10/contemporary-crystal-chandelier-1-660x660.jpg")
                                    }}>Ürün linki için tıklayın</a>
                                </div>

                                
                            </div>
                        </div>     
                    </div> 
                </div>
            </div>
        </Container>
        <Container class1="description-wrapper py-5 home-wrapper-2">
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
        </Container>
        <Container class1="reviews-wrapper home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3  id='review'>Görüşler</h3>
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
        </Container>

        <Container class1='popular-wrapper py-5 home-wrapper-2'>
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
        </Container> 

        {/* modal eklenecek */}
    </>
)
}

export default SingleProduct