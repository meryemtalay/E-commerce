import React from 'react'
import Meta from  '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai"
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'
import Container from '../components/Container'
const Contact=()=> {
  return (
    <>
    <Meta title={"Bizimle İletişime Geçin"} />
    <BreadCrumb title="İletişim" />

    <Container class1="contact-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.9963405375156!2d41.490950399999996!3d38.7408462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4072e5cd5932a2e7%3A0x3db2dbd0a23520a!2zTXXFnyBMYWxlZ8O8bCBBdml6ZQ!5e0!3m2!1str!2str!4v1714868708183!5m2!1str!2str" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-12 mt-5">
          <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4">İletişim</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input type='text' className='form-control' placeholder='Name'/>
                  </div>
                  <div>
                    <input type='email' className='form-control' placeholder='Email'/>
                  </div>
                  <div>
                    <input type='tel' className='form-control' placeholder='Mobile Number'/>
                  </div>
                  <div>
                    <textarea name=''id=''className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
              <h3 className="contact-title mb-4">Bizimle İletişime Geçin</h3>
              <div>
                <ul className='ps-0'>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <AiOutlineHome className='fs-5'/>
                    <address className='mb-0'> 
                      Hürriyet, Murat Paşa Cd. No:28, 49120 Muş Merkez, 49100 Muş Merkez/Muş
                    </address>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BiPhoneCall className='fs-5'/>
                    <a href='tel: +90 2425 test'>tel: +90 2425 test</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <AiOutlineMail className='fs-5'/>
                    <a href='mailto:lalegulavize@gmail.com'>lalegulavize@gmail.com</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                  <BiInfoCircle className='fs-5'/>
                  <p className='mb-0'>Pazartesi - Cumartesi 11.00 - 21.00</p>
                  </li>
                </ul>
              </div>
              </div>
          </div>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Contact