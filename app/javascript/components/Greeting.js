import React, { useEffect, useState } from 'react';

const Greeting = () => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        fetch('/api/greetings/random')
        .then((response) => response.json())
        .then((data) => setGreeting(data.message))
        .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h2>{greeting}</h2>
        </div>
    );
};

export default Greeting;