import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const user =useLoaderData()
    const handleUpdate =(e)=>{
        e.preventDefault()
        const form= e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser ={name,email}
        fetch(`http://localhost:5000/users/${user._id}`,{
            method: 'PUT',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(updatedUser)
        }) 
    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' defaultValue={user?.name}/> <br />
                <input type="email" name='email' defaultValue={user?.email} /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Update;