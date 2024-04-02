import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
// import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import {BlogCard1,BlogCard2,BlogCard3,BlogCard4} from  '../components/BlogCard';
import SpecialProduct from "../components/SpecialProduct";
const Home = () => {
  return ( 
    <>
  <section className='home-wrapper-1 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-6'>
          <div className='main-banner position-relative '>
            <img src="images/adminn.png" className="img-fluid rounded-3" alt="main banner" 
            />
            <div className='main-banner-content position-absolute'>
              <h4>deneme</h4>
              <h5>Burada</h5>
              <p>fromfeo dfdf</p>
              <Link className='button'>Şimdi Satın al</Link>
            </div>
          </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                <img src="images/dnm1.png" 
                className="img-fluid rounded-3" 
                alt="main banner" 
                />
                <div className='small-banner-content position-absolute'>
                  <h4>İndirim!</h4>
                  <h5>Avize</h5>
                  <p>%10 indirimi<br /> Kaçırma</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src="images/dnm2.png" 
                className="img-fluid rounded-3" 
                alt="main banner" 
                />
                <div className='small-banner-content position-absolute'>
                  <h4>Yeni gelenler</h4>
                  <h5>Yeni Gelen</h5>
                  <p>Kaçırılmayacak<br /> Fırsatlar!</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src="images/dnm3.png" 
                className="img-fluid rounded-3" 
                alt="main banner" 
                />
                <div className='small-banner-content position-absolute'>
                  <h4>Yeni gelenler</h4>
                  <h5>Modern Aplikler</h5>
                  <p>aplik<br /> test</p>
                </div>
              </div>
              <div className='small-banner position-relative p-3'>
                <img src="images/dnm4.png" 
                className="img-fluid rounded-3" 
                alt="main banner" 
                />
                <div className='small-banner-content position-absolute'>
                  <h4>Yeni gelenler</h4>
                  <h5>En Uygun</h5>
                  <p>Lambader Çeşitleri <br />dfdf</p>
                </div>
              </div>
            </div>
          </div>
        
      </div>  
    </div>
  </section> 
  <section className='home-wrapper-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='services d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center gap-10'>
              <img src="images/service.png" alt="services"/>
              <div>
                <h6>Bedava Kargo</h6>
                <p className='mb-0'>2000tl üzeri alışverişlerde</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img src="images/service-02.png" alt="services"/>
              <div>
                <h6>Günlük süprizler</h6>
                <p className='mb-0'>%25'e varan indirimler!</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img src="images/service-03.png" alt="services"/>
              <div>
                <h6>7/24 destek</h6>
                <p className='mb-0'>Bir uzmana danışın</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img src="images/service-04.png" alt="services"/>
              <div>
                <h6>Ekonomik Fiyatlar</h6>
                <p className='mb-0'>En uygun fiyatlar</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img src="images/service-05.png" alt="services"/>
              <div>
                <h6>Güvenli Ödeme</h6>
                <p className='mb-0'>%100 Güvenli Ödeme</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  <section className='home-wrapper-2 py-5'>
  <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
            <div className='d-flex align-items-center'>
                <div>
                  <h6>Tekli Avizeler</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tekli.jpg" alt ="camera"/>
              </div>
              <div className='d-flex  align-items-center'>
                <div>
                  <h6>Tepsi Avize</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tepsiavize.jpg" alt ="camera"/>
              </div>
              <div className='d-flex  align-items-center'>
                <div>
                  <h6>Aplikler</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/apliik.jpg" alt ="camera"/>
              </div>
              <div className='d-flex  align-items-center'>
                <div>
                  <h6>Masa Lambaları</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/desk.jpg" alt ="camera"/>
              </div>
              <div className='d-flex  align-items-center'>
                <div>
                  <h6>Tekli Avizeler</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tekli.jpg" alt ="camera"/>
              </div>
              <div className='d-flex  align-items-center'>
                <div>
                  <h6>Tepsi Avize</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tepsiavize.jpg" alt ="camera"/>
              </div>
              <div className='d-flex  align-items-center'>
                <div>
                  <h6>Aplikler</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/apliik.jpg" alt ="camera"/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Masa Lambaları</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/desk.jpg" alt ="camera"/>
              </div>
            </div>
        </div>
      </div>
  </div>        
  </section>
  <section className='featured-wrapper py-5 home-wrapper-2'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Featured Collection</h3>
        </div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>
    </div>
  </section> 
  <section className="famous-wrapper py-5 home-wrapper-2">
    <div className="container-xxl">
      <div className="row">
        <div className="col-3">
          <div className="famous-card position-relative">
              <img 
                src="images/afamous-1.png" 
                className='img-fluid' 
                alt='famous'
              />            <div className="famous-content position-absolute">
              <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>From $399 or $16.62/mo. for 24 mo.</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="famous-card position-relative">
            <img 
              src="images/afamous-2.png" 
              className='img-fluid' 
              alt='famous'
            />
            <div className="famous-content position-absolute">
              <h5 className='text-white'>Studio Display</h5>
              <h6 className='text-white'>600 nits of brightness.</h6>
              <p className='text-white'>27-inch 5K Retina display</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="famous-card position-relative">
            <img 
              src="images/afamous-3.png" 
              className='img-fluid' 
              alt='famous'
            />
            <div className="famous-content position-absolute">
              <h5 className='text-dark'>Smartphone</h5>
              <h6 className='text-dark'>600 nits of brightness.</h6>
              <p className='text-dark'>Now in Green. From $41.62/mo. for 24 month</p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="famous-card position-relative">
            <img 
              src="images/afamous-4.png" 
              className='img-fluid' 
              alt='famous'
            />
            <div className="famous-content position-absolute">
              <h5 className='text-dark'>Room-filling sound.</h5>
              <h6 className='text-dark'>600 nits of brightness.</h6>
              <p className='text-dark'>Now in Green. From $41.62/mo. for 24 month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className='special-wrapper py-5 home-wrapper-2'>
    <div className="container-xxl">
    <div className='row'>
    <div className="col-12">
          <h3 className="section-heading">Special Products</h3>
        </div>
    </div>
    <div className="row">
      <SpecialProduct />
      <SpecialProduct />
      <SpecialProduct />
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
        {/* <div className="col-2">
          <div className="card"></div>
        </div>
        <div className="col-2">
          <div className="card"></div>
        </div> */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>
    </div>
  </section> 
  <section className='marwque-wrapper home-wrapper-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
      <div className='col-12'>
        <div className='marquee-inner-wrapper card-wrapper'>
          <Marquee className='d-flex'>
            <div className='mx-4 w-25'>
              <img src="images/adk.png" alt="brand"/>
            </div>
            <div className='mx-4 w-25'>
              <button className="rounded-pill bg-black text-black px-5 py-4 border-0">Gürbüz Avize</button>
            </div>
            <div className='mx-4 w-25'>
              <img src="images/avonni.png" alt=""/>
            </div>
  
            <div className='mx-4 w-25'>
              <img src="images/begusa.png" alt=""/>
            </div>       
            <div className='mx-4 w-25'>
              <button className="rounded-pill bg-black text-black px-5 py-4 border-0">ÖZMER </button>
            </div>                
          </Marquee>
        </div>
        </div>
      </div>
    </div>
  </section>
  <section className='blog-wrapper py-5 home-wrapper-2'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">En Yeni Bloglarımız</h3>
        </div>
        <BlogCard1 />
        <BlogCard2 />
        <BlogCard3 />
        <BlogCard4 />

        {/* <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard /> */}
      </div>
    </div>
  </section>
  </>
);
};

export default Home