import React from 'react';

Greet.defaultProps = {
    whom :"Bob",
    how :"The Price is Wrong"
}

function Greet({ whom, how, color }) {
    return(
    <div 
    style={{color}}
    className="card greet">
        <h1>{how}, {whom}!</h1>
    </div>
    );
}

export default Greet;