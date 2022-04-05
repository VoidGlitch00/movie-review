import React from 'react';

const Reviewer = (props) => {
    const { name, review, ratings } = props.review;
    return (
        <div className="container mx-auto justify-content-center mt-5 d-flex col-xl-4 col-sm-12">
            <div className="card" style={{width: '15rem'}}>
                <div className="card-body">
                    <h3>{name}</h3>
                    <p className="card-text">{review}
                    </p>
                    <small>Ratings: {ratings}</small>
                </div>
            </div>
        </div >
    );
};

export default Reviewer;