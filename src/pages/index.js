import React from 'react'
import ReactMarkdown from 'react-markdown';

import homepageContent from '../markdown/home.md';

const IndexPage = () => (
    <div id="root">
        <ReactMarkdown source={homepageContent} />
    </div>
);

export default IndexPage
