import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <>
        <Meta title={"Kayıt Ol"} />
        <BreadCrumb title="Kayıt Ol"/>
        <div className="login-wrapper py-5 home-wrapper-2">
            <div className='container-xxl'>
              <div className="row">
                  <div className="col-12">
                      <div className="auth-card">
                          <h3 className='text-center mb-3'>Kayıt Ol</h3>
                          <form action='' className='d-flex flex-column gap-15'>
                              <div>
                                  <input type="text" name='name' placeholder='Ad' className="form-control" />
                              </div>
                              <div>
                                  <input type="text" name='surname' placeholder='Soyad' className="form-control" />
                              </div>
                              <div>
                                  <input type="tel" name='mobile' placeholder='Telefon Numarası' className="form-control" />
                              </div>
                              <div className='mt-1'>
                                  <input type="password" name="password" placeholder='Şifre' className="form-control" />
                              </div>
                              <div>
                                  <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                      <button className='button border-0'>Kayıt</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
            </div>
            
        </div>
    </>
  )
}

export default Signup

