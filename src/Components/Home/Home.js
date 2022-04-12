import React from 'react';
import Reviewer from '../Reviewer/Reviewer';
import Reviews from '../Reviews/Reviews';
import CustomHook from '../../CustomHooks/CustomHooks';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [reviewer, setReviewer] = CustomHook();
    const navigate = useNavigate();
    const showAll = () => {
        navigate('/reviews')
    }

    return (
        <div>
            <div className="container mt-5 mb-5 d-flex justify-content-between">
                <div className="row align-items-center">
                    <div className="col-md-6 col-xs-12">
                        <div>
                            <h2>One of the <span className="fw-bold" style={{ color: '#8D3DAF' }}>Best Movies</span> Till Date</h2>
                            <p>What could possibly make a movie Top Rated? Viewers review and rating could be a milestone for a movie to be the greatest of all time! Let's explore the reviews of "The Godfather", one of the greatest of all time...</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <img className="w-75" src="https://cpb-us-w2.wpmucdn.com/blogs.iu.edu/dist/f/65/files/2019/04/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_-1odtbn5.jpg"></img>
                    </div>
                </div>
            </div>
            <h2>Movie Freak Reviews!(3)</h2>

            <div className=" container mx-auto d-flex row">
                {
                    reviewer.slice(0, 3).map(review => <Reviewer key={review.id} review={review} ></Reviewer>)
                }
            </div>
            <button className="my-5" onClick={showAll} >See All Reviews</button>
        </div>
    );
};

export default Home;