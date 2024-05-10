import React from 'react';
import { Link } from 'react-router-dom';
import { LuInstagram } from "react-icons/lu";
import { BsInstagram } from 'react-icons/bs';



const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter'></img>
                <h2 className='mb-0 text-white'>Ürünlerden haberdar olun</h2>
              </div>
            </div>
            <div className='col-7'>
            <div className="input-group">
                <input 
                type="text" 
                className="form-control py-1" 
                placeholder="Email adresiniz.." 
                aria-label="Email adresiniz.." 
                aria-describedby="basic-addon2" 
                />
                <span class="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
            </div>
            </div>
          </div>
        </div> 
      </footer>    
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
            <h4 className='text-white mb-4'>İletişim</h4>
            <div> 
                <address className='text-white fs-6'>Hürriyet, Murat Paşa Cd. No:28, 49120 <br /> Muş Merkez, 49100 Muş Merkez/Muş</address>
                <a href='/' className='mt-3 d-block mb-1 text-white'>
                tel adress not available right now
                </a>
                <a href='mailto: lalegulavizemus@gmail.com' className='mt-2 d-block mb-0 text-white'>
                lalegulavizemus@gmail.com
                </a>
                <div className='social_icons d-flex align-items-center gap-30 mt-4' >
                  <a className='text-white' href=''>
                    <BsInstagram className='fs-4'/>
                  </a>
                  {/* <a href=''></a>
                  <a href=''></a>
                  <a href=''></a> */}
                  </div>                
              </div> 
            </div>
            <div className='col-3'>
            <h4 className='text-white mb-4'>Bilgi</h4>
            <div className='footer-link d-flex flex-column'> 
                <Link to="/privacy-policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to="/refund-policy" className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to="/shipping-policy" className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to="/term-conditions" className='text-white py-2 mb1'>Terms & Conditions</Link>
                <Link to="/blogs" className='text-white py-2 mb1'>Blogs</Link>

              </div> 
            </div>
            <div className='col-3'>
            <h4 className='text-white mb-4'>Hesaplar</h4>
            <div className='footer-link d-flex flex-column'> 
                <Link className='text-white py-2 mb-1'>Hakkımızda</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>İletişim</Link>
              </div> 
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'> Hızlı Linkler</h4>
              <div className='footer-link d-flex flex-column'> 
                <Link className='text-white py-2 mb-1'>Avizeler</Link>
                <Link className='text-white py-2 mb-1'>Lambaderler</Link>
                <Link className='text-white py-2 mb-1'>Abajurlar</Link>
                <Link className='text-white py-2 mb1'>Aplikler</Link>
              </div> 
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy: {new Date().getFullYear}; Powered by Meryem  
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer