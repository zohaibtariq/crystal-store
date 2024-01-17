import React, { useState } from 'react';

const TruncatedText = ({ text, limit }) => {
    const [showFullText, setShowFullText] = useState(false);

    const truncatedText =
        text.length > limit ? (showFullText ? text : `${text.slice(0, limit)}...`) : text;

    return (
        <>
            <p className="card-text">
                {truncatedText}
            </p>
            {text.length > limit && (
                <button className={`btn btn-primary`} onClick={() => setShowFullText(!showFullText)}>
                    {showFullText ? 'Show Less' : 'Show More'}
                </button>
            )}
        </>
    );
};

export default TruncatedText;
