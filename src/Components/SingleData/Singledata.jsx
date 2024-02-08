import React from 'react';

const Singledata = (props) => {
    const { authorName, category, description, level, poster, publishedDate, readingTime } = props.singleData;
    console.log(props);
    return (
        <div>
            <div className="card w-2/3 bg-base-100 shadow-xl">
                <figure><img className='w-full h-64' src={poster} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                    <div className='flex'>
                    <img className='w-12 h-12  rounded' src="https://img.freepik.com/free-vector/tiktok-profile-picture-template_742173-4482.jpg?w=740&t=st=1707376976~exp=1707377576~hmac=9668b265c89fcc0de4ee5ec47f1dc82b52669ed6e31a99202887eb0fe3d8613c" alt="" />
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
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singledata;