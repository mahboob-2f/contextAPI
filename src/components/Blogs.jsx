import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import Card from './Card';

function Blogs(){

  const{loading,posts}= useContext(AppContext);
  // console.log(posts);
  // console.log(loading);

  return(
    <div className='w-full mx-auto pt-4 space-y-4'>
      {
        loading ? (<Spinner/ >):(
          posts.length === 0 ? (
            <div className='text-3xl font-bold font-serif'>
              no posts found
            </div>
          ):(
            posts.map((post)=>{return <Card key={post.id} {...post}/>})
          )
        )
      }
    </div>
  )
}

export default Blogs;