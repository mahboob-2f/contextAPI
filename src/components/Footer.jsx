import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Footer() {
  const {page,handlePageChange,totalPages} = useContext(AppContext);

  return (
    <div>
     <div>
       { page > 1 &&
        <button onClick={()=> handlePageChange(page-1)}> 
          Previous
          </button>
      }
      {
        page<totalPages && 
        <button onClick={()=> handlePageChange(page+1)}>
          next
        </button>
      }
     </div>
     <div>
      <p>page {page} of {totalPages}</p>
     </div>
    </div>
  )
}

export default Footer