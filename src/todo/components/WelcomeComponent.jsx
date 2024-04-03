import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { retrieveHelloWorldBean } from '../api/HelloWorldApiService';

const WelcomeComponent = () => {
    const {username} = useParams()
    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi(){
        // Axios.get('https://jsonplaceholder.typicode.com/todos/1')
        retrieveHelloWorldBean({username})
            .then(response => {successResponse(response)})
            .catch(err => console.log(err))
    }

    function successResponse(response){
        console.log("successMsg : {}", response.data)
        setMessage(response.data)
    }

    return (
        <div className='WelcomeComponent'>
            <h1>Welcome component {username}</h1>
            <div>
                Your todos. <Link to='/todos'>Go here!!</Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>Click me!</button>
            </div>
            <div className='message'>{message} </div>
        </div>
    );
};

export default WelcomeComponent;