import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ()=> {
  return (
    <div className="blog-card">
      <div className="card-images">
      <img src='images/ablog-1.png' className='img-fluid w-100' alt="blog"/>
      </div>
      <div className="blog-content">
        <p className="date">29 Mart 2024</p>
        <h5 className="title"> <b>Avize Trendleri 2024:</b> <br></br>Ev Tasarımınızı Yenilemek İçin Yeni Fikirler	</h5>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Link to="/blog/:id"className='button'>Daha fazla</Link>
      </div>
    </div>
  );
};

export default BlogCard;

// const BlogCard2 = ()=> {
//   return (
//   <div className='col-3'>
//     <div className="blog-card">
//       <div className="card-images">
//       <img src='images/ablog-2.png' className='img-fluid' alt="blog"/>
//       </div>
//       <div className="blog-content">
//         <p className="date">29 Mart 2024</p>
//         <h5 className="title"><b>Mutfakta Aydınlatma:</b> <br /> Hangi Avize Modeli Sizin İçin?</h5>
//         <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         <Link to="/"className='button'>Daha fazla</Link>
//       </div>
//     </div>
//   </div>
//   );
// };

// const BlogCard3 = ()=> {
//   return (
//   <div className='col-3'>
//     <div className="blog-card">
//       <div className="card-images">
//       <img src='images/ablog-3.png' className='img-fluid' alt="blog"/>
//       </div>
//       <div className="blog-content">
//         <p className="date">29 Mart 2024</p>
//         <h5 className="title"><b>Avizelerle Salonunuzu Aydınlatın:</b><br /> Dekorasyon İpuçları</h5>
//         <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         <Link to="/"className='button'>Daha fazla</Link>
//       </div>
//     </div>
//   </div>
//   );
// };
// const BlogCard4 = ()=> {
//   return (
//   <div className='col-3'>
//     <div className="blog-card">
//       <div className="card-images">
//       <img src='images/ablog-4.png' className='img-fluid' alt="blog"/>
//       </div>
//       <div className="blog-content">
//         <p className="date">29 Mart 2024</p>
//         <h5 className="title"><b>Masa Lambaları:</b><br />Masa Lambaları ve Kullanım Alanları</h5>
//         <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         <Link to="/"className='button'>Daha fazla</Link>
//       </div>
//     </div>
//   </div>
//   );
// };
