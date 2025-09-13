import React from 'react'

function Card({ title, author, date, category, content, tags }) {
    return (
        <div className='flex flex-col gap-y-1 py-2  '>
            <p className='font-bold  text-[18px]'>{title}</p>
            <div>
                <p>By <span className='italic font-thik'>{author}</span> on <span className='font-semibold underline text-[15px]

                '>{category}</span></p>
                <p>Posted on {date}</p>

            </div>
            <p className='
                py-1 font-[500]
            '>{content}</p>
            <div className=' flex text-sm gap-x-2'>
                {tags.map((tag, ind) => {
                    return (
                        <p className='text-[blue]  underline text-[14px]' key={ind}>{`#${tag}`}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Card