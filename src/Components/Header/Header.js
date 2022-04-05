import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <div className="container d-flex justify-content-between mt-3">
                <div className="fs-2 fw-bold"><span className="fst-italic text-success">Movie</span> Review</div>
                <div className="d-flex fw-bold align-items-center">
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/reviews">Reviews</CustomLink>
                    <CustomLink to="/dashboard">Dashboard</CustomLink>
                    <CustomLink to="/blogs">Blogs</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </div>
            </div>
        </div>
    );
};

export default Header;