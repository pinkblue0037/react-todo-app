import React from 'react';
import { Link, useParams } from 'react-router-dom';

const WelcomeComponent = () => {
    const {username} = useParams()
    
    return (
        <div className='WelcomeComponent'>
            <h1>Welcome component {username}</h1>
            <div>
                Your todos. <Link to='/todos'>Go here!!</Link>
            </div>
        </div>
    );
};

export default WelcomeComponent;