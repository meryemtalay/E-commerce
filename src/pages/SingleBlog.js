import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
const SingleBlog = () => {
  return (
    <>
        <Meta title={"Dinamik Blog Name"} />
        <BreadCrumb title="Dinamik Blog Name"/>
        <div className='blog-wrapper home-wrapper-2 py-5'>
          <div className='container-xxl'>
            <div className="row">
              <div className="col-12">
                <div className="single-blog-card">
                    <Link to="/blogs" className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-4'/> Bloglara geri dön</Link>
                    <h3 className="title">
                        Blog Başlığı Burada Görünecek
                    </h3>
                    <img src="images/blog-1.jpg" className='img-fluid w-100 my-4' alt='blog'/>
                    <p>
                      Buraya yazılan bloglar gelecek
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SingleBlog



