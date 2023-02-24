// import React from 'react'

// const Form = () => {
//     return (
//         <div>
//             <form onSubmit={handelsubmit}>
//                 <h3>Only Authorised User can Acess It</h3>
//                 <label>
//                     Title:
//                     <input className='imp11' type="text" placeholder='Enter thr title' name='title' value={title} onChange={handelchange} />
//                 </label>
//                 <br />
//                 <br />
//                 <label>
//                     Name:
//                     <input className='imp11' type="text" placeholder='Enter thr Name' name='name' value={name} onChange={handelchange} />
//                 </label>
//                 <br />
//                 <br />
//                 <label>
//                     Image URL:
//                     <input className='imp11' type="text" placeholder='Enter thr Image Url' name='image' value={image} onChange={handelchange} />
//                 </label>
//                 <br />
//                 <br />

//                 <label>
//                     Price:
//                     <input className='imp11' type="text" placeholder='Enter thr Price' name='price' value={price} onChange={handelchange} />
//                 </label>
//                 <br />
//                 <br />

//                 <label>
//                     Description:
//                     <input className='imp11' type="text" placeholder='Enter thr Description' name='description' value={description} onChange={handelchange} />
//                 </label>
//                 <br />
//                 <br />
//                 <input className='imp12' type="submit" value="create items" />
//             </form>
//             <br />
//             <hr />
//             <hr />
//             <h1>ITEMS Added To The Page</h1>
//             {/* <br /> */}
//             <table>
//                 {/* <!-- Dont change order of columns --> */}
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Name</th>
//                         <th>Image Url</th>
//                         <th>Price</th>
//                         <th>Description</th>
//                         <th>Delete</th>

//                     </tr>
//                 </thead>
//                 <tbody>
//                     {/* <!-- Append your output to tbody --> */}
//                     {products.map((el) => {
//                         return (
//                             <tr>
//                                 <td>{el.title}</td>
//                                 <td>{el.name}</td>
//                                 <td>{el.image}</td>
//                                 <td>{el.price}</td>
//                                 <td>{el.description}</td>

//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//             {/* {products.map((el)=>{
//         return(
//           <div>
//             <h1>{el.name}</h1>
//           </div>
//         )
//       })} */}
//         </div>

//     )
// }
// export default Form
