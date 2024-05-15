import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import watch from "../images/watch.jpg"
import Container from '../components/Container'
const CompleteOrder = () => {
  return (
    <>
        <Container class1="complete-order-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-7">
                        <div className="complete-order-left-data">
                            <h3 className="website-name">Lalegül</h3>
                            <nav style={{"--bs-breadcrumb-divider": ">"}} 
                                aria-label="breadcrumb">
                                <ol className='breadcrumb'>
                                    <li className='breadcrumb-item'><Link className="text-dark total-price"to="/cart">Ürün</Link></li>
                                    &nbsp; /&nbsp;
                                    <li className='breadcrumb-item total-price active' aria-current="page">
                                        Bilgi
                                    </li>
                                    &nbsp; /<li className='breadcrumb-item active total-price'>
                                        Kargo
                                    </li>
                                    &nbsp; /
                                    <li className='breadcrumb-item total-price active' aria-current="page">
                                        Ödeme
                                    </li>
                                </ol>
                            </nav>
                            <h4 className="title total">İletişim Bilgileri</h4>
                            <p className="user-details total">
                                Meryem Talay (meyremtlly@gmail.com)
                            </p>
                            <h4 className='mb-3'>Sipariş Adresi</h4>
                            <form action='' className='d-flex gap-15 flex-wrap justify-content-between'>
                                <div className='w-100'>
                                    <select name='' className='form-control form-select' id=''></select>
                                    <option value="" selected disabled>Şehir Seçiniz</option>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Ad' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Soyad' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Telefon' className="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input type="text" placeholder='Adres Başlığı (Apartman, Yurt, Suite..)' className="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input type="text" placeholder='Adres' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Posta Kodu' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                    <select name=''  placeholder='İlçe'className='form-control form-select' id=''><option value="" selected disabled></option></select>
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/cart" className="text-dark">
                                        <BiArrowBack className='me-2'/> Ürüne Geri Dön
                                        </Link>
                                        <Link to="/cart" className="button">
                                            Ödemeye Devam Et
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='border-bottom py-4'>
                            <div className="d-flex gap-10 mb-2 align-align-items-center">
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span style={{top:"-10px",right:"2px"}} className="badge bg-secondary text-white rounded-circle p-3 position-absolute">
                                            1
                                        </span>
                                        <img className='img-fluid' src={watch} alt="product" />
                                    </div>
                                    <div>
                                        <h5 className="total-price">sdfdsf</h5>
                                        <p className='total-price'> sdasfd</p>
                                    </div>
                                </div>
                                <div className='flex-gro-1'>
                                    <h5 className='total'>2.000tl</h5>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='total'>Ücret:</p>
                                <p className='total-price'>2000 </p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Kargo ücreti:</p>
                                <p className='mb-0 total-price'>2000 </p>
                            </div>
                            
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Toplam</h4>
                            <h5 className='total-price'>2.500tl </h5>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default CompleteOrder   