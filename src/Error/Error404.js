import React from 'react';

const Error404 = () => {
    const ErroStyle = {
        textAlign: 'center',
        color:'red'
    }
    return (
        <div style={ErroStyle}>
            <h3>Contains error 404!</h3>
        </div>
    );
};

export default Error404;