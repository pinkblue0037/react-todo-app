import React, { useEffect, useState } from 'react';
import { retriveBoardListForUsername } from '../api/HelloWorldApiService';

const ListTodosComponent = () => {

    const [todos, setTodos] = useState([])
    
    useEffect(() =>refreshTodos(),[])
        
    function refreshTodos() {
        retriveBoardListForUsername('admin')
            .then((response) => {
                setTodos(response.data)
            })
            .catch((err) => console.log(err))  
    }

    return (
        <div className='container'>
            <h1>TodoList Component</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>num</td>
                            <td>description</td>
                            <td>title</td>
                            <td>writer</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(value => (
                                <tr key={value.num}>
                                    <td>{value.num}</td>
                                    <td>{value.description}</td>
                                    <td>{value.title}</td>
                                    <td>{value.writer}</td>
                                </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListTodosComponent;