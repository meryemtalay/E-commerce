import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
const Forgotpassword = () => {
  return (
    <>
        <Meta title={"Şifremi unuttum"} />
        <BreadCrumb title="Şifremi unuttum"/>

        <div className="login-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center mb-3'>Şifremi Unuttum</h3>
                        <p className='text-center my-2'>
                          Şifreni sıfırlaman için sana mail göndereceğiz.
                        </p>
                        <form action='' className='d-flex flex-column gap-15'>
                            <div>
                                <input type="email" name='email' placeholder='Email' className="form-control" />
                            </div>

                            <div>
                                <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                                    <button className='button border-0' type='submit'>Gönder</button>
                                    <Link to='/login'>İptal</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Forgotpassword