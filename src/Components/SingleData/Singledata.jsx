import React from 'react';

const Singledata = (props) => {
    const { authorName, authorImage, category, description, level, poster, publishedDate, readingTime } = props.singleData;
    console.log(props);
    return (
        <div>
            <div className="card w-2/3 bg-base-100 shadow-xl border border-gray-300 rounded-lg p-4">
                <figure><img className='w-full h-64' src={poster} alt="Shoes" /></figure>
                <div className="card-body ">
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <img className='w-12 h-12  rounded' src={authorImage} alt="" />
                            <div className='ml-2'>
                                <h2 className="card-title"> {authorName}</h2>
                                <p>{publishedDate}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <p>{readingTime}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>

                        </div>
                    </div>
                    <div className='text-left py-2'>
                        <p className='header mr-12'>{description}</p>

                        <p>{level} {category}</p>
                        <h1>Mark As read</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Singledata;