import React, { useEffect, useState } from 'react';
import Singledata from '../SingleData/SingleData';

const Article = () => {
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
                    key={singleData.id}

                />
            ))}


        </div>
    );
};

export default Article;