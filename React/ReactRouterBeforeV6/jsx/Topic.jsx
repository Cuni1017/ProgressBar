import React from "react";

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.id}</h3>
        </div>
    );
}

export default Topic