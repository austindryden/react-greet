import React from 'react';

function Greet({ whom, how, color }) {
    return(
    <div 
    style={{color}}
    className="card greet">
        <h1>{how}, {whom}!</h1>
    </div>
    );
}

Greet.defaultProps = {
    whom :"Bob Barker",
    how :"The Price is Wrong"
}

export default Greet;