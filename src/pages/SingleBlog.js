import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'
import Blog from './Blog'
const SingleBlog = () => {
  return (
    <>
        <Meta title={"Dinamik Blog"} />
        <BreadCrumb title="Dinamik Blog"/>
        <div className='blog-wrapper home-wrapper-2 py-5'>
          <div className='container-xxl'>
            <div className="row">
              <div className="col-12">
                <div className="single-blog-card">
                    <h3 className="title">
                        Blog Başlığı Burada Görünecek
                    </h3>
                    <img />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SingleBlog



