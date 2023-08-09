import React, { useContext } from 'react';
import { userAuth } from '../UserProvider';

const InstructorHome = () => {

    let {user} = useContext(userAuth)
    return (
        <div>
           <h1 className='text-center font-semibold text-3xl my-7'>Welcome  {user?.displayName}, You are an Instructor</h1>
        </div>
    );
};

export default InstructorHome;