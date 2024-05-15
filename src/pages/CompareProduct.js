import React from 'react'
import Color from '../components/Color'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
const CompareProduct=() => {
  return (
    <>
         <Meta title={"Ürünleri Karşılaştır"} />
        <BreadCrumb title="Ürünleri Karşılaştır"/>
        <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="product-card-image">
                                <img src="images/featured-2.png" alt="avize"></img>
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">ÜRÜN İSMİ</h5>
                                    <h6 className="price mb-3 mt-3">4000 TL</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Marka:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Ürün İsmi:</h5>
                                            <p>Saat</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Uygunluk:</h5>
                                            <p>Stokta</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Renk:</h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Boyut:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                            <div className="product-card-image">
                            <img src="images/featured-2.png" alt="avize"></img>
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">ÜRÜN İSMİ</h5>
                                    <h6 className="price mb-3 mt-3">4000 TL</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Marka:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Ürün İsmi:</h5>
                                            <p>Saat</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Uygunluk:</h5>
                                            <p>Stokta</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Renk:</h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Boyut:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default CompareProduct