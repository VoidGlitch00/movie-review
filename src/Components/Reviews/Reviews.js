import React from 'react';
import CustomHook from '../../CustomHooks/CustomHooks';
import Reviewer from '../Reviewer/Reviewer';

const Reviews = () => {
    const [reviewer, setReviewer] = CustomHook();
    console.log(reviewer);
    return (
        <div className="d-flex row">
                
            {
                reviewer.map(review =>
                    <Reviewer
                        key={review.id}
                        review={review}>
                    </Reviewer>
                )
            }
        </div>
    );
};

export default Reviews;