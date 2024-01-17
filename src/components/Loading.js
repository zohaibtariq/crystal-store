import React from 'react';

const Loading = () => {
    return <div className={`container d-flex align-items-center justify-content-center`}>
        <button className="btn btn-primary mt-5 mb-5" type="button" disabled="">
            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
            &nbsp;
            <span role="status">Loading...</span>
        </button>
    </div>;
};

export default Loading;
