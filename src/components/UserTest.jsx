import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UserTest = () => {
    
    const loadedUsers=useLoaderData()
    const [users,setUsers]=useState(loadedUsers)
    
    const handleDelete =(_id)=>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            const remaining = users.filter(user=>user._id !== _id);
            setUsers(remaining)
        })
    }
    
    return (
        <div>
            {
                users.map(user=><p key={user._id}>{user.name}: {user.email} <Link to={`/update/${user._id}`}><button>update</button></Link> <button onClick={()=>handleDelete(user._id)}>x</button></p>)
            }
        </div>
    );
};

export default UserTest;