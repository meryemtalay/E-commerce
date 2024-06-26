import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import React from 'react'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Resetpassword = () => {
  return (
    <>
        <Meta title={"Şifre Sıfırla"} />
        <BreadCrumb title="Şifre Sıfırla"/>
        <Container class1="login-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center mb-3'>Şifreni Sıfırla</h3>
                        <form action='' className='d-flex flex-column gap-15'>
                            <CustomInput type="password" name="password" placeholder='Yeni Şifrenizi Girin'/>
                            <CustomInput className="mt-1" type="password" name="confpassword" placeholder='Şifreyi Onayla' />

                            <div>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0'>Onayla</button>
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

export default Resetpassword