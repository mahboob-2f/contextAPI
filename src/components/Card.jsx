import React from 'react'

function Card({ title, author, date, category, content, tags }) {
    return (
        <div>
            <p className='font-bold text-[brown]'>{title}</p>
            <p>by{author}</p>
            <p>posted on {date}</p>
            <p>{content}</p>
            <div className=' flex text-sm'>
                {tags.map((tag, ind) => {
                    return (
                        <p key={ind}>{`#${tag}`}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Card