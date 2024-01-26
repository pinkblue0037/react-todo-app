import React from 'react';

const ListTodosComponent = () => {


    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12, today.getDate(), today.getDay())

    const todos = [
        {id:1, description: 'Learn AWS', done:false, targetDt:targetDate},
        {id:2, description: 'Learn DevOps', done:false, targetDt:targetDate},
        {id:3, description: 'Learn CrossFit', done:false, targetDt:targetDate}
    ]

    console.log(todos)

    return (
        <div className='container'>
            <h1>TodoList Component</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Desc</td>
                            <td>IsDone</td>
                            <td>TargetDt</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(value => (
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.description}</td>
                                    <td>{value.done.toString()}</td>
                                    <td>{value.targetDt.toDateString()}</td>
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