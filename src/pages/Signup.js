import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
const Signup = () => {
  return (
    <>
        <Meta title={"Kayıt Ol"} />
        <BreadCrumb title="Kayıt Ol"/>

        <Container class1="login-wrapper py-5 home-wrapper-2">
              <div className="row">
                  <div className="col-12">
                      <div className="auth-card">
                          <h3 className='text-center mb-3'>Kayıt Ol</h3>
                          <form action='' className='d-flex flex-column gap-15'>
                            <CustomInput type="text" name='name' placeholder='Ad' />
                            <CustomInput type="email" name='email' placeholder='Email' />
                            <CustomInput type="tel" name='mobile' placeholder='Telefon Numarası' />
                            <CustomInput className="mt-1" type="password" name="password" placeholder='Şifre'  />

                              <div>
                                  <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                      <button className='button border-0'>Kayıt</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>            
        </Container>
    </>
  )
}

export default Signup

