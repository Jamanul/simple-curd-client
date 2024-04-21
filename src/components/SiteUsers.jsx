import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SiteUsers = () => {
    const users=useLoaderData()
    return (
        <div>
            {
                users.map(user=><p key={user._id}>{user.name}: {user.email}</p>)
            }
        </div>
    );
};

export default SiteUsers;