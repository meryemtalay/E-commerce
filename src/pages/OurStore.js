import React, {useState} from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from 'react-rating-stars-component'
import ProductCard from "../components/ProductCard"
import Color from '../components/Color'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'



const OurStore = () => {
  const [grid,setGrid]=useState(4);
  return (    
    <>
        <Meta title={"Mağaza"} />
        <BreadCrumb title="Mağaza"/>
        <Container class1='store-wrapper home-wrapper-2 py-5'>
            <div className='row'>
              <div className="col-3">
                <div className='filter-card mb-3'>
                  <h3 className="filter-title">Kategoriler</h3>
                  <div>
                    <ul className='ps-0'>
                      <li>Avize</li>
                      <li>Aplik</li>
                      <li>Ampul</li>
                      <li>Lambader</li>
                    </ul>
                  </div>
                </div>
                <div className='filter-card mb-3'>
                <h3 className="filter-title">Filtrele</h3>
                <div>
                  <h5 className="sub-title">Bulunma Durumu</h5>
                  <div>
                  <div className='form-check'>

                    <input className="form-check-input" type="checkbox" value="" id=""/>
                    <label className="form-check-label" htmlFor="">
                      Stokta Var(1)
                    </label>
                  </div>
                  <div className='form-check'>
                    <input className="form-check-input" type="checkbox" value="" id=""/>
                    <label className="form-check-label" htmlFor="">
                      Stokta Yok(0)
                    </label>
                  </div>
                  </div>
                  <h5 className="sub-title">Fiyat</h5>
                    <div className='d-flex align-items-center gap-10'>
                      <div className="form-floating">
                        <input type="email" className='form-control py-1' id="floatingInput" placeholder='En Az'/>
                        <label htmlFor="floatingInput">En Az</label>
                      </div>
                      <div className="form-floating">
                        <input type="email" className='form-control' id="floatingInput" placeholder='En Fazla'/>
                        <label htmlFor="floatingInput">En Fazla</label>
                      </div>
                    </div>
                  <h5 className="sub-title">Renk</h5>
                    <div>
                  
                     <Color />
                    </div>
                  <h5 className="sub-title">Boyut</h5>
                    <div>
                    <div className='form-check'>
                      <input className="form-check-input" type="checkbox" value="" id="color-1"/>
                      <label className="form-check-label" htmlFor="">
                        S(2)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className="form-check-input" type="checkbox" value="" id="color-2"/>
                      <label className="form-check-label" htmlFor="">
                        M(2)
                      </label>
                    </div>
                    </div>
                </div>
                </div>
                <div className='filter-card mb-3'>
                <h3 className="filter-title">Ürün Etiketleri</h3>
                  <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        Avize
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        Aplik
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        Lambader
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        Led
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        Tekli Sarkıt
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        Abajur
                      </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                        Planfonyer
                      </span>
                    </div>
                  </div>
                </div>
                <div className='filter-card mb-3'>
                <h3 className="filter-title">Rastgele Ürünler</h3>
                  <div>
                    <div className="random-products mb-5 d-flex">
                      <div className="w-75">
                        <img src="/images/planfonyer.jpg" className='img-fluid' alt="watch"></img>
                      </div>
                      <div className="w-50">
                        <h5>
                        Decobulvar 8 Çubuk LED Tavan Armatürü                        </h5>
                        <ReactStars 
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                        />
                        <b>2.439TL</b>
                      </div>
                    </div>
                    <div className="random-products d-flex">
                      <div className="w-75">
                        <img src="/images/decobulvr.jpg" className='img-fluid' alt="watch"></img>
                      </div>
                      <div className="w-50">
                        <h5>
                        Decobulvar Ledli Üç Çember Profilli Gold                         </h5>
                        <ReactStars 
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                        />
                        <b>6.048,00 TL</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="filter-sort-grid mb-4">
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center gap-10'>
                      <p className='mb-0 d-block' style={{width:"100px"}}>Sort By:</p>
                      <select name='' className='form-control form-select' id=''>
                          <option value="manual">Featured</option>
                          <option value="best-selling">
                            Best selling
                          </option>
                          <option value="title-ascending">
                            Alphabetically, A-Z
                          </option>
                          <option value="title-descending">
                            Alphabetically, Z-A
                          </option>
                          <option value="price-ascending">
                            Price, low to you
                          </option>
                          <option value="price-descending">
                            Price, high to you
                          </option>
                          <option value="created-ascending">
                            Date, old to new
                          </option>
                          <option value="created-descending">
                            Date, new to old
                          </option>
                      </select>
                    </div>
                    <div className="d-flex alignitems-center gap-10">
                      <p className='totalproducts mb-0'>21 Products</p>
                      <div className="d-flex gap-10 alignitems-center grid">
                        <img onClick={()=> {setGrid(3);}} src='/images/gr4.svg' className='d-block img-fluid' alt='grid'/>
                        <img onClick={()=> {setGrid(4);}} src='/images/gr3.svg' className='d-block img-fluid' alt='grid'/>
                        <img onClick={()=> {setGrid(6);}} src='/images/gr2.svg' className='d-block img-fluid' alt='grid'/>
                        <img onClick={()=> {setGrid(12);}} src='/images/gr.svg' className='d-block img-fluid' alt='grid'/>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="products-list pb-5">
                  <div className="d-flex gap-10 flex-wrap"><ProductCard grid={grid} /></div>
                </div>
              </div>
            </div>
        </Container>
    </>
  );

};

export default OurStore;