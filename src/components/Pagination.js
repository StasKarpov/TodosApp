import React from 'react'

const Pagination = ({currentPage,maxPage,fetchTasks}) => (
  <div>
    {currentPage > 1 ?
      <button onClick={()=>fetchTasks(currentPage-1)}>Prev page</button> : null}

     Page:{currentPage}

    {currentPage < maxPage ?
      <button onClick={()=>fetchTasks(currentPage+1)}>Next page</button> : null}
    <br/>
    <h4>Sort by:</h4>
    <button onClick={()=>fetchTasks(currentPage,'id')}>id</button>
    <button onClick={()=>fetchTasks(currentPage,'username')}>username</button>
    <button onClick={()=>fetchTasks(currentPage,'email')}>email</button>
    <button onClick={()=>fetchTasks(currentPage,'status')}>status</button>

  </div>
)

export default Pagination
