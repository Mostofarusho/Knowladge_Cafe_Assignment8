import React, { useEffect, useState } from 'react';
import Singledata from '../SingleData/SingleData';
import SideCart from '../SideCart/SideCart';

const Article = ({ handleReadTime,handleBookMark,handleBookMarkDescription }) => {
    const [article, setArticle] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setArticle(data));
    }, [])
    return (
        <div>
            {article.map((singleData) => (
                <Singledata
                    singleData={singleData}
                    handleReadTime={handleReadTime}
                    handleBookMark={handleBookMark}
                    handleBookMarkDescription={handleBookMarkDescription}
                    key={singleData.id}

                />

            ))}


        </div>
    );
};

export default Article;
{/* <SideCart
    singleData={singleData}
    key={singleData.id}
/> */}