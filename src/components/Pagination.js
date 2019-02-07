import React from 'react'

const Pagination = ({currentPage,maxPage,fetchTasks,sortBy,order}) => (
  <div>
    {currentPage > 1 ?
      <button onClick={()=>fetchTasks(currentPage-1,sortBy,order)}>Prev page</button> : null}

     Page:{currentPage} of {maxPage}

    {currentPage < maxPage ?
      <button onClick={()=>fetchTasks(currentPage+1,sortBy,order)}>Next page</button> : null}
    <br/>

    <h4>Sort by:</h4>
    <button onClick={()=>fetchTasks(currentPage,'id',order)} disabled={sortBy==='id'?true:false}>id</button>
    <button onClick={()=>fetchTasks(currentPage,'username',order)} disabled={sortBy==='username'?true:false}>username</button>
    <button onClick={()=>fetchTasks(currentPage,'email',order)} disabled={sortBy==='email'?true:false}>email</button>
    <button onClick={()=>fetchTasks(currentPage,'status',order)} disabled={sortBy==='status'?true:false}>status</button>
    <br/>
    <h4>Order:</h4>
    <button onClick={()=>fetchTasks(currentPage,sortBy,'desc')} disabled={order==='desc'?true:false}>Desc</button>
    <button onClick={()=>fetchTasks(currentPage,sortBy,'asc')} disabled={order==='asc'?true:false}>Asc</button>
  </div>
)

export default Pagination
