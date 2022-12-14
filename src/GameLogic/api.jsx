// import db from '../Firebase';
// import React,{useState,useEffect} from 'react';

// function Api() {
//   const [blogs,setBlogs]=useState([])
//   const fetchBlogs=async()=>{
//     const response=db.collection('data');
//     const data=await response.get();
//     data.docs.forEach(item=>{
//      setBlogs([...blogs,item.data()])
//     })
//   }
//   useEffect(() => {
//     fetchBlogs();
//   }, [])
//   return (
//     <div>
//       {
//         blogs && blogs.map(blog=>{
//           return(
//             <div>
//               <h4>{blog.name}</h4>
//               <p>{blog.id}</p>
//             </div>
//           )
//         })
//       }
//     </div>
//   );
// }

// export default Api;