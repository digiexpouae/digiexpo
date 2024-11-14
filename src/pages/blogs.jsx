import React from 'react';
import SEO from '../common/seo';
import Blog from '../components/blog';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Blog - DigiExpo"} canonicalUrl={"https://www.digiexpo.ae/blogs"}/> 
            <Blog />           
        </Wrapper>
    );
};

export default index;