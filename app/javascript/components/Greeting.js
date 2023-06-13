import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../store';

const Greeting = () => {
    const greeting = useSelector((state) => state.greeting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGreeting());
    }, [dispatch]);

    return (
        <div>
            <h2>{greeting}</h2>
        </div>
    );
};

export default Greeting;