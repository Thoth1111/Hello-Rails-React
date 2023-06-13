import React, { useEffect, useState } from 'react';

const Message = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/messages/random')
        .then((response) => response.json())
        .then((data) => setMessage(data.message))
        .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
};

export default Message;