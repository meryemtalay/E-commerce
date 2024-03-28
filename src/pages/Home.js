import React from 'react'
import { Link } from 'react-router-dom';

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
            <div className='categories d-flex justify-content-between align-items-center'>
            <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Tekli Avizeler</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tekli.jpg" alt ="camera"/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Tepsi Avize</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tepsiavize.jpg" alt ="camera"/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Aplikler</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/apliik.jpg" alt ="camera"/>
              </div>


              <div className='d-flex gap-30 align-items-center'>
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
  </>
);
};

export default Home