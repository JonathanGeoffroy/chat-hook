import React from 'react';

const Messages = ({ messages }) => {
    return (
        <>
            {
                messages.map(m => <div key={m.id}>{m.text}</div>)
            }
        </>
    );
};

export {Messages};
