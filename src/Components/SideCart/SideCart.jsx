import React from 'react';
import "./SideCart.css";
const SideCart = ({ readingTime, bookMark,bookMarkDescription }) => {

    return (
        <div>
            <div className="readTime">
                <div className="badge badge-accent">Spent Time on Read:{readingTime} min</div>
            </div>
            <p>Book Mark blogs:{bookMark}</p>
            <div className='para'>
              <p className='pn'>{bookMarkDescription}</p>
            </div>
           
        </div>
    );
};

export default SideCart;