import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Footer() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className='border-t-2 border-[#9a9797] w-full mt-8'>
      <div className='w-[45%] mx-auto flex justify-between items-center py-4'>
        <div className='flex justify-start gap-x-2'>
          {page > 1 &&
            <button className='border-2 border-gray-300 rounded-md cursor-pointer  py-[2px] px-3 text-lg'
              onClick={() => handlePageChange(page - 1)}>
              Previous
            </button>
          }
          {
            page < totalPages &&
            <button  className='border-2 border-gray-300 rounded-md cursor-pointer  py-[2px] px-3 text-lg'
            onClick={() => handlePageChange(page + 1)}>
              Next
            </button>
          }
        </div>
        <div className='flex  '>
          <p className='text-md font-semibold'>page {page} of {totalPages}</p>
        </div>
      </div>

    </div>
  )
}

export default Footer