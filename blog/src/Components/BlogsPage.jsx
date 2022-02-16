import React from 'react';
import Blog from './Blog';

import "../Css/blog.css";
import { useParams } from 'react-router';
function BlogsPage() {
  let  {genre}= useParams();
  
    return (
        <div className="Card-Container" >
            {genre}
            <Blog blogs={[1,2,3,4,5,6]} ></Blog>
        </div>
    );
}

export default BlogsPage;