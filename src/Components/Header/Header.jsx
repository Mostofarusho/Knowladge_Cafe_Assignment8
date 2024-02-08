import React from 'react';
import "./Header.css";
const Header = () => {
    return (
        <div className='flex justify-between'>
            <h1 className='header'>Knowledge Cafe</h1>
            <img className='w-12 h-12  rounded' src="https://img.freepik.com/free-vector/tiktok-profile-picture-template_742173-4482.jpg?w=740&t=st=1707376976~exp=1707377576~hmac=9668b265c89fcc0de4ee5ec47f1dc82b52669ed6e31a99202887eb0fe3d8613c" alt="" />
            
        </div>
    );
};

export default Header;