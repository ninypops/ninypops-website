import React from 'react';

const Blog = () => (
    <React.Fragment>
        <hr />
        <h2 className="color-white">blog title here</h2>
        <p className="color-white">
            date published
            {' '}
            |
            {' '}
            blog category
        </p>
        <p>blog preview here</p>
        <a className="link-to-all" href="https://ninypops.com" rel="noopener noreferrer" target="_blank">read more</a> 
    </React.Fragment>
);

export default Blog;