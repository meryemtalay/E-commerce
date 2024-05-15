import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
const Login = () => {
  return (
    <>
        <Meta title={"Giriş Yap"} />
        <BreadCrumb title="Giriş Yap"/>

        <Container class1="login-wrapper py-5 home-wrapper-2"> 
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Giriş Yap</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <CustomInput type="email" name='email' placeholder='Email'/>
                                <CustomInput className="mt-1" type="password" name="password" placeholder='Şifre'/>

                                
                                <div>
                                    <Link to="/forgot-password">Şifreni mi unuttun?</Link>
                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <Link to="/signup" className='button signup'>Kayıt Ol</Link>
                                        <button className='button border-0' type='submit'>Giriş</button>
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

export default Login